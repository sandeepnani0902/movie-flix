🎬 MovieFlix — Full-Stack OTT Platform
A full-stack web application built with the MERN stack that lets you browse and manage movies, TV seasons, and episodes — all through a clean, dynamic interface. No hardcoded content; everything is driven by the backend and stored in MongoDB.

🚀 Live Demo

Coming soon — deployment in progress on Render


📸 Screenshots

(Add a screenshot or screen recording of the app here — even a single image makes a huge difference)


💡 What It Does

Browse movies and shows with a responsive, clean UI
Manage content dynamically — movies, seasons, and episodes are all handled through the backend, not hardcoded in the frontend
Handles nested content structure cleanly (Show → Season → Episode) without the data getting messy
JWT-based authentication so only authorized users can manage content
Full CRUD support — create, read, update, delete content through REST APIs


🛠 Tech Stack
LayerTechnologyFrontendReact.js, Axios, CSS3, ViteBackendNode.js, Express.jsDatabaseMongoDB, MongooseAuthJWT (JSON Web Tokens)ToolsGit, GitHub, npm, Postman

🗂 Project Structure
movie-flix/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Route-level views
│   ├── services/         # Axios API calls
│   └── App.jsx
├── public/
├── index.html
└── package.json

Backend lives in a separate repo — link coming soon.


⚙️ Getting Started
Prerequisites

Node.js v18+
MongoDB (local or Atlas)

Installation
bash# Clone the repo
git clone https://github.com/sandeepnani0902/movie-flix.git
cd movie-flix

# Install dependencies
npm install

# Start the dev server
npm run dev

Make sure the backend server is running and your .env is configured with the correct MongoDB URI and JWT secret.


🔑 Environment Variables
Create a .env file in the backend root:
envMONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

📌 Key Things I Learned Building This

Designing a MongoDB schema for nested content (shows → seasons → episodes) without it turning into a mess
Keeping API responses lean so the frontend doesn't choke on large content lists
Wiring up Axios cleanly with async/await — handling loading states so the UI feels smooth, not janky
Following MVC on the backend so routes, controllers, and models each do their own job and don't bleed into each other


🙋‍♂️ Author
Sandeep Kumar

LinkedIn: linkedin.com/in/sandeep934
GitHub: github.com/sandeepnani0902


📄 License
This project is open source and available under the MIT License.
