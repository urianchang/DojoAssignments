from flask import Flask, render_template, request, session, redirect, flash
app = Flask(__name__)
app.secret_key = 'hush-hush'
@app.route('/')
def form():
    return render_template("index.html")

@app.route('/results', methods=['POST'])
def create_user():
    print "******Got POST Info******"
    if len(request.form['commentbox']) > 120:
        flash("Whoa, Betsy! No more than 120 characters in the comment box!")
        return redirect('/')
    elif len(request.form['username']) < 1 or len(request.form['commentbox']) < 1:
        if len(request.form['username']) < 1 and len(request.form['commentbox']) < 1:
            flash("Name and comment box cannot be empty!")
        elif len(request.form['username']) < 1:
            flash("Name cannot be empty!")
        elif len(request.form['commentbox']) < 1:
            flash("Comment box cannot be empty!")
        return redirect('/')
    else:
        flash("Good to go!")
        session['name'] = request.form['username']
        session['loc'] = request.form['userlocation']
        session['lang'] = request.form['userlanguage']
        session['comm'] = request.form['commentbox']
        return redirect('/results')

@app.route('/results')
def show_info():
    return render_template("results.html")

app.run(debug=True)
