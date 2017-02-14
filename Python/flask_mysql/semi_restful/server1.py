from flask import Flask, request, redirect, render_template, url_for
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app, 'fullfriends')

# Show all users
@app.route('/users')
def index():
    query = "SELECT id, CONCAT(first_name, ' ', last_name) as name, email, DATE_FORMAT(created_at, '%M %D, %Y') as date FROM friends"
    friends = mysql.query_db(query)
    return render_template('allusers.html', all_users=friends)

# Show create user page
@app.route('/users/new')
def newUser():
    return render_template('adduser.html')

# Create a new user
@app.route('/users/create', methods=['POST'])
def create():
    query = "INSERT INTO friends (first_name, last_name, email, created_at, updated_at) VALUES (:first_name, :last_name, :mail, NOW(), NOW())"
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'mail': request.form['mail']
    }
    mysql.query_db(query, data)
    return redirect('/users')

# Show specific user information
@app.route('/users/<id>')
def showUser(id):
    query = "SELECT * FROM friends WHERE id = :specific_id"
    data = {'specific_id': id}
    friends = mysql.query_db(query, data)
    return render_template('showuser.html', one_friend=friends[0])

# Update specific user information
@app.route('/users/<id>', methods=['POST'])
def updateUser(id):
    query = "UPDATE friends SET first_name = :first_name, last_name = :last_name, email = :mail, updated_at = NOW() WHERE id = :id"
    data = {
             'first_name': request.form['first_name'],
             'last_name':  request.form['last_name'],
             'mail': request.form['mail'],
             'id': id
           }
    mysql.query_db(query, data)
    return redirect('/users')

# Show Edit page for user
@app.route('/users/<id>/edit')
def editUser(id):
    query = "SELECT * FROM friends WHERE id = :specific_id"
    data = {'specific_id': id}
    friends = mysql.query_db(query, data)
    return render_template('editfriend.html', one_friend=friends[0])

# Delete specific user
@app.route('/users/<id>/destroy', methods=['POST', 'GET'])
def deleteUser(id):
    query = "DELETE FROM friends WHERE id = :id"
    data = {'id': id}
    mysql.query_db(query, data)
    return redirect('/users')

app.run(debug=True)
