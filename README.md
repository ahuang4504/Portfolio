# Albert Huang - Portfolio

A modern, responsive portfolio website showcasing my software engineering journey, projects, and interests.

## 🚀 Live Site

Visit [www.alberthuang.xyz](https://www.alberthuang.xyz)

## ✨ Features

- **Interactive Gallery** - Photo slideshow with personal moments
- **Live Spotify Integration** - Real-time music tracking
- **Connections Game** - Custom NYT Connections-style game about me
- **Timeline** - Career and education journey
- **Project Showcase** - Featured work with live demos and source code
- **Responsive Design** - Optimized for all devices

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Font**: Google Fonts (Open Sans, Vidaloka)
- **Deployment**: Vercel
- **APIs**: Spotify Web API

## 🎵 Spotify Integration

The portfolio displays my currently playing music in real-time using the Spotify Web API. It automatically updates every 30 seconds and falls back to recently played tracks when nothing is currently playing.

The backend authenticates API requests through Next.js serverless functions, ensuring secure and persistent access to my Spotify data.

## 🎮 Connections Game

A custom implementation of the popular NYT Connections puzzle game featuring personal categories about my interests, work experience, and habits. Built with React state management to handle game logic, validation, and interactive feedback for correct/incorrect guesses.

<!-- ## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. -->

## 📁 Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable UI components
├── pages/api/          # API routes for Spotify integration
└── styles/             # Global styles
```

## 🎨 Design

The portfolio features a warm, professional design with:
- Beige and navy color palette
- Custom 3D box shadows
- Smooth transitions and animations
- Mobile-first responsive design

---

Built with ❤️ by Albert Huang