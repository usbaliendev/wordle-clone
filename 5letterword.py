# Generate a list of 5-letter words
import nltk

nltk.download('words')
from nltk.corpus import words

five_letter_words = [word.lower() for word in words.words() if len(word) == 5]

# Save the list to a text file
with open('fiveletter-words.txt', 'w') as file:
    file.write("\n".join(five_letter_words))

print("The list of 5-letter words has been saved to 'five_letter_words.txt'.")
