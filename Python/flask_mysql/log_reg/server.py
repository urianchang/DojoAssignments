from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
from flask.ext.bcrypt import Bcrypt
import re

app = Flask(__name__)
app.secret_key = 'hush-hush'
bcrypt = Bcrypt(app)
mysql = MySQLConnector(app,'login_reg')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def checker():
    print "*** BUTTON CLICKED ***"
    email = request.form['mail']
    password = request.form['password']
    user_query = "SELECT * FROM users WHERE email = :email LIMIT 1"
    query_data = {'email': email}
    user = mysql.query_db(user_query, query_data)
    if bcrypt.check_password_hash(user[0]['pw_hash'], password):
        print "*** Welcome back, user. ***"
        return redirect('/welcome')
    else:
        print "*** Cannot find user. Please register. ***"
        return redirect('/register')

@app.route('/welcome')
def success():
    return render_template('success.html')

@app.route('/register')
def showRegister():
    return render_template('register.html')

@app.route('/register', methods=['POST'])
def register():
    print "*** Checking registration information ***"
    fname = request.form['first_name']
    lname = request.form['last_name']
    mail = request.form['mail']
    pw = request.form['pword']
    cpw = request.form['c-pword']
    valid_status = True
    
    if valid_status:
        print "*** Thanks for registering ***"
        return redirect('/welcome')
    else:
        print "*** Something went wrong ***"
        return redirect('/register')

@app.route('/logout', methods=['POST'])
def logMeOut():
    print "*** Logging out ***"
    return redirect('/')

app.run(debug=True)
