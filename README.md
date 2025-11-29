# 🩸 Blood Testing Laboratory Management System

A comprehensive web application for blood type testing, compatibility analysis, and educational quizzes about blood science.

## ✨ Features

- **Blood Type Determination Quiz**: Personality-based blood type prediction with machine learning
- **General Blood Knowledge Quiz**: Test your understanding of blood science
- **Blood Compatibility Table**: Complete reference for blood type compatibility
- **Patient Registration**: Register and manage test takers
- **Test Submission**: Submit blood test requests (CBC, Lipid, Glucose, Liver, Kidney, Thyroid)
- **Test Results**: View and analyze test results with detailed interpretations
- **Analytics Dashboard**: Performance tracking and demographics
- **Responsive Design**: Works on all devices

## 🛠️ Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with animations and responsive design
- **Deployment**: 
  - Frontend: Netlify
  - Backend: Render

## 🚀 Live Demo

- **Frontend**: [Your Netlify URL]
- **Backend API**: [Your Render URL]

## 📱 Features Overview

### Blood Type Determination
- 12 personality-based questions
- Scientific correlation analysis
- Machine learning algorithm that improves with feedback
- Detailed blood type characteristics
- Compatibility information
- Health recommendations

### Blood Compatibility Reference
- Complete compatibility table
- All 8 blood types (A+, A-, B+, B-, AB+, AB-, O-)
- Population statistics
- Antigen and antibody information
- Visual color-coded tags

### Laboratory Management
- Patient registration and management
- Blood test request submission
- Test processing and result generation
- Detailed test analysis with normal ranges
- Search and view patient results

## 🔧 Local Development

### Prerequisites
- Python 3.11+
- pip

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/blood-testing-platform.git
   cd blood-testing-platform
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the Flask server:
   ```bash
   python app.py
   ```

4. Open your browser and visit:
   ```
   http://localhost:5000
   ```

## 🌐 Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

1. **Backend (Render)**:
   - Push code to GitHub
   - Connect repository to Render
   - Deploy as Web Service
   - Get your backend URL

2. **Frontend (Netlify)**:
   - Connect GitHub repository to Netlify
   - Set build directory to `templates`
   - Add environment variable for API URL
   - Deploy!

## 📊 Project Structure

```
blood-testing-platform/
├── app.py                 # Flask backend application
├── requirements.txt       # Python dependencies
├── Procfile              # Render deployment config
├── render.yaml           # Render service configuration
├── netlify.toml          # Netlify configuration
├── templates/
│   └── index.html        # Main HTML file
├── static/
│   ├── app.js           # JavaScript functionality
│   └── styles.css       # CSS styling
└── README.md            # This file
```

## 🎯 API Endpoints

- `GET /` - Main page
- `POST /api/register_patient` - Register a new patient
- `POST /api/submit_test` - Submit a blood test request
- `GET /api/search_results/<patient_id>` - Search test results
- `POST /api/process_test/<test_id>` - Process a test and generate results
- `GET /api/get_all_patients` - Get all registered patients
- `GET /api/get_all_tests` - Get all test requests
- `GET /api/get_all_results` - Get all test results

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

## ⚠️ Disclaimer

This is an educational tool and should not replace actual medical blood testing. Always consult with healthcare professionals for medical purposes.

---

**STRIVING FOR BETTER by Adu**
