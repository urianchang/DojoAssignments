from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'fullfriends')

@app.route('/')
def index():
    query = "SELECT * FROM friends"
    friends = mysql.query_db(query)
    return render_template('index.html', all_friends=friends)

# Show edit page for specific friend
@app.route('/friends/<id>/edit', methods=['POST'])
def show(id):
    query = "SELECT * FROM friends WHERE id = :specific_id"
    data = {'specific_id': request.form['todo']}
    friends = mysql.query_db(query, data)
    return render_template('editfriend.html', one_friend=friends[0])

# Updating Records
# Say we wanted to update a specific record, we could create another page and add a form that would submit to the following route.
@app.route('/update_friend/<friend_id>', methods=['POST'])
def update(friend_id):
    query = "UPDATE friends SET first_name = :first_name, last_name = :last_name, occupation = :occupation WHERE id = :id"
    data = {
             'first_name': request.form['first_name'],
             'last_name':  request.form['last_name'],
             'occupation': request.form['occupation'],
             'id': friend_id
           }
    mysql.query_db(query, data)
    return redirect('/')


# Add a friend
@app.route('/friends', methods=['POST'])
def create():
    query = "INSERT INTO friends (first_name, last_name, email, created_at, updated_at) VALUES (:first_name, :last_name, :mail, NOW(), NOW())"
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'mail': request.form['mail']
    }
    mysql.query_db(query, data)
    return redirect('/')

# Delete friend
@app.route('/friends/<id>/delete', methods=['POST'])
def delete(id):
    query = "DELETE FROM friends WHERE id = :id"
    data = {'id': request.form['todo']}
    print data
    #mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)
