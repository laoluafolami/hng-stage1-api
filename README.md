# HNG Stage 1 - Personal API

A simple Node.js/Express API deployed with Nginx reverse proxy on Azure.

## How to Run Locally

```bash
# Clone the repo
git clone https://github.com/laoluafolami/hng-stage1-api.git
cd hng-stage1-api

# Install dependencies
npm install

# Start the server
node server.js

# API will be available at http://localhost:3000
```
<img width="790" height="196" alt="image" src="https://github.com/user-attachments/assets/346dc17c-2599-41e5-baf9-83a63e4e9950" />

- All endpoints return Content-Type: application/json and HTTP 200.
  
## 🌐 Live Deployment
- URL: https://hng-laolu.centralus.cloudapp.azure.com/
- Stack: Node.js + Express, Nginx reverse proxy, PM2 process manager
- Server: Azure Ubuntu VM
  
## 👤 Author
- Name: Olaoluwa Afolami
- Github: https://github.com/laoluafolami/hng-stage1-api
- Email: laoluafolami@outlook.com
