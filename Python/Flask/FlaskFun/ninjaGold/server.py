from flask import Flask, render_template, session, request, redirect, url_for
import random
app = Flask(__name__)
app.secret_key = '2'

def genRandInt(start, end):
    x = random.randrange(start, end+1)
    return x

@app.route('/')
def indexpage():
    if 'gold' not in session:
        session['gold'] = 0
        session['log'] = " "
    return render_template("index.html")

@app.route('/process_money', methods=['POST'])
def clicked():
    if request.form['building'] == "farm":
        addgold = genRandInt(10, 20)
        session['gold'] += addgold
        session['log'] += "Earned " + str(addgold) + " dubloons from the farm!\n"
    if request.form['building'] == "cave":
        addgold = genRandInt(5, 10)
        session['gold'] += addgold
        session['log'] += "Earned " + str(addgold) + " dubloons from the cave!\n"
    if request.form['building'] == "house":
        addgold = genRandInt(2, 5)
        session['gold'] += addgold
        session['log'] += "Earned " + str(addgold) + " dubloons from the house!\n"
    if request.form['building'] == "casino":
        addgold = genRandInt(0, 50)
        chance = genRandInt(0, 1)
        if chance == 0:
            addgold = -addgold
            session['log'] += "Entered a casino and lost " + str(addgold) + " dubloons...ouch!\n"
            session['gold'] += addgold
        else:
            session['gold'] += addgold
            session['log'] += "Earned " + str(addgold) + " dubloons from the casino!\n"
    return redirect('/')


app.run(debug=True)
