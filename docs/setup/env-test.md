# Testing Your Environment Variables

## Checking the OpenAI API Key is Set

```python
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
```

## Checking Mandatory Environment Variables

```sh
OPENAI_API_KEY="..."
PINECONE_API_KEY="..."
PINECONE_ENV="..."
```

```py
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
```