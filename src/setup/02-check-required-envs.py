import os
from dotenv import load_dotenv, find_dotenv

# Load the environment file
load_dotenv(find_dotenv())

# Function to check if specific environment variables are set
def check_environment_variables():
    results = {}

    # List of environment variables to check
    env_vars = ["OPENAI_API_KEY", "PINECONE_API_KEY", "PINECONE_ENV"]

    # Check each environment variable
    for var in env_vars:
        results[var] = "set" if os.getenv(var) else "not set"

    return results

# Call the function and print the results
env_var_results = check_environment_variables()
print(env_var_results)

# Expecting a result like:
# {'OPENAI_API_KEY': 'set', 'PINECONE_API_KEY': 'set', 'PINECONE_ENV': 'set'}