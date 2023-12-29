import os
from dotenv import load_dotenv, find_dotenv

# Load the environment file
load_dotenv(find_dotenv())

# Function to check if OPENAI_API_KEY is set
def check_openai_api_key():
    # Check if the OPENAI_API_KEY environment variable is set
    api_key = os.getenv("OPENAI_API_KEY")
    if api_key:
        return "OPENAI_API_KEY is set."
    else:
        return "OPENAI_API_KEY is not set."

# Call the function and print the result
result = check_openai_api_key()
print(result)
