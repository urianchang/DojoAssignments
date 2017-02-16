"""
Doubly-Linked list

* add a new node to the end of the list
* delete an existing Node
* insert a node in between existing nodes (before and after node of given values)
"""

class Node(object):
    def __init__(self, value):
        self.prev = None
        self.value = value
        self.next = None

class doublyLinkedList(object):
    def __init__(self, first, last):
        self.head = first
        self.tail = last
    def printForward(self):
        user = self.head
        while (user != None):
            print user.value
            user = user.next
    def printBackward(self):
        user = self.tail
        while (user != None):
            print user.value
            user = user.prev
    def addBack(self, val):
        temp = self.tail
        self.tail.next = val
        self.tail = val
        self.tail.prev = temp
        return self
    def delNode(self, val):
        user = self.head
        while (user != None):
            if user.next == val:
                temp = user
                user.next = user.next.next
                user.next.prev = temp
            user = user.next
        return self
    def insertNode(self, val, before, after):
        user = self.head
        while (user != None):
            if user == before:
                temp = user.next
                user.next = val
                val.prev = user
                temp.prev = val
                val.next = temp
                break
            user=user.next
        return self


one = Node("one")
two = Node("two")
one.next = two
two.prev = one
dlist = doublyLinkedList(one, two)
# dlist.printForward()
# print ""
# dlist.printBackward()
# print ""
# dlist.addBack(three).printForward()
# print ""
# dlist.printBackward()
# print ""
# dlist.delNode(two).printForward()
# print ""
# dlist.insertNode(Node("four"), one, three).printBackward()
three = Node("three")
four = Node("four")
dlist.addBack(three).addBack(four).delNode(two).insertNode(Node("3.5"), three, four).printForward()
