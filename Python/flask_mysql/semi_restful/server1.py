from flask import Flask, request, redirect, render_template, url_for

app = Flask(__name__)


# Render landing page
@app.route('/')
def index():
    return render_template('allusers.html')


@app.route('/f')
def show():
    return render_template('editfriend.html')

app.run(debug=True)
