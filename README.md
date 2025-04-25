# Crypto Price Tracker

A responsive React + Redux Toolkit application that simulates real-time crypto price updates.

## ⚙️ Tech Stack

- React
- Redux Toolkit
- TypeScript
- CSS/Responsive Design (via Flex/Grid)
- Mocked WebSocket (via `setInterval`)
- Chart images (static)

## 🚀 Features

- Real-time updates (price, % changes, volume) every 1–2 seconds
- Redux-based state management (no local state)
- Responsive table for 5 crypto assets
- Color-coded percentage changes (green/red)
- Static 7D mini-charts per asset
- Clean and scalable architecture

## 📁 Project Structure

```
src/
├── app/               # Redux store setup
├── features/crypto    # Slice with state + reducers
├── components/        # UI components (table, rows, etc.)
├── utils/             # Data generator/simulation
```

## 🧪 How to Run

```bash
npm install
npm start
```

Runs on [http://localhost:3000](http://localhost:3000)

## 📹 Demo

[Demo Video (YouTube/GIF link here)](https://your-demo-link.com)

## 📝 Notes

- This project uses mocked WebSocket via interval
- Can be extended to real API integration (e.g., Binance)
- No localStorage or filters yet — consider as future enhancements
