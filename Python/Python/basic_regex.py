"""
Basic Searching

Starting with the code snippet, write a regex that will match:
1. All words that contain 'v'
2. All words that contain a double-'s'
3. All words that end with an 'e'
4. All words that contain an 'b', any character, then another 'b'
5. All words that contain an 'b', at least one character, then another 'b'
6. All words that contain an 'b', any number of characters (including zero), then another 'b'
7. All words that include all five vowels in order
8. All words that only use the letters in 'regular expression' (each letter can appear any number of times)
9. All words that contain a double letter
"""

import re
def get_matching_words(regex):
 words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]
 matches = []
 for word in words:
 	if re.search(regex,word):
 		matches.append(word)
 return matches

# 1
print get_matching_words(r'v')

# 2
print get_matching_words(r'ss')

# 3
print get_matching_words(r'e$')

# 4
print get_matching_words(r'b.b')

# 5
print get_matching_words(r'b.+b')

# 6
print get_matching_words(r'b.*b')

# 7
print get_matching_words(r'a.*e.*i.*o.*u')

# 8
print get_matching_words(r'^[regular expression]+$')

# 9
print get_matching_words(r'([a-z])\1')
