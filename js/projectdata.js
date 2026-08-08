const projects = {
  "ai-pdf-assistant": {
    title: "AI PDF Assistant (LLM-Powered Document Analyzer)",
    category: "NLP • LLM",

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
    category: "Computer Vision • Classification",
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
    category: "ML • Classification",
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
  cityos: {
    title: "CityOS AI (AI-Powered Civic Management Platform)",
    category: "AI • Full Stack • Civic Tech",
    description: `

<h4>1. Description</h4>
<p>
  CityOS AI is an AI-powered civic management platform designed to connect citizens with government departments and improve the way urban problems are reported, assigned, tracked, and resolved. Citizens can report issues such as potholes, damaged roads, broken streetlights, garbage, and other civic problems using images and descriptions, while administrators and government officers can manage and monitor complaints through a centralized dashboard.
</p>

<h4>2. Problem Statement</h4>
<p>
  Citizens often face difficulties reporting everyday civic problems and ensuring that their complaints reach the correct government department. At the same time, authorities need an efficient system to manage large numbers of complaints, assign them to responsible officers, and monitor resolution progress. CityOS AI provides a centralized digital platform to improve communication, transparency, and efficiency in civic issue management.
</p>

<h4>3. Features</h4>
<ul>
  <li>🏙️ Citizen-based civic issue reporting</li>
  <li>📸 Upload images of reported problems</li>
  <li>🤖 AI-powered civic issue analysis and categorization</li>
  <li>🏛️ Department-based complaint management</li>
  <li>👨‍💼 Government officer management</li>
  <li>👥 Citizen management system</li>
  <li>📋 Complaint assignment and tracking</li>
  <li>🔄 Real-time complaint status management</li>
  <li>📊 Analytics and administrative dashboard</li>
  <li>📍 Location-based civic issue management</li>
  <li>🔔 Complaint progress and resolution tracking</li>
  <li>🌐 Modern and responsive web interface</li>
</ul>

<h4>4. Tech Stack</h4>
<ul>
  <li>React.js</li>
  <li>JavaScript</li>
  <li>HTML5</li>
  <li>CSS3</li>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MongoDB</li>
  <li>REST APIs</li>
  <li>AI / Machine Learning</li>
  <li>Git & GitHub</li>
  <li>Netlify / Vercel</li>
</ul>

<h4>5. System / Architecture</h4>
<p>
  CityOS AI follows a full-stack architecture consisting of a React-based frontend, Node.js and Express.js backend, MongoDB database, and AI-powered services. Citizens interact with the platform through the web interface, while administrators and government officers use dedicated dashboards to manage complaints, citizens, departments, and assignments.
</p>

<h4>6. Model / Approach</h4>
<ul>
  <li>Citizen submits a civic issue with description, image, and relevant details</li>
  <li>AI analyzes and categorizes the reported civic problem</li>
  <li>Complaint is routed to the appropriate department</li>
  <li>Administrator assigns the complaint to a responsible government officer</li>
  <li>Officer reviews the complaint and takes necessary action</li>
  <li>Complaint status is updated throughout the resolution process</li>
  <li>Citizens can track the progress of their complaints</li>
  <li>Administrative analytics provide insights into complaint trends and resolution performance</li>
</ul>

<h4>7. Results</h4>
<ul>
  <li>Provides a centralized platform for managing civic complaints</li>
  <li>Improves communication between citizens and government departments</li>
  <li>Enables faster complaint assignment and tracking</li>
  <li>Provides administrators with citizen, officer, and complaint management</li>
  <li>Displays analytics for monitoring civic issue trends</li>
  <li>Creates a transparent workflow from complaint submission to resolution</li>
  <li>Provides an intuitive and responsive user interface</li>
</ul>

<h4>8. Links</h4>
<p>
  GitHub:
  <a href="https://github.com/Raneesh-69/cityos" target="_blank">
  View Repository 🗃️🗃️
  </a>
  <br><br>

Live Demo: <a href="https://your-cityos-app.netlify.app/" target="_blank">
Open Application </a>

</p>
`,
  },

  "house-price-prediction": {
    title: "House Price Prediction System (Machine Learning Regression App)",
    category: "ML • Regression",
    description: `
    <h4>1. Description</h4>
    <p>
      End-to-end Machine Learning web application that predicts house prices based on property features using multiple regression models. The application includes model comparison, analytics, feature importance visualization, and batch prediction through an interactive Streamlit interface.
    </p>

    <h4>2. Problem Statement</h4>
    <p>
      Estimating house prices manually can be challenging due to the influence of multiple factors such as area, bedrooms, parking, and furnishing status. This project leverages Machine Learning to provide fast and accurate house price predictions.
    </p>

    <h4>3. Features</h4>
    <ul>
      <li>🏠 Real-time house price prediction</li>
      <li>📊 Interactive analytics dashboard</li>
      <li>🤖 Multiple Machine Learning model comparison</li>
      <li>📈 Feature importance visualization</li>
      <li>📉 Exploratory Data Analysis (EDA)</li>
      <li>📂 Batch prediction using CSV upload</li>
      <li>📥 Download prediction results</li>
      <li>🌐 Modern and responsive Streamlit web interface</li>
    </ul>

    <h4>4. Tech Stack</h4>
    <ul>
      <li>Python</li>
      <li>Streamlit</li>
      <li>Pandas</li>
      <li>NumPy</li>
      <li>Scikit-learn</li>
      <li>Matplotlib</li>
      <li>Pickle</li>
      <li>Git & GitHub</li>
      <li>Streamlit Cloud</li>
    </ul>

    <h4>5. Dataset</h4>
    <p>
      Dataset: Housing Price Dataset<br>
      Source: Kaggle Housing Dataset
    </p>

    <h4>6. Model / Approach</h4>
    <ul>
      <li>Data preprocessing and feature engineering</li>
      <li>Feature encoding using One-Hot Encoding</li>
      <li>Training multiple regression models (Linear Regression, Ridge Regression, Random Forest)</li>
      <li>Hyperparameter tuning using RandomizedSearchCV</li>
      <li>Selecting the best-performing model based on evaluation metrics</li>
      <li>Deploying the trained model with Streamlit</li>
    </ul>

    <h4>7. Results</h4>
    <ul>
      <li>Accurately predicts house prices based on user inputs</li>
      <li>Compares multiple Machine Learning models</li>
      <li>Displays model performance metrics and analytics</li>
      <li>Supports CSV-based batch prediction</li>
      <li>Provides an intuitive and responsive user interface</li>
    </ul>

    <h4>8. Links</h4>
    <p>
      GitHub:
      <a href="https://github.com/Raneesh-69/house-price-prediction" target="_blank">
      View Repository 🗃️🗃️
      </a>
      <br><br>

      Live Demo:
      <a href="https://your-house-price-prediction.streamlit.app/" target="_blank">
      Open Application
      </a>
    </p>`,
  },
};
