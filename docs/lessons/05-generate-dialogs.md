# Generating Dialogs with OpenAI's API

In this example, we want to generate sample dialogs between
a teacher and a student on various robotics topics for a 
school's Robot Day event.  These dialogs will help
teachers change their presentation based on the grade-level
of the student.

Here are the sample topics:

1. Batteries
2. Motors
3. Sensors
4. Displays
5. Microcontrollers

The grade levels are grades 1 to 5.

For each topic, we want to generate a single-paragraph discussion between
a teacher and the student on how this topic is part of robotics.

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