# Glossary of Terms for Intelligent Agents with Python LangChain

## Prompt

```linenums="0"
Generate a Glossary of Terms for a class on Python LangChain.
Return a single raw markdown file.
Each term name should be in level 4 header "####"
Include terms around Python, Jupyter Notebooks, Agents, LLMs, Environment Variables, OpenAI, APIs, Vector Stores, Pinecone, RAG, Prompt Enrichment.
List the terms in alphabetical order.
```

## Contents
- [Agents](#agents)
- [APIs (Application Programming Interfaces)](#apis-application-programming-interfaces)
- [Conda](#conda)
- [Embeddings](#embeddings)
- [Environment Variables](#environment-variables)
- [Python](#python)
- [Jupyter Notebooks](#jupyter-notebooks)
- [LLMs (Large Language Models)](#llms-large-language-models)
- [OpenAI](#openai)
- [Pinecone](#pinecone)
- [RAG (Retrieval-Augmented Generation)](#rag-retrieval-augmented-generation)
- [Prompt Enrichment](#prompt-enrichment)
- [Semantic Search](#semantic-search)
- [Vector Stores](#vector-stores)
- [Similarity](#similarity)


#### Adaptive Learning
Adaptive Learning is an educational method that uses computer algorithms to coordinate and adjust the learning content and experience to the individual needs and performance of each learner. In adaptive learning systems, the material adapts in real-time, providing personalized learning paths and activities based on the learner's strengths, weaknesses, and pace of learning.

#### Agents
In the context of LangChain and AI, agents refer to entities (usually software) that can perform actions or tasks autonomously or semi-autonomously, often based on some form of AI or machine learning algorithm.

#### APIs (Application Programming Interfaces)
APIs are a set of protocols and tools for building software and applications. They define how different software components should interact and are used to enable integration between different systems and services.

#### Conda
Conda is an open-source package management and environment management system. It is used to install, run, and update packages and their dependencies. Conda is popular in the data science and machine learning communities, as it simplifies the process of setting up different environments for different projects with varying dependencies.

#### Context Window
The Context Window in natural language processing refers to the amount of text (in terms of words or tokens) that a language model can consider at one time when generating a response or prediction. This window defines the scope of the model's immediate understanding. In large language models like GPT-3, the context window determines how much prior text is used to inform the model's current output.

#### Deep Neural Network
A Deep Neural Network (DNN) is an advanced type of neural network that contains multiple hidden layers between the input and output layers. Each layer of neurons refines the information processed by the previous layer, allowing the network to learn and make sense of complex data with high levels of abstraction and accuracy. DNNs are the foundation of deep learning and are particularly powerful in handling large and complex datasets.

#### Embeddings
Embeddings are a form of representation that converts high-dimensional data, like text or images, into a lower-dimensional vector space. In the context of language models, word or sentence embeddings represent the meanings of words or sentences as vectors. These vectors capture semantic relationships and are used in various machine-learning tasks, including semantic search and natural language processing.

#### Environment Variables
Environment variables are dynamic-named values that can affect the way running processes will behave on a computer. They are often used to manage configurations and settings for software applications and operating systems.

In this course, all environment variables are stored in a ```.env``` file
and should never be checked into your GitHub repository.

#### Family Educational Rights and Privacy Act

The Family Educational Rights and Privacy Act (FERPA) is a federal law that affords parents the right to have access to their children’s education records, the right to seek to have the records amended, and the right to have some control over the disclosure of personally identifiable information from the education records. When a student turns 18 years old, or enters a postsecondary institution at any age, the rights under FERPA transfer from the parents to the student (“eligible student”). The FERPA statute is found at 20 U.S.C. § 1232g and the FERPA regulations are found at 34 CFR Part 99.

#### Foundation Model
A Foundation Model refers to a type of large-scale machine learning model that is trained on a broad dataset and is adaptable to a wide range of tasks and domains without task-specific training data. These models, like GPT (Generative Pre-trained Transformer) from OpenAI, are foundational in the sense that they can be fine-tuned or adapted for various specific applications, forming the base for numerous downstream tasks.

#### Generative AI
Generative AI refers to artificial intelligence models that can generate new content, including text, images, music, and more. These models learn patterns in the input data and use this understanding to create new, original outputs that are similar in nature to the training data. Examples include text generation models like GPT-3, image generation models, and music composition AI.

* [US Government Student Privacy FAQ on FIRPA](https://studentprivacy.ed.gov/faq/what-ferpa)

#### GPU (Graphics Processing Unit)
A GPU, or Graphics Processing Unit, is a specialized processor designed to accelerate graphics rendering. GPUs are also widely used in the field of deep learning and AI, as they can process multiple parallel tasks efficiently, making them ideal for training complex neural networks and handling large-scale data processing.


#### Graph Embeddings

Graph Embeddings are data structures used to find similar items in a graph.  To create them we look at nodes, edges, and their features into a vector space while preserving the graph structure. This representation allows for the application of machine learning techniques to graph data, facilitating tasks like node classification, link prediction, and graph visualization. Graph embeddings are essential in processing network-structured data efficiently.

#### Graph Machine Learning
Graph Machine Learning refers to a set of techniques and models that operate on data represented as graphs. It combines elements of graph theory with machine learning to process and analyze data that contains complex relationships and interdependencies. This approach is useful in various applications such as social network analysis, recommendation systems, and fraud detection, where data points are interrelated in non-trivial ways.

#### Jupyter Notebook
A Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations, and narrative text. They are commonly used for data cleaning and transformation, numerical simulation, statistical modeling, data visualization, and machine learning.

Our course will require the use of Jupyter Notebooks in assignments.

#### Knowledge Graph
A Knowledge Graph is a network of entities and their interrelations, organized in a graph format. It is used to store interconnected descriptions of entities — objects, events, situations, or concepts. Knowledge graphs are integral in various AI applications for providing structured and accessible data that machines can use to perform semantic searches, make recommendations, and understand complex queries.

#### Knowledge Spaces
Knowledge Spaces refer to a theoretical framework in the field of educational psychology and learning sciences. They represent the range of knowledge and skills in a particular domain, structured in a way that reflects how learning typically progresses. In this framework, knowledge is organized as a network of interconnected concepts, allowing educators to identify and target specific areas where a learner needs development.

#### Large Language Model (LLM)
A Large Language Model (LLM) is a type of machine learning model designed to understand, interpret, and generate human language. These models are 'large' both in terms of the size of the training data they are exposed to and their own architectural complexity. LLMs are trained on vast datasets of text and are capable of performing a wide range of natural language processing tasks.

#### Lesson Plan
A Lesson Plan is a teacher's detailed description of the course of instruction for a class. A well-crafted lesson plan outlines the objectives, teaching and learning activities, and resources needed to carry out a particular lesson. It serves as a guide for teachers to manage the learning environment and ensure consistent coverage of curriculum and fulfillment of learning objectives.

#### LLMs (Large Language Models)
LLMs, or Large Language Models, are advanced AI models trained on vast datasets to understand, interpret, and generate human language. Examples include OpenAI's GPT (Generative Pre-trained Transformer) series.

#### Neural Network
A Neural Network is a computational model inspired by the structure of the human brain. It consists of interconnected nodes, or 'neurons,' organized in layers. Each connection can transmit a signal from one neuron to another. The receiving neuron processes the signal and signals downstream neurons connected to it. Neural networks are used in machine learning for pattern recognition and data classification, among other tasks.

#### OpenAI
OpenAI is an AI research lab consisting of the for-profit corporation OpenAI LP and its parent company, the non-profit OpenAI Inc. OpenAI is known for its work in the field of artificial intelligence, including the development of the GPT series of language models.

#### Pinecone
Pinecone is a scalable vector database service that enables efficient vector search and storage. It's used for managing high-dimensional vector embeddings in machine learning applications, particularly in natural language processing.

#### Processing and P5.js
Processing is a flexible software sketchbook and a language for learning how to code within the context of the visual arts. P5.js is a JavaScript library that has the same goals, focusing on making coding accessible for artists, designers, educators, and beginners. Both Processing and P5.js are used to create graphics and interactive experiences.

#### Prompt Engineering
Prompt Engineering is the process of designing and refining the input (or 'prompt') given to a language model to elicit the most accurate or relevant output. It involves creatively framing the prompt and including specific instructions or context that guide the model's response. Effective prompt engineering is crucial for maximizing the performance of language models, especially in applications like chatbots, content creation, and problem-solving.

#### Prompt Enrichment
Prompt enrichment involves adding additional context or information to the prompts given to language models, to guide or improve their responses. This can include context from previous interactions, relevant external information, or specific instructions on how the model should respond.


#### Python

Python is a high-level, interpreted programming language known for its simplicity and readability. 
It's widely used for various applications, from web development to data science and machine learning.
Because of the extensive use of Python in open-source projects, there is ample training data
for generative AI tools to use.  As a result, the quality of code generated by many generative
AI tools is much higher than in other programming languages.

All of our code uses Python version 3.

#### Responsive Design

Techniques ensuring simulations and other user interfaces work well on various devices and screen sizes.  Our goal
is to allow all our user interfaces to also run on devices such as mobile phones, tablets and large-screen monitors.


#### Retrieval-Augmented Generation (RAG)
Retrieval-Augmented Generation (RAG), is a method combining a retrieval system with a generative language model. 
It enhances the language model's responses by retrieving relevant information from a database or document collection.

!!! Note
    Use this term carefully.  The original paper on RAG only used
    public knowledge from Wikipedia to enrich the prompt.  Use
    the term Prompt Enrichment for a more general pattern.

* See also [Prompt Enrichment](#prompt-enrichment)
* Link to RAG paper on the arxive.org site: [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401)

#### Semantic Search
Semantic Search refers to a search technique that aims to understand the searcher's intent and the contextual meaning of terms as they appear in the searchable dataspace. It contrasts with keyword search, which looks for exact matches of the query words without understanding the context or meaning behind them. Semantic search, often powered by AI and natural language understanding, provides more relevant search results by understanding the intent and contextual meaning of the search query.

#### Similarity
In the context of machine learning and LangChain, similarity refers to the measure of how closely related two items are in their representations, often used with embeddings. This concept is crucial in tasks like semantic search, where the goal is to find items (e.g., documents, images) that are similar or relevant to a query, based on their vector representations in the embedding space.

#### Smart Board

An interactive whiteboard, also known as an interactive board or smart board,
is a large interactive display board in the form factor of a whiteboard.
In many classrooms, an instructor can stand at the front of a classroom
and move sliders below a simulation to control the simulation.

For effective use of smart boards, we use a minimum text size of 16 for control labels and values.

#### Socratic Method
The Socratic Method is a form of cooperative argumentative dialogue between individuals, based on asking and answering questions to stimulate critical thinking and to draw out ideas and underlying presuppositions. It is named after the Classical Greek philosopher Socrates and is used to promote a deeper understanding of complex ideas.

#### Tokenization
Tokenization is the process of converting text into smaller units, called tokens. In natural language processing, tokens usually represent words, but they can also include punctuation marks, numbers, and other characters. Tokenization is a fundamental step in text processing, allowing models to understand and manipulate text by breaking it down into manageable pieces. It's essential for tasks like sentiment analysis, language translation, and text generation.

#### Training vs Inference
In the context of machine learning, 'Training' refers to the process of teaching a model to make predictions or decisions, typically by feeding it a large set of labeled data. 'Inference,' on the other hand, is the stage where the trained model is used to make predictions on new, unseen data. Training is a compute-intensive process that adjusts the model's parameters, while inference involves applying these parameters to make quick decisions or analysis.

## User Experience
User Experience (UX) refers to the overall experience of a person using a product, system, or service, especially in terms of how easy or pleasing it is to use. It encompasses a variety of aspects, including usability, design, ergonomics, functionality, performance, and the user's emotional response. UX is a comprehensive concept that aims to improve customer satisfaction and loyalty through the utility, ease of use, and pleasure provided in the interaction with a product.

In an educational setting, UX can be applied to create interactive simulations for classrooms. For instance, a science teacher might use a UX-designed interactive simulation to teach concepts of physics. The simulation, with its intuitive interface, engaging graphics, and responsive feedback, allows students to experiment with different variables in a physics experiment. This direct, hands-on interaction enhances learning by making abstract concepts tangible and easier to understand. The UX design ensures that the simulation is user-friendly, keeping students focused on learning rather than struggling with the technology. By doing so, it not only makes learning more effective but also more enjoyable, increasing student engagement and fostering a deeper understanding of the subject matter.

#### Vector Stores
Vector stores are specialized databases designed to efficiently store and retrieve high-dimensional data, such as vectors produced by machine learning models. They are essential in tasks like similarity search and recommendation systems.

#### Visual Studio Code
Visual Studio Code (VS Code) is a free, open-source code editor developed by Microsoft. It's widely used by developers due to its support for a variety of programming languages, built-in Git integration, debugging tools, and a vast ecosystem of extensions. VS Code is known for its lightweight design, cross-platform availability, and powerful code editing and navigation capabilities.

