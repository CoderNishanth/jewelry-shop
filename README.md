# Jewelry Shop

A full-stack jewelry shop website with admin functionality for product management and customer inquiries.

## Features

- Product catalog with categories
- Wishlist functionality
- Admin dashboard for product management
- Customer inquiry system
- Responsive design

## Tech Stack

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT

## Deployment Instructions

### Backend (Railway)

1. Create a new project on Railway (https://railway.app)
2. Connect your GitHub repository
3. Set up environment variables:
   - `MONGO_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret key
   - `PORT`: 5000

### Frontend (Vercel)

1. Create a new project on Vercel (https://vercel.com)
2. Connect your GitHub repository
3. Set up environment variables:
   - `VITE_API_URL`: Your Railway backend URL

### MongoDB Atlas

1. Create a new cluster
2. Set up a database user
3. Get the connection string and update it in your `.env` file

## Local Development

### Backend

```bash
# Install dependencies
cd server
npm install

# Start development server
npm run dev
```

### Frontend

```bash
# Install dependencies
cd client
npm install

# Start development server
npm run dev
```

## License

MIT
