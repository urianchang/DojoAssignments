from flask import Flask, render_template, request, url_for
app = Flask(__name__)
@app.route('/')
def form():
    return render_template("index.html")

@app.route('/results', methods=['POST'])
def create_user():
    print "Got Info"
    username = request.form['username']
    userlocation = request.form['userlocation']
    userlanguage = request.form['userlanguage']
    comment = request.form['commentbox']
    return render_template("results.html", name=username, loc=userlocation, lang=userlanguage, comm=comment)


app.run(debug=True)
