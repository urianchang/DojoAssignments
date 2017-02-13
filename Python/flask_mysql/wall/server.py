from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
from flask.ext.bcrypt import Bcrypt
import re

app = Flask(__name__)
app.secret_key = "hush-hush"
bcrypt = Bcrypt(app)
mysql = MySQLConnector(app, 'wall')

@app.route('/')
def index():
    if 'x' not in session:
        session['x'] = 0
    print "*** Landing page ***"
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    print "*** LOGIN BUTTON PRESSED ***"
    email = request.form['mail']
    password = request.form['password']
    user_query = "SELECT * FROM users WHERE email = :email LIMIT 1"
    query_data = {'email': email}
    user = mysql.query_db(user_query, query_data)
    if len(user) > 0:
        if bcrypt.check_password_hash(user[0]['pw_hash'], password):
            session['x'] = user[0]['id']
            print "*** Welcome back, user. ***"
            return redirect('/wall')
        else:
            print "*** Wrong Password ***"
            flash("Incorrect password!", 'loginerror')
            return redirect('/')
    else:
        print "*** Cannot find user. Please register. ***"
        flash("Cannot find user. Please register.", 'loginerror')
        return redirect('/')

@app.route('/register', methods=['POST'])
def registerMe():
    print "*** REGISTER BUTTON PRESSED ***"
    fname = request.form['first_name']
    lname = request.form['last_name']
    mail = request.form['mail']
    pw = request.form['pword']
    cpw = request.form['c-pword']
    valid_status = True
    if len(fname) < 2:
        valid_status = False
        flash("First name has to be more than 2 characters!", 'regerror')
    if re.search(r'[0-9]', fname):
        valid_status = False
        flash("First name cannot contain numbers!", 'regerror')
    if len(lname) < 2:
        valid_status = False
        flash("Last name has to be more than 2 characters!", 'regerror')
    if re.search(r'[0-9]', lname):
        valid_status = False
        flash("Last name cannot contain numbers!", 'regerror')
    if not re.search(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$', mail):
        valid_status = False
        flash("Invalid E-mail format!", 'regerror')
    if len(pw) < 8:
        valid_status = False
        flash("Password should be at least 8 characters!", 'regerror')
    if pw != cpw:
        valid_status = False
        flash("Passwords do not match!", 'regerror')
    if valid_status:
        print "*** Looks good. Adding to database. ***"
        pw_hash = bcrypt.generate_password_hash(pw)
        insert_query = "INSERT INTO users (first_name, last_name, email, pw_hash, created_at, updated_at) VALUES (:fname, :lname, :mail, :pw_hash, NOW(), NOW())"
        query_data = {'fname': fname, 'lname': lname, 'mail': mail, 'pw_hash': pw_hash}
        mysql.query_db(insert_query, query_data)
        print "*** Thanks for registering ***"
        user_query = "SELECT * FROM users WHERE email = :mail LIMIT 1"
        user = mysql.query_db(user_query, query_data)
        session['x'] = user[0]['id']
        return redirect('/wall')
    else:
        print "*** Something went wrong ***"
        return redirect('/')

@app.route('/wall')
def showWall():
    query = "SELECT * FROM users WHERE id = :specific_id"
    data = {'specific_id': session['x']}
    user = mysql.query_db(query, data)
    msg_query = "SELECT messages.id as message_id, messages.user_id as user_id, CONCAT(users.first_name, ' ', users.last_name) as name, messages.message, DATE_FORMAT(messages.created_at, '%m/%d/%Y %r') as date FROM messages LEFT JOIN users ON messages.user_id = users.id ORDER BY message_id DESC;"
    messages = mysql.query_db(msg_query)
    cmt_query = "SELECT comments.message_id as message_id, CONCAT(users.first_name, ' ', users.last_name) as name, comments.comment, DATE_FORMAT(comments.created_at, '%m/%d/%Y %r') as date FROM comments LEFT JOIN users ON comments.user_id = users.id ORDER BY message_id, date;"
    comments = mysql.query_db(cmt_query)
    return render_template('wall.html', specific_user=user[0], messageList=messages, commentList=comments)

@app.route('/message', methods=['POST'])
def addMsg():
    print "*** Submitting a message ***"
    msg = request.form['message']
    user_id = request.form['user_id']
    print user_id, msg
    insert_query = "INSERT INTO messages (user_id, message, created_at, updated_at) VALUES (:user_id, :message, NOW(), NOW())"
    insert_data = { 'user_id': user_id, 'message': msg}
    mysql.query_db(insert_query, insert_data)
    print "*** Message added to Database ***"
    return redirect('/wall')

@app.route('/comment', methods=['POST'])
def addCmt():
    print "*** Submitting a comment ***"
    cmt = request.form['comment']
    user_id = request.form['user_id']
    message_id = request.form['message_id']
    print "User ID:", user_id, "Message ID:", message_id, "Comment:", cmt
    insert_query = "INSERT INTO comments (message_id, user_id, comment, created_at, updated_at) VALUES (:message_id, :user_id, :cmt, NOW(), NOW())"
    insert_data = {'message_id': message_id, 'user_id': user_id, 'cmt': cmt}
    mysql.query_db(insert_query, insert_data)
    print "*** ADDED COMMENT TO DATABASE ***"
    return redirect('/wall')

@app.route('/logout', methods=['POST'])
def logMeOut():
    print "*** Logging out ***"
    session.pop('x')
    return redirect('/')

@app.route('/deletemsg', methods=['POST'])
def deleteMsg():
    msg_id = request.form['msg_id']
    print "*** DELETING MESSAGE ID: ", msg_id
    deleteFromComments_query = "DELETE FROM comments WHERE message_id = :id"
    deleteFromMessages_query = "DELETE FROM messages WHERE id = :id"
    delete_data = {'id': msg_id}
    mysql.query_db(deleteFromComments_query, delete_data)
    mysql.query_db(deleteFromMessages_query, delete_data)
    print "*** DELETED DATA FROM DB ***"
    return redirect('/wall')

app.run(debug=True)
