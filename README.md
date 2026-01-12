# 🔐 Password Generator & Strength Checker

A modern, secure, and user-friendly Password Generator built with React + Vite.
It allows users to generate strong passwords based on customizable rules, evaluate password strength in real-time, and store a history of generated passwords locally — all wrapped in a sleek mobile-first UI with dark & light mode support.

---

## ✨ Features

- 🔑 Custom Password Generation
  - Control password length
  - Toggle:
    - Lowercase letters
    - Uppercase letters
    - Numbers
    - Symbols
- 📊 Password Strength Meter
  - Real-time feedback
  - Visual strength bar
  - Labels: Weak → Very Strong
- 📋 Copy to Clipboard
  - One-click password copying
- 🕘 Password History
  - Stores recently generated passwords
  - Persisted using localStorage
- 🌗 Dark / Light Mode
  - System-friendly
  - Preference saved locally
- 📱 Mobile-First Responsive Design
  - Works beautifully on phones, tablets, and desktops
- ✨ Smooth UI Animations
  - Powered by Framer Motion

---

## 🛠️ Tech Stack

| Technology        | Purpose                     |
| ----------------- | --------------------------- |
| **React**         | UI Framework                |
| **Vite**          | Fast build tool             |
| **Tailwind CSS**  | Styling & responsiveness    |
| **Framer Motion** | Animations                  |
| **LocalStorage**  | Theme & history persistence |

---

## 📂 Project Structure

```css
src/
├── components/
│   ├── PasswordDisplay.jsx
│   ├── StrengthMeter.jsx
│   ├── RuleToggle.jsx
│   └── HistoryList.jsx
│
├── hooks/
│   ├── usePasswordGenerator.js
│   └── useDarkMode.js
│
├── utils/
│   ├── generatePassword.js
│   └── passwordStrength.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/hencci/password-generator.git
cd password-generator
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

Open local host

---

## 🔒 Password Strength Logic

The strength meter is calculated using:

- Password length
- Presence of:

  - Uppercase letters
  - Numbers
  - Special characters

Each condition increases the strength score, producing:
Weak → Okay → Good → Strong → Very Strong

---

## 🧾 License

This project is open-source and available under the MIT License.

---

## Live preview

https://hencci-password-generator.netlify.app

---

## 👨‍💻 Author

Henry Moses

- [GitHub](https://github.com/hencci)
- [LinkedIn](https://linkedin.com/in/henry-orlu-moses-78bb74286)
