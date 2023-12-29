import os
from openai import OpenAI

from dotenv import load_dotenv,find_dotenv
load_dotenv(find_dotenv())

openai_api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=openai_api_key)


completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  max_tokens=1,
  messages=[
    {"role": "user", "content": "What is the opposite of up?  Answer with a single word."}
  ]
)

print(completion.choices[0].message)