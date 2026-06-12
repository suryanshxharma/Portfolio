# 🙋‍♂️ Suryansh Sharma | Portfolio Website

A sleek, premium, and highly interactive portfolio website showcasing my experience as a **Machine Learning Engineer & Technical Growth Hacker**. Designed to deliver an engaging user experience utilizing modern web standards.

🌐 **Live Demo (Local)**: `http://localhost:8080`

---

## ✨ Features

- **Rich Aesthetics**: Responsive dark-mode-first glassmorphism design using `oklch` color spaces, backdrop filters, and subtle ambient glowing background animations.
- **Interactive Terminal CLI**: A retro-modern shell emulator allowing visitors to query my profile, projects, skills, and varsity football details using custom commands.
- **Interactive Demos**:
  - **Explainable Crop Disease Calibration**: Live Monte Carlo Dropout slider demonstrating Expected Calibration Error (ECE) shifts.
  - **Stock Predictor Curves**: Custom metric comparisons and active overlay graph plots.
  - **B2B Growth Agent Simulator**: Real-time console logs illustrating social crawling intent qualification.
  - **BillFlow WA Cash Chime**: Custom billing generator synthesizing cash register checkout ring alerts via the **Web Audio API**.
- **High-Performance Motion**: Progressive CSS Scroll-Driven animations (`view-timeline`) for entry/exit card fades, with an `IntersectionObserver` JavaScript fallback for older browsers.
- **Form Validation**: floating-label fields using strict input constraints and `:user-invalid` accessibility guidelines.

---

## 🛠️ Technology Stack

- **Structure**: Semantic HTML5 & SVG vector assets
- **Styling**: Vanilla CSS3 (CSS Variables, Flexbox, CSS Grid, Container Queries)
- **Logic**: Vanilla ES6 JavaScript
- **Synthesis**: Web Audio API (Sine/Triangle Oscillator nodes)

---

## 💻 Terminal Commands

Interact with the terminal emulator on the landing page using the following commands:
- `help` - Lists all available commands
- `about` - Displays personal background details
- `projects` - Summarizes my core project portfolios
- `skills` - Outputs my technical stack checklist
- `football` - Details varsity captaincy & campus engagement
- `clear` - Wipes console history

---

## 🚀 Running Locally

To host the portfolio static files locally on your machine, navigate to the project directory and run a local server:

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js (http-server)
npx http-server -p 8080
```

Open your browser and navigate to `http://localhost:8080` to experience the website.
