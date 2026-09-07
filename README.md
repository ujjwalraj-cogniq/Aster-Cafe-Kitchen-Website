# Aster Cafe & Kitchen ☕🌿

A premium, highly responsive frontend web application built for a luxury cafe experience. 

This project serves as the official frontend for Aster Cafe & Kitchen. It features a stunning dark-plum and gold aesthetic with glassmorphic elements, smooth micro-animations, and mobile-first responsiveness. It also includes an integrated AI concierge to assist customers with menu inquiries and reservations.

## 🌟 Key Features

- **Modern Tech Stack:** Built with React and Vite for lightning-fast performance and hot module replacement (HMR).
- **Luxury UI/UX:** A sleek design system using custom CSS variables, flexbox/grid layouts, and elegant hover animations.
- **Aster Concierge:** An integrated, intelligent AI chatbot powered by the Google Gemini API, designed to assist customers with the menu, hours, and general inquiries.
- **Seamless Bookings:** Integrated WhatsApp reservation flow allowing customers to book tables and contact staff instantly.
- **Fully Responsive:** Carefully crafted media queries ensure the site looks perfect on mobile phones, tablets, and large desktop screens.

## 🛠️ Technology Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router v6
- **Styling:** Vanilla CSS (CSS Variables, Flexbox, Grid)
- **AI Integration:** `@google/genai` (Gemini API)
- **Icons:** React Icons

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/ujjwalraj-cogniq/Aster-Cafe-Kitchen-Website.git
cd Aster-Cafe-Kitchen-Website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Environment Variables
Create a `.env.local` file in the root directory of the project and add your Google Gemini API key:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Start the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## 📂 Project Structure

```text
src/
├── components/       # Reusable UI components (Header, Footer, Chatbot, etc.)
├── data/             # Static data files (menu items, categories)
├── hooks/            # Custom React hooks (e.g., usePageTitle)
├── layouts/          # Page layouts (Layout.jsx)
├── pages/            # Main page components (Home, Menu, About, Contact, etc.)
├── services/         # External API integrations (geminiService.js)
├── index.css         # Global styles and design system variables
├── main.jsx          # React application entry point
└── App.jsx           # Main routing configuration
```

## 🌐 Deployment
This project is optimized for deployment on Vercel. 
To deploy, simply link the GitHub repository to your Vercel account and ensure the `VITE_GEMINI_API_KEY` is added to your Vercel Environment Variables in the project settings.

## 📄 License
This project is proprietary and confidential. Unauthorized copying of these files, via any medium, is strictly prohibited.
