"""
Searching Text with Regex:

Open text file with first chapter of Pride and Prejudice and search it
for some keywords.

1. Find all the occurrences of the word wife in the document.
   Report to the user how many times that word occurs in the document.
2. Write a function that returns a new string where the word wife is replaced with the word unicorn.
3. Return to the user a list of all the words containing the letter 't'
4. Split the document into a list of words.
5. Find all of the punctuation in the document.
6. Split the document into a list of sentences.

Extra challenging: remove all the spaces and newline characters from the string,
and replace the document's text with the new space-less string.
"""
import re

fname = "pandp.txt"
fopen = open(fname, 'r')

# Let findall() do the iterating by feeding it the whole text file.

# 1. Find matches for 'wife'
# match_wife = re.findall(r'wife', fopen.read())
# print "The number of times that 'wife' occurs in the file: " + str(len(match_wife))

# 2. Function that returns new string where word wife is replaced with word unicorn
# def uniMe():
#     matched = re.findall(r'[A-Z].*wife.*', fopen.read())
#     arr = []
#     for hit in matched:
#         changed = re.sub(r'wife', r'unicorn', hit)
#         arr.append(changed)
#     return arr
# print uniMe()

# 3. Return list of words containing t
# def find_word():
#     words = re.findall(r'[\w.-]*t[\w.-]*', fopen.read())
#     return words
# print find_word()

# 4. Split the document into a list of words
# word_list = re.findall(r'[\w.-]*[a-z][\w.-]*', fopen.read())
# print word_list

# 5. Find all of the punctuation in the document
# punc_list = re.findall(r'[\.\"\'\,\;\:\?\!]', fopen.read())
# print punc_list

# 6. Split the document into a list of sentences
sentences = re.split(r'[\n][\s]+', fopen.read())
print sentences
