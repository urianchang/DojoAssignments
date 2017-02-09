from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template("index.html")

@app.route('/ninja/')
def showall():
    return render_template("ninja.html", ninja_color="all")

@app.route('/ninja/<ninja_color>')
def ninja(ninja_color):
    print ninja_color
    return render_template("ninja.html", ninja_color=ninja_color)

app.run(debug=True)
