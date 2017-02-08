from flask import Flask, render_template, session, request, redirect
import random
app = Flask(__name__)
app.secret_key = '2'


@app.route('/')
def indexpage():
    if 'answer' not in session:
        session['answer'] = random.randrange(0, 101)
        session['firsttime'] = True
    else:
        session['firsttime'] = False
    return render_template("index.html")

@app.route('/', methods=['POST'])
def clicked():
    if request.form['button'] == "submit":
        session['guess'] = request.form['userguess']
        guess = int(session['guess'])
        if (guess == session['answer']):
            session['result'] = "bingo"
        elif (guess > session['answer']):
            session['result'] = "too high"
        else:
            session['result'] = "too low"
    if request.form['button'] == "retry":
        session.pop('answer')
        session.pop('result')
    return redirect("/")


app.run(debug=True)
