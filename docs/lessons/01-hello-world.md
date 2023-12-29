# Hello World

In this lab, we run the simplest code possible to test using
the OpenAI API using a low-cost small model.

This program should also test that the OPENAI_API_KEY is
correctly stored in .env file that is NEVER checked into GitHub
by correctly adding it to the .gitignore file.  Check this
now by running the following commmand:

```sh
cat .gitignore
```

You should see somthing like:

```
site
.vscode
.DS_Store
.cache
~$*
.env
```

To keep our testing costs low, we will use the GPT 3.5 Turbo Model

```py
OPENAI_MODEL='gpt-3.5-turbo'
```

## Sample Program

```py
import os
from openai import OpenAI

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  max_tokens=1,
  messages=[
    {"role": "user", "content": "What is the opposite of up?  Answer in a single word."}
  ]
)

print(completion.choices[0].message)
```
