from flask import Flask, request, redirect, render_template, flash, session
from mysqlconnection import MySQLConnector
import re

app = Flask(__name__)
app.secret_key = 'hush-hush'
mysql = MySQLConnector(app, 'email_validation')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/success', methods=['POST'])
def addEmail():
    print "*** CHECK IF EMAIL IS VALID ***"
    email = request.form['mail']
    if not re.search(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$', email):
        print "*** INVALID EMAIL ***"
        flash("Invalid Email")
        return redirect('/')
    else:
        print "*** VALID EMAIL ***"
        query = "INSERT INTO emails (email, created_at, updated_at) VALUES (:mail, NOW(), NOW())"
        data = {
            'mail': email
        }
        mysql.query_db(query, data)
        return redirect('/success')

@app.route('/success')
def success():
    query = "SELECT * FROM emails"
    emails = mysql.query_db(query)
    newest = emails[len(emails)-1]['email']
    return render_template('success.html', all_emails=emails, latest=newest)

@app.route('/delete', methods=['POST'])
def deletion():
    deleteMe = request.form['mail']
    print "*** DELETING THIS EMAIL: ", deleteMe, " ***"
    query = "DELETE FROM emails WHERE email = :mail"
    data = {'mail': deleteMe}
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)
