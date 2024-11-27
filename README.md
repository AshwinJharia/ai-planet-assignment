# PDF Whisperer: Conversational Insights from Your Files

**A powerful PDF document analysis tool that enables natural language conversations with your PDF files using advanced AI technology.**  

---

## 🚀 Features

- **Upload and Process PDF Documents**: Easily upload files for analysis.  
- **Natural Language Q&A**: Ask questions in plain language and get AI-powered responses.  
- **Intelligent Context Retrieval**: Context-aware answers using vector similarity search.  
- **Document Management**: Track uploaded documents with filename and filepath.  
- **Efficient Text Processing**: Chunking and embedding for accurate results.  
- **RESTful API Interface**: Seamlessly integrate with other applications.  

---

## 🛠️ Tech Stack

### Backend  
- **FastAPI**: A modern, high-performance web framework for APIs.  
- **SQLAlchemy**: Database management with ORM capabilities.  
- **LangChain**: Framework for building applications powered by LLMs.  
- **OpenAI GPT-3.5 Turbo**: Advanced language model for natural language understanding.  
- **FAISS**: Fast and efficient similarity search and clustering of dense vectors.  
- **Python 3.x**: Core programming language for backend logic.  
- **Pydantic**: Data validation with type annotations.  

### Frontend  
- **React 18.3+**: Library for building user interfaces.  
- **Vite**: Modern frontend build tool for fast development.  
- **ESLint**: Ensures code quality and style consistency.  

---

## 🔧 Installation

### Prerequisites
- Python 3.x installed
- Node.js and npm installed
- OpenAI API Key

### Steps

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-repo/pdf-whisperer.git
   cd pdf-whisperer
   ```

2. **Set Up the Backend**  
   - Navigate to the backend directory:  
     ```bash
     cd backend
     ```
   - Install dependencies:  
     ```bash
     pip install -r requirements.txt
     ```
   - Configure environment variables by creating a `.env` file:  
     ```env
     OPENAI_API_KEY=your_api_key_here
     ```

3. **Set Up the Frontend**  
   - Navigate to the frontend directory:  
     ```bash
     cd frontend
     ```
   - Install dependencies:  
     ```bash
     npm install
     ```

---

## ▶️ Running the Application

1. **Start the Backend Server**  
   ```bash
   cd backend
   uvicorn main:app --reload
   ```

2. **Start the Frontend Development Server**  
   ```bash
   cd frontend
   npm run dev
   ```

---

## 📚 API Endpoints

### Documents
- **`GET /`**: Welcome message.  
- **`GET /documents/{document_id}`**: Retrieve document details and associated answers.  
- **`POST /documents/`**: Upload a new document.  

### Questions & Answers
- **`POST /ask-question/`**: Submit a question about a document.  
  - **Required Fields**:  
    - `question`: The question text.  
    - `document_id`: ID of the document to query.  

---

## 🗂️ Data Models

### Document
| Field       | Type    | Description                  |
|-------------|---------|------------------------------|
| `id`        | Integer | Primary Key                 |
| `filename`  | String  | Name of the file            |
| `filepath`  | String  | Path where the file is stored |
| `content`   | Text    | Full text content of the PDF |
| `answers`   | List    | Associated Q&A history      |

### Answer
| Field       | Type    | Description                  |
|-------------|---------|------------------------------|
| `id`        | Integer | Primary Key                 |
| `question`  | String  | Question asked              |
| `answer`    | Text    | AI-generated response       |
| `document_id`| Integer | Foreign Key to Document     |

---

## 🔍 Features in Detail

### Document Processing  
- **Text Chunking**: Splits text into 1000-character chunks with a 200-character overlap for better embeddings.  
- **Semantic Search**: OpenAI embeddings and FAISS vector store for similarity matching.  

### Question Answering  
- **Powered by GPT-3.5 Turbo**: Delivers consistent, context-aware responses.  
- **Context Retrieval**: Dynamically selects relevant chunks for answering questions.  
- **Q&A History**: Automatically stores questions and answers for future reference.  

---

## 🤝 Contributing

We welcome contributions to improve **PDF Whisperer**! Feel free to submit issues or pull requests to the repository.  

---

Happy Coding! 🎉