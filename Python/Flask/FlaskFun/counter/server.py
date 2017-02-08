from flask import Flask, render_template, session, request, redirect
app = Flask(__name__)
app.secret_key = 'Secret'

# Function for counting
def counting():
    try:
        session['counter'] += 1
    except KeyError: # if variable not initialized, this error will appear
        session['counter'] = 1

@app.route('/')
def indexpage():
    counting()
    return render_template("index.html")

@app.route('/', methods=['POST'])
def clicked():
    if request.form['button'] == "add":
        session['counter'] += 2
    elif request.form['button'] == "clear":
        session['counter'] = 0
    return render_template('index.html')

app.run(debug=True)
