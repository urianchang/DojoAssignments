from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# To test...go to something like "localhost:5000/users/hello123"
@app.route('/users/<vararg>')
def show_user_profile(vararg):
    return render_template("user.html", vararg=vararg)

app.run(debug=True)
