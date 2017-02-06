def say_hello(name):
    if name:
        #print 'Hello, ' + name + ' from inside the function'
        print "Hello, %s!" % (name)
    else:
        print 'No name'

print 'Outside of the function'

say_hello("urian")
