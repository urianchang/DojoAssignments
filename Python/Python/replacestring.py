my_string = "egg, egg, Spam, egg and Spam"
print my_string.replace("egg", "Spam", 2)
# the output would be:
# Spam, Spam, Spam, egg and Spam
# notice that only the first 2 "egg" matches were replaced in the string.
