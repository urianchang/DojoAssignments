"""
PrintAllVals
AddBack(val)
AddFront(val)
InsertBefore(nextVal, val)
InsertAfter(preval, val)
RemoveNode(val)
ReverseList()
"""

class Node(object):
    def __init__(self, value):
        self.value = value
        self.next = None

class SinglyLinkedList(object):
    def __init__(self):
        self.head = None
        self.tail = None
    def PrintAllVals(self):
        user = self.head
        while(user != None):
            print user.value
            user = user.next
    def AddBack(self, val):
        user = self.head
        while (user.next != None):
            user = user.next
        user.next = Node(val)
        return self
    def AddFront(self, val):
        temp = self.head
        self.head = Node(val)
        self.head.next = temp
        return self
    def InsertBefore(self, NextVal, val):
        user = self.head
        while (user != None):
            if (user.value == NextVal):
                self.AddFront(val)
                break
            if (user.next.value == NextVal):
                temp = user.next
                user.next = Node(val)
                user.next.next = temp
                break
            user = user.next
        return self
    def InsertAfter(self, preVal, val):
        user = self.head
        while (user != None):
            if (user.value == preVal):
                temp = user.next
                user.next = Node(val)
                user.next.next = temp
                break
            user = user.next
        return self
    def RemoveNode(self, val):
        user = self.head
        while (user != None):
            if (user.value == val):
                self.head = user.next
                break
            if (user.next.value == val):
                user.next = user.next.next
                break
            user = user.next
        return self
    def ReverseList(self):
        last = None
        user = self.head
        while (user != None):
            temp = user.next
            user.next = last
            last = user
            user = temp
        self.head = last
        return self

list = SinglyLinkedList()
list.head = Node('Alice')
list.head.next = Node('Chad')
list.head.next.next = Node('Debra')

# list.PrintAllVals()
# print " "
# list.AddBack('CABOOSE').PrintAllVals()
# print " "
# list.AddFront('FRONT').PrintAllVals()
# print " "
#list.InsertBefore('Alice', 'hello').PrintAllVals()
#list.InsertAfter('Alice', 'Billy').PrintAllVals()
#list.RemoveNode('Debra').PrintAllVals()
list.ReverseList().PrintAllVals()
