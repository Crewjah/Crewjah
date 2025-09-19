#!/bin/bash
# Start both frontend and backend automatically
(cd server && npm install && npm start &)
(cd client && npm install && npm run dev &)
echo "Frontend and backend are starting..."
