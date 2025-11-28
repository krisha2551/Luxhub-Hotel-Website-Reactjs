🏨 LuxHub — Hotel Website (React · Vite · Bootstrap)

Live Demo
 • Demo deployed on Vercel

A modern, fully responsive hotel & resort website built with React + Vite + Bootstrap. The site includes booking forms, room listings, blogs, contact pages and a multi-page layout with reusable components.

🌐 Live Demo

https://luxhub-hotel-website-reactjs-wheat.vercel.app/

📸 Screenshots

Recommended: Add screenshots to your repository under a screenshots/ folder and reference them with relative paths. This guarantees GitHub will display them correctly.

Example — put images in ./screenshots/ then use:

![Home Page](./screenshots/homepage-min.png)
![Rooms Page](./screenshots/rooms.png)


If you need to control size in the README, use HTML:

<img src="./screenshots/homepage-min.png" alt="Home page" width="100%" />


If your screenshots are currently hosted with GitHub artifacts or user-attachments, they may not render publicly. See Troubleshooting below.

🚀 Features

⚡ Fast development with Vite

🎨 UI styled with Bootstrap 5

🧭 Multi-page structure: About, Rooms, Facilities, Blogs, Contact

🛏️ Rooms & Suites listing + Room detail pages

📅 Room booking form UI

⭐ Testimonials section

📰 Blog listing

🖼️ Modern, responsive layout with image cards

📦 Clean folder structure & reusable components

📂 Folder Structure

LUXHUB-HOTEL-WEBSITE-REACTJS/
│
├── node_modules/
├── public/
│
├── src/
│   ├── assets/            # images, icons, fonts
│   │
│   ├── Components/
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Nav/
│   │   │   └── Nav.jsx
│   │   └── (other shared components)
│   │
│   ├── Pages/
│   │   ├── About.jsx
│   │   ├── Blogs.jsx
│   │   ├── Contact.jsx
│   │   ├── Facilities.jsx
│   │   ├── Index.jsx
│   │   ├── Rooms.jsx
│   │   └── RoomsDetails.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── Data.json
│   ├── index.css
│   ├── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md    # ← you are editing this
└── vite.config.js

🛠️ Tech Stack
Tech	Purpose
React	UI & component architecture
Vite	Dev server & build tool
Bootstrap 5	Responsive styles and grid
JSON	Static data for rooms/blogs
⚙️ Installation & Run Locally

Clone

git clone https://github.com/yourusername/LuxHub-Hotel-React.git
cd LuxHub-Hotel-React


Install

npm install


Run dev server

npm run dev


Build for production

npm run build
