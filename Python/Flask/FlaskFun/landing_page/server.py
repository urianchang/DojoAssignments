from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def indexpage():
    return render_template('index.html')

@app.route('/ninjas')
def ninjapage():
    return render_template('ninja.html')

@app.route('/dojos/new')
def formpage():
    return render_template('newform.html')

app.run(debug=True)
