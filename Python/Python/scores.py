"""
Scores and Grades:

Write a function that generates ten scores between 60 and 100. Each time a
score is generated, your function should display what the grade is
for a particular score. Here is the grade table:
    * Score: 60 - 69 ; Grade - D
    * Score: 70 - 79 ; Grade - C
    * Score: 80 - 89 ; Grade - B
    * Score: 90 - 100 ; Grade - A

HINT: Use the python random module to generate a random number.
"""

import random

def scoresAndGrades(num):
    for digit in range(1, num+1):
        score = random.randrange(60, 101)
        if (score <= 100 and score >= 90):
            grade = "A"
        elif (score <= 89 and score >= 80):
            grade = "B"
        elif (score <= 79 and score >= 70):
            grade = "C"
        else:
            grade = "D"
        print "Score: " +  str(score) + "; Your grade is " + grade
    print "End of program. Bye!"

scoresAndGrades(10)
