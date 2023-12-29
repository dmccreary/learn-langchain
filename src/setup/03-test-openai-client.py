import os
from openai import OpenAI

openai_api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=openai_api_key)

prompt = 'What is the opposite of up?'

# models are:
# gpt-3.5-turbo
# 
completion = client.completions.create(
        model='gpt-3.5-turbo',
        max_tokens=1,
        messages=[
             {"role": "user", "content": "What is the opposite of up?  Answer in a single word."}
        ]
        )

print(completion.choices[0].message)