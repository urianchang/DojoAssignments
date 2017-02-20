import bcrypt

password = "password"
pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt())

password2 = "password"
if bcrypt.checkpw(password2, pw_hash):
    print "It matches"
else:
    print "It does not match"
