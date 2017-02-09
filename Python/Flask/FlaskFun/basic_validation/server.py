from flask import Flask, render_template, redirect, request, session, flash
app = Flask(__name__)
app.secret_key = 'KeepItSecretKeepItSafe'
@app.route('/')
def index():
  return render_template('index.html')
@app.route('/process', methods=['Post'])
def process():
    if len(request.form['name']) < 1:
        # display validation errors
        flash("Name cannot be empty!") # just pass a string to the flash function
    else:
        # display success message
        flash("Success! Your name is {}".format(request.form['name'])) # just pass a string to the flash function
    return redirect('/') # either way the application should return to the index and display the message

app.run(debug=True)
