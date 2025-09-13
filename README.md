# 📦 Real-Time Orders System (MERN + Socket.IO + Tailwind)

<div align="center">

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

A real-time order management system built using the MERN stack (MongoDB, Express, React, Node.js) with Socket.IO for live updates and TailwindCSS for UI styling.

> 🌟 **Clients instantly receive updates whenever an order is created, updated, or deleted — without refreshing or polling.**

---

## ⚡ Features

<table>
<tr>
<td>

- 📡 **Real-time updates** using MongoDB Change Streams + Socket.IO
- 🗂️ **MERN stack** architecture
- 🎨 **TailwindCSS** for clean UI
- 🔗 **REST APIs** for CRUD operations (with Postman support)
- 🛠️ **Beginner-friendly** setup

</td>
</tr>
</table>

---

## 📂 Project Structure

```
📁 Backend/
 ├── 📁 config/        # DB connection
 ├── 📁 controllers/   # Business logic
 ├── 📁 models/        # Mongoose schemas
 ├── 📁 routes/        # API routes
 ├── 📁 sockets/       # Socket.IO logic
 ├── 📄 index.js       # App entry
 └── 📄 server.js      # Express + Socket.IO

📁 frontend/
 ├── 📁 public/
 └── 📁 src/
     ├── 📁 assets/
     ├── 📁 pages/     # React pages (OrderList.jsx)
     ├── 📄 App.jsx
     ├── 📄 index.css
     └── 📄 main.jsx
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/realtime-orders.git
cd realtime-orders
```

### 2️⃣ Backend Setup

```bash
cd Backend
npm install
```

**Create a `.env` file inside `Backend/`:**

```env
MONGO_URI=mongodb://127.0.0.1:27017/ordersdb
PORT=5000
```

**Run backend:**

```bash
npm run dev
```

> ✅ **If successful, you should see:**
> ```
> ✅ MongoDB connected
> 🚀 Server running on port 5000
> ```

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
```

**Run frontend:**

```bash
npm start
```

> 🌐 **Open** 👉 http://localhost:3000

---

## 🔗 API Usage (Test with Postman)

### ➕ Create Order

```http
POST http://localhost:5000/api/orders
Content-Type: application/json
```

**Body:**
```json
{
  "customer_name": "Dhaval",
  "product_name": "Laptop",
  "status": "pending"
}
```

### 📜 Get All Orders

```http
GET http://localhost:5000/api/orders
```

### ✏️ Update Order

```http
PUT http://localhost:5000/api/orders/:id
Content-Type: application/json
```

**Body:**
```json
{
  "status": "shipped"
}
```

### ❌ Delete Order

```http
DELETE http://localhost:5000/api/orders/:id
```

---

## 🎨 Frontend UI

<div align="center">

| Feature | Description |
|---------|-------------|
| 📋 **Orders Display** | Displays all orders |
| 🎯 **Status Colors** | Color-coded status system |
| ⚡ **Live Updates** | Updates instantly when orders are modified in backend |

</div>

### 🌈 Status Color Coding:

- 🟡 **Pending** = Yellow
- 🔵 **Shipped** = Blue  
- 🟢 **Delivered** = Green

---

## 📸 Screenshots

> 👉 **Add screenshots of your running app here:**
> - Orders List Page

---

## 🚀 Tech Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=flat-square&logo=socket.io&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=flat-square&logo=socket.io&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white)

### Database
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)

</div>


---

<div align="center">

**⭐ Don't forget to star this repo if you found it helpful! ⭐**

</div>
