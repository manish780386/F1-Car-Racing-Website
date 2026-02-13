# 🏎️ F1 Racing 3D – Django + React Game

A modern **3D Formula 1 Racing Web Game** built using **React Three Fiber** for 3D graphics and **Django REST API** for backend race data management.

This project simulates a real-time racing experience directly in the browser with:

✅ Car physics
✅ Keyboard controls
✅ Camera follow system
✅ Lap counter
✅ Timer
✅ Smoke/Nitro effects
✅ Backend API integration

---

# 🚀 Features

### 🎮 Gameplay

* WASD / Arrow key driving
* Smooth acceleration & friction physics
* Steering based on speed
* Circular racing track
* Lap counter system
* Race timer
* Finish detection

### 🎥 Graphics (3D)

* 3D car built with geometries
* Dynamic camera follow
* Lighting + shadows
* Race track
* Smoke particle effects
* Nitro boost effect

### 🧠 Backend (API)

* Save race result to database
* Player name
* Lap count
* Completion time
* REST API using Django

---

# 🛠 Tech Stack

## Frontend

* React
* @react-three/fiber
* @react-three/drei
* three.js

## Backend

* Python
* Django
* Django REST Framework
* SQLite/PostgreSQL

---

# 📂 Project Structure

```
frontend/
 ├─ src/
 │   ├─ pages/
 │   │   └─ Home.jsx
 │   ├─ three/
 │   │   ├─ SimpleF1Car.jsx
 │   │   ├─ FollowCamera.jsx
 │   │   ├─ RaceTrack.jsx
 │   │   └─ Smoke.jsx
 │   ├─ hooks/
 │   │   └─ useControls.js
 │   └─ App.jsx

backend/
 ├─ race/
 │   ├─ models.py
 │   ├─ views.py
 │   ├─ serializers.py
 │   └─ urls.py
 └─ manage.py
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone project

```bash
git clone <repo-url>
cd f1-racing
```

---

## 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## 3️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Runs on:

```
http://127.0.0.1:8000
```

---

# 🔗 API Endpoint

### Save Race Result

```
POST /api/race/save/
```

### Body

```json
{
  "player_name": "Manish",
  "laps": 3,
  "time": 42
}
```

---

# 🎮 Controls

| Key   | Action      |
| ----- | ----------- |
| W / ↑ | Accelerate  |
| S / ↓ | Brake       |
| A / ← | Left        |
| D / → | Right       |
| N     | Nitro Boost |

---

# 🔥 Future Improvements

* AI opponent cars
* Multiplayer mode
* Leaderboard
* Real GLTF F1 model
* Sound effects
* Collision detection
* Drift physics
* Mobile controls
* Nitro bar UI
* Checkpoints system

---

# 📸 Screenshots

(Add your screenshots here)

---

# 🧑‍💻 Author

**Manish Dange**

Built for learning:

* React
* Three.js
* Game Physics
* Django APIs
* Full Stack Development

---

# ❤️ Why This Project?

This project helps understand:

✔ 3D Web Development
✔ Game Logic
✔ Physics Simulation
✔ Frontend + Backend integration
✔ Real-time rendering

Perfect for portfolios & internships.

---

# ⭐ If you like this project

Give it a ⭐ on GitHub!

---
