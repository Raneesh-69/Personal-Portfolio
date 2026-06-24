const projects = {
  "ai-pdf-assistant": {
    title: "AI PDF Assistant (LLM-Powered Document Analyzer)",

    description: `
    <h4>1. Description</h4>
    <p>
      End-to-end AI application that allows users to upload PDF documents,
      generate summaries, and ask context-aware questions using Large Language Models.
    </p>

    <h4>2. Problem Statement</h4>
    <p>
      Reading lengthy PDF documents and extracting important information
      manually can be time-consuming. This project helps users quickly
      understand documents through AI-powered summarization and Q&A.
    </p>

    <h4>3. Features</h4>
    <ul>
      <li>📄 Upload PDF documents</li>
      <li>🤖 AI-powered question answering</li>
      <li>📋 Automatic document summarization</li>
      <li>💬 Conversational chat interface</li>
      <li>⚡ Fast responses using Groq LLM</li>
      <li>🌐 Fully deployable web application</li>
    </ul>

    <h4>4. Tech Stack</h4>
    <ul>
      <li>Python</li>
      <li>Streamlit</li>
      <li>Groq API</li>
      <li>Llama 3.3 70B</li>
      <li>PyPDF</li>
      <li>Git & GitHub</li>
      <li>Streamlit Cloud</li>
    </ul>

    <h4>5. Dataset</h4>
    <p>
      Dataset: User-uploaded PDF Documents<br>
      Source: Dynamic user-provided documents
    </p>

    <h4>6. Model / Approach</h4>
    <ul>
      <li>Extract text from PDFs using PyPDF</li>
      <li>Preprocess document content</li>
      <li>Send context to Llama 3.3 via Groq API</li>
      <li>Generate summaries and answers</li>
      <li>Maintain chat history using Streamlit Session State</li>
    </ul>

    <h4>7. Results</h4>
    <ul>
      <li>Successfully analyzes uploaded PDFs</li>
      <li>Generates accurate summaries</li>
      <li>Provides context-aware responses</li>
      <li>Fast inference using Groq infrastructure</li>
      <li>Deployed as a public web application</li>
    </ul>

    <h4>8. Links</h4>
    <p>
      GitHub:
      <a href="https://github.com/Raneesh-69/Ai-PDF-Assistant" target="_blank">
      View Repository🗃️🗃️
      </a>
      <br><br>

      Live Demo:
      <a href="https://ai-pdf-assistant-kk76ju58bbxhva4qktpvcz.streamlit.app/" target="_blank">
      Open Application
      </a>
    </p>
    `,
  },
  "mask-vs-no-mask": {
    title: "Mask vs No Mask Detection",
    description: `
    <h4>1. Description</h4>
    <p>
      End-to-end computer vision project that detects whether a person is wearing a face mask using deep learning.
    </p>

    <h4>2. Problem Statement</h4>
    <p>
      Monitoring mask usage manually is inefficient and error-prone, especially in crowded public places.
    </p>

    <h4>3. Features</h4>
    <ul>
      <li>📸 Upload images for analysis</li>
      <li>🔍 Real-time face detection</li>
      <li>🛡️ Mask vs No Mask classification</li>
      <li>📊 Simple UI for easy usage</li>
    </ul>

    <h4>4. Tech Stack</h4>
    <ul>
      <li>Python</li>
      <li>NumPy</li>
      <li>Pandas</li>
      <li>TensorFlow/Keras</li>
      <li>OpenCV</li>
      <li>Flask/Streamlit</li>
    </ul>

    <h4>5. Dataset</h4>
    <p>
      Dataset: Face Mask Detection Dataset<br>
      Source: Kaggle Face Mask Dataset
    </p>

    <h4>6. Model / Approach</h4>
    <ul>
      <li>Image preprocessing and resizing</li>
      <li>Face detection using OpenCV</li>
      <li>CNN model for classification</li>
      <li>Trained on mask/no-mask images</li>
      <li>Prediction based on trained weights</li>
    </ul>

    <h4>7. Results</h4>
    <ul>
      <li>Accurately detects faces in images</li>
      <li>Classifies mask vs no-mask with high accuracy</li>
      <li>Provides real-time prediction output</li>
    </ul>

    <h4>8. Links</h4>
    <p>
      GitHub:
      <a href="https://github.com/Raneesh-69/Face_Mask" target="_blank">
      View Repository🗃️🗃️
      </a>
      <br><br>

      Live Demo:
      <a href="https://facemaskr.netlify.app//" target="_blank">
      Open Application
      </a>
    </p>`,
  },
  "iris-prediction": {
    title: "Iris Flower Prediction System (ML Classification App)",
    description: `
    <h4>1. Description</h4>
    <p>
      Machine learning model that predicts iris flower species based on input features with a simple web interface.
    </p>

    <h4>2. Problem Statement</h4>
    <p>
      Classifying iris species manually based on measurements is time-consuming and prone to errors.
    </p>

    <h4>3. Features</h4>
    <ul>
      <li>📊 Input form for entering flower measurements</li>
      <li>🔍 Real-time prediction output</li>
      <li>🛡️ Accurate classification of iris species</li>
      <li>🌐 User-friendly web interface</li>
    </ul>

    <h4>4. Tech Stack</h4>
    <ul>
      <li>Python</li>
      <li>Pandas</li>
      <li>NumPy</li>
      <li>Scikit-learn</li>
      <li>Flask/Streamlit</li>
    </ul>

    <h4>5. Dataset</h4>
    <p>
      Dataset: Iris Dataset<br>
      Source: UCI Machine Learning Repository / Scikit-learn built-in dataset
    </p>

    <h4>6. Model / Approach</h4>
    <ul>
      <li>Data preprocessing and feature selection</li>
      <li>Training multiple models (Logistic Regression, Decision Tree, Random Forest)</li>
      <li>Selecting the best-performing model based on accuracy</li>
      <li>Built a final prediction system with the selected model</li>
    </ul>

    <h4>7. Results</h4>
    <ul>
      <li>Predicts iris species with high accuracy (around 95-100%)</li>
      <li>Provides fast and reliable predictions</li>
      <li>User-friendly interface for easy interaction</li>
    </ul>

    <h4>8. Links</h4>
    <p>
      GitHub:
      <a href="https://github.com/Raneesh-69/iris_pred" target="_blank">
      View Repository🗃️🗃️
      </a>
      <br><br>

      Live Demo:
      <a href="https://iris-pred-1.onrender.com/" target="_blank">
      Open Application
      </a>`,
  },
};
