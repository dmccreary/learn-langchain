# Check the glossary for alphabetical order
# 
import argparse

def check_alphabetical_order(filename):
    with open(filename, 'r') as file:
        lines = file.readlines()

    # Extracting terms from lines that start with '####'
    terms = [line.strip()[4:].strip() for line in lines if line.startswith('####')]

    # Checking if terms are in alphabetical order
    for i in range(len(terms) - 1):
        if terms[i].lower() > terms[i + 1].lower():
            print(f"Term '{terms[i]}' is not in alphabetical order with '{terms[i + 1]}'")

def main():
    parser = argparse.ArgumentParser(description='Check alphabetical order of markdown glossary terms.')
    parser.add_argument('filename', nargs='?', default='../docs/glossary.md', help='Path to the markdown file')
    args = parser.parse_args()

    check_alphabetical_order(args.filename)

if __name__ == "__main__":
    main()
