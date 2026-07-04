<div align="center">

# 🎬 Movie App (React)

**A simple movie catalog with a personal watchlist, built with React, Vite and Bootstrap.**

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![License: MIT](https://img.shields.io/github/license/EmirCobanOfficial/Movie_App_React?color=green)

</div>

---

## 📖 About

A small front-end project for practicing React fundamentals — component composition,
props, and lifting state up. It renders a catalog of movies from a **local dataset**
(`src/data.js`) and lets you build a personal watchlist. No backend or API key is required.

> The sample movie data is in Turkish and is for demonstration purposes only.

## ✨ Features

- 🎞️ **Movie catalog** — browse movies with poster, title and description
- 🏷️ **Badges** — "new" and "active" indicators on cards
- ⭐ **Watchlist** — add and remove movies from a personal list
- 🔽 **Toggle panel** — open and close the watchlist view

## 🛠️ Tech Stack

- [React 19](https://react.dev/)
- [Vite 6](https://vitejs.dev/)
- [Bootstrap 5](https://getbootstrap.com/) + Bootstrap Icons

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/EmirCobanOfficial/Movie_App_React.git
cd Movie_App_React

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app runs at **http://localhost:5173**.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
src/
├── components/   # Header, Footer, MovieList, Movie, WatchList, SearchForm, …
├── data.js       # Local movie dataset
├── App.jsx       # Root component & state
├── main.jsx      # Entry point
└── index.css     # Global styles
```

## 📝 License

Released under the **MIT License** — see [`LICENSE`](./LICENSE).
