<img width="1920" height="931" alt="2025-08-26 (1)" src="https://github.com/user-attachments/assets/e545328b-c5a8-4089-9b14-53122cc3ed9d" />
# AI Tools Hub

AI Tools Hub is a full-stack web platform that integrates multiple AI-powered tools into a single, user-friendly hub.  
It provides modular, API-driven utilities that enhance productivity, creativity, and automation.

---

## 🚀 Features

### Core AI Tools
- **AI Image Generator** 🎨  
  Generates stunning, high-quality images from text prompts using **Stability AI API**.

- **AI Summarizer** 📝  
  Summarizes long articles, blogs, or research papers into concise summaries using the **Groq API**.

- **SigmaGPT** 🤖  
  An AI chatbot built with **OpenAI API**, offering natural language conversations for Q&A, coding help, and brainstorming.

- **AI Recipe Generator** 🍳  
  Suggests recipes based on available ingredients using **Spoonacular API** + **OpenAI API**.

### Platform Highlights
- 🌐 Modern full-stack architecture (MERN / Django + React optional setup).
- 🔑 Secure API key integration for each service.
- 📱 Fully responsive UI for desktop & mobile.
- ⚡ Real-time performance with scalable backend.
- 🔒 Authentication and secure storage of user sessions & API requests.

---

## 🛠️ Tech Stack

### Frontend
- React.js (with TailwindCSS for UI)
- Shadcn/UI components
- Framer Motion (animations)

### Backend
- Node.js + Express.js (or Django alternative)
- MongoDB / PostgreSQL (for storing user data, history, sessions)
- REST API integration

### AI & APIs
- **Stability AI** → Image generation  
- **Groq API** → Text summarization  
- **OpenAI API** → Conversational AI & recipe logic  
- **Spoonacular API** → Ingredient-based recipe search  

---

## 📂 Project Structure

```
AI-Tools-Hub/
├── backend/             # Express.js or Django backend
│   ├── routes/          # API routes for each tool
│   ├── controllers/     # Business logic for APIs
│   └── models/          # DB models (User, History, etc.)
│
├── frontend/            # React frontend
│   ├── src/components/  # UI components
│   ├── src/pages/       # Pages (Home, Dashboard, etc.)
│   └── src/utils/       # API helper functions
│
├── public/              # Static files
├── README.md            # Documentation
└── package.json / manage.py
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js & npm (or Python & Django if using Django backend)
- MongoDB or PostgreSQL
- API keys for:
  - Stability AI
  - Groq API
  - OpenAI
  - Spoonacular

### Steps
```bash
# Clone the repo
git clone https://github.com/your-username/AI-Tools-Hub.git
cd AI-Tools-Hub

# Backend setup
cd backend
npm install   # or pip install -r requirements.txt (if Django)
npm run dev   # start backend server

# Frontend setup
cd ../frontend
npm install
npm start
```

Then, visit **http://localhost:3000** 🚀

---

## 🔑 Environment Variables

Create a `.env` file in the backend root and add:
```
STABILITY_API_KEY=your_stability_ai_key
GROQ_API_KEY=your_groq_key
OPENAI_API_KEY=your_openai_key
SPOONACULAR_API_KEY=your_spoonacular_key
DB_URL=your_database_url
PORT=5000
```

---

## 📖 Usage

1. **AI Image Generator** → Enter a text prompt → Get AI-generated image.
2. **AI Summarizer** → Paste an article URL → Receive summary.
3. **SigmaGPT** → Ask questions and chat with AI.
4. **AI Recipe Generator** → Input ingredients → Get AI-curated recipes.

---

## 📊 Roadmap

- [x] Core AI tools integration  
- [x] Authentication & secure API key management  
- [ ] User dashboard with saved history  
- [ ] AI-powered productivity bundle (notes, emails, task assistant)  
- [ ] Multi-language support  
- [ ] Deployment on Render/Vercel/Heroku  

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repo
2. Create a new branch (`feature/your-feature`)
3. Commit changes
4. Submit a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Rakesh Kumar Mishra**  
🌐 GitHub: [your-github-profile](https://github.com/your-username)  
💼 LinkedIn: [your-linkedin-profile](https://linkedin.com/in/your-profile)

