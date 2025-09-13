# Investment App Fullstack

This project is a simple fullstack **investment app** with user registration, login, and referral codes.

## Structure

```
investment-app/
├── backend/   # Node.js + Express + MongoDB backend
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env (not included, create manually)
├── frontend/  # React.js frontend
│   ├── src/
│   ├── package.json
│   └── public/
```

---

## Backend Setup

1. Go to the backend folder:
   ```bash
   cd backend
   npm install
   ```

2. Create `.env` file inside `backend/`:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

3. Run backend locally:
   ```bash
   npm run dev
   ```

The backend will run at `http://localhost:5000`.

---

## Frontend Setup

1. Go to the frontend folder:
   ```bash
   cd frontend
   npm install
   ```

2. Update the API URL inside `src/Register.js` and `src/Login.js`:
   ```js
   const res = await axios.post("http://localhost:5000/api/users/register", {...});
   ```

   Change `http://localhost:5000` to your **deployed backend URL** when hosting.

3. Run frontend locally:
   ```bash
   npm start
   ```

The frontend will run at `http://localhost:3000`.

---

## Deployment

### Backend (Render)
1. Push the `backend/` folder to a GitHub repo.
2. Go to [https://render.com](https://render.com), create new **Web Service**.
3. Connect GitHub repo, set environment variables from `.env`.
4. Deploy → you’ll get a live backend URL like:
   ```
   https://investment-backend.onrender.com
   ```

### Frontend (Vercel)
1. Push the `frontend/` folder to a GitHub repo.
2. Go to [https://vercel.com](https://vercel.com), import repo.
3. Update API calls in `Register.js` and `Login.js` to point to your Render backend URL.
4. Deploy → you’ll get a live frontend URL like:
   ```
   https://investment-frontend.vercel.app
   ```

---

## Features
- User registration with optional referral code
- Auto-generated referral code
- User login with JWT authentication
- React frontend with simple forms

---

✅ Now you can register, log in, and test referral codes live!
