# Testing Your Environment Variables


## Mandatory Environment Variables

```sh
OPENAI_API_KEY="..."
PINECONE_API_KEY="..."
PINECONE_ENV="..."
```

## Sample Load Script
```py
from dotenv import load_dotenv,find_dotenv
load_dotenv(find_dotenv())
```

## Printing All Your Environment Variable

```py
import os

```