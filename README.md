# Jayhawkk - Professional Home Care Services

![Jayhawkk Banner](images/slider-1.jpg)

**Jayhawkk** is a modern, responsive website for a premium home care service provider. It connects seniors and their families with compassionate, professional caregivers.

This project has been recently upgraded to a modern technology stack featuring **Tailwind CSS** for professional styling and **Docker** for consistent deployment, while maintaining a mobile-first design philosophy optimized for devices like the **Galaxy S24**.

## 🚀 Technology Stack

- **Frontend**: HTML5, JavaScript (jQuery)
- **Styling**: Tailwind CSS (v3.4)
- **Fonts**: Inter (Sans-serif) & Playfair Display (Serif)
- **Containerization**: Docker & Nginx
- **Package Management**: NPM

## 🎨 Design System

The visual identity is crafted to convey trust, warmth, and professionalism:

- **Primary Color**: `Deep Teal (#005f73)` - Stability and Trust.
- **Secondary Color**: `Soft Green (#94d2bd)` - Wellness and Calm.
- **Typography**:
    - *Headings*: **Playfair Display** - Elegant and authoritative.
    - *Body*: **Inter** - Clean and highly readable.
- **Micro-interactions**: Subtle hover states, glow effects, and smooth transitions.

## 📱 Mobile Optimization

The layout is specifically tuned for modern mobile viewports, with a focus on:
- **Galaxy S24 Optimization**: Hero sections and grids are calibrated for tall aspect ratios (CSS `min-height` adjustments).
- **Touch Targets**: Buttons and navigation elements are sized for easy interaction.

## 🛠️ Setup & Installation

### Prerequisites
- Node.js & NPM
- Docker (optional, for containerization)

### Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Build Tailwind CSS**
   ```bash
   npx tailwindcss -i ./src/input.css -o ./css/main.css --watch
   ```

3. **Run Development Server**
   ```bash
   npm start
   ```
   Visit `http://localhost:3000` (or the port shown in your terminal).

### 🐳 Docker Deployment

1. **Build the Image**
   ```bash
   docker build -t jayhawkk-web .
   ```

2. **Run the Container**
   ```bash
   docker run -d -p 8080:80 jayhawkk-web
   ```
   Visit `http://localhost:8080`.

## 📁 Project Structure

```
jayhawkk/
├── css/                # Compiled CSS files
├── fonts/              # Icon fonts
├── images/             # Static assets
├── js/                 # JavaScript logic (main.js handles UI interactions)
├── scss/               # (Legacy/Removed)
├── src/
│   └── input.css       # Tailwind source styles
├── Dockerfile          # Nginx container config
├── tailwind.config.js  # Tailwind theme configuration
└── index.html          # Main entry point
```

## ✨ Recent Updates

- **Migration to Tailwind**: Replaced Bootstrap/SCSS with utility-first CSS.
- **Mobile Menu Fix**: Resolved off-canvas menu toggle issues using Tailwind hooks.
- **Performance**: Optimized asset loading and layout shifts.

---
&copy; 2026 Jayhawkk. All rights reserved.
