from flask import Flask, render_template, redirect, flash, request
import re

app = Flask(__name__)
app.secret_key = '3'

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/registered', methods=['POST'])
def registerMe():
    print "***Sending Registration info***"
    checkstatus = False
    fname = request.form['firstname']
    lname = request.form['lastname']
    mail = request.form['mail']
    pw = request.form['password']
    cpw = request.form['confirm-password']
    userinfo = [fname, lname, mail, pw, cpw]
    fields = ["First name", "Last name", "E-mail", "Password", "Confirm password"]
    print "***", userinfo, "***"
    while checkstatus is False:
        checkstatus = True
        for ind in range(len(userinfo)):
            if len(userinfo[ind]) < 1:
                checkstatus = False
                errstr = fields[ind] + " field cannot be empty!"
                flash(errstr, 'error')
            if ind == 0 or ind == 1:
                if re.search(r'[0-9]', userinfo[ind]):
                    checkstatus = False
                    errstr = fields[ind] + " cannot contain any numbers!"
                    flash(errstr, 'error')
            if ind == 2:
                if not re.search(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$', userinfo[2]):
                    checkstatus = False
                    flash("Invalid Email Address", 'error')
            if ind == 3 or ind == 4:
                if len(userinfo[ind]) < 8:
                    checkstatus = False
                    errstr = fields[ind] + " field should be more than 8 characters!"
                    flash(errstr, 'error')
                if ind == 3:
                    if userinfo[3] != userinfo[4]:
                        checkstatus = False
                        flash("Password fields do not match!", 'error')
        if checkstatus is True:
            flash("Thanks for registering!", 'thanks')
        return redirect('/')

app.run(debug=True)
