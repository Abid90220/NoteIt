# NoteIt

NoteIt is a full-stack notes app built with React, Express, MongoDB Atlas, and Upstash Redis. Users can create, view, update, and delete notes through a responsive blue-and-white interface.

## Live App

https://firstmernproject-zrnq.onrender.com

## Features

- Create, edit, and delete notes
- Persistent MongoDB Atlas storage
- Upstash Redis-backed rate limiting
- React frontend served by the Express backend in production
- Custom NoteIt blue-and-white theme and browser icon

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, DaisyUI, React Router, Axios
- Backend: Node.js, Express, Mongoose
- Database: MongoDB Atlas
- Rate limiting: Upstash Redis
- Deployment: Render

## Environment Variables

The backend requires these variables:

```txt
MONGO_URI=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

For local development, put them in `Backend/.env`. For Render, add them in the service Environment tab.

## Local Development

Install dependencies:

```bash
npm install --prefix Backend
npm install --prefix Frontend
```

Run the backend:

```bash
npm run dev --prefix Backend
```

Run the frontend:

```bash
npm run dev --prefix Frontend
```

The frontend runs on `http://localhost:5173` and talks to the backend at `http://localhost:5001/api`.

## Production Build

From the repository root:

```bash
npm run build
npm run start
```

In production, Express serves `Frontend/dist` and the API from the same host.

## Deployment

This repository includes `render.yaml` for Render. The service builds both apps and starts the Express backend:

```bash
npm install --prefix Backend && npm install --prefix Frontend && npm run build --prefix Frontend
npm run start --prefix Backend
```
