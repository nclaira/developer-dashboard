# Developer Dashboard

A modern, responsive Developer Dashboard built with React that displays real-time data from GitHub and weather APIs. Features a beautiful Light/Dark mode toggle for enhanced user experience.

## Description

This Developer Dashboard is a single-page application that helps developers track important information at a glance. It fetches and displays:
- **GitHub Profile Data**: Shows your repositories, followers, and following count with your profile avatar
- **Current Weather**: Displays real-time weather information including temperature, conditions, wind speed, and current time

The dashboard features a smooth Light/Dark mode toggle that persists your preference using localStorage.

## APIs Used

### 1. GitHub API
- **Endpoint**: `https://api.github.com/users/[username]`
- **Purpose**: Fetches user profile data including repositories, followers, and following count
- **No API Key Required**: Public API with rate limiting

### 2. Open-Meteo Weather API
- **Endpoint**: `https://api.open-meteo.com/v1/forecast`
- **Purpose**: Provides current weather data including temperature, wind speed, and weather conditions
- **No API Key Required**: Free public API

## Technologies Used

- **React 19.1.1**: JavaScript library for building user interfaces
- **Tailwind CSS 4.1.14**: Utility-first CSS framework for styling
- **Vite 7.1.7**: Fast build tool and development server
- **Fetch API**: For making HTTP requests to external APIs
- **React Hooks**: useState and useEffect for state management
- **LocalStorage**: For persisting theme preferences

## Features

- ✅ Real-time GitHub profile data fetching
- ✅ Current weather information with live time updates
- ✅ Light/Dark mode toggle with persistent theme
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Loading states and error handling
- ✅ Clean, modern UI with smooth animations
- ✅ Component-based architecture with props
- ✅ Reusable components

## Project Structure

developer-app/
- ├── src/
- │   ├── components/
- │   │   ├── Navbar.jsx         
- │   │   ├── GitHubCard.jsx    
- │   ├── pages/
- │   │   └── Dashboard.jsx       
- │   ├── App.jsx                
- │   ├── main.jsx               
- │   └── index.css              
- ├── public/                     
- ├── index.html                  
- ├── package.json                
- ├── vite.config.js           
- └── README.md                

## Installation & Setup

### Prerequisites
- Node.js (version 18.18 or higher)
- npm or yarn package manager

### Steps to Run Locally

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd developer-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure your GitHub username**
   - Open `src/pages/Dashboard.jsx`
   - Replace `'octocat'` with your GitHub username:
   ```javascript
   <GitHubCard username="your-github-username" />
   ```

4. **Configure weather location (optional)**
   - Open `src/pages/Dashboard.jsx`
   - Update latitude and longitude for your location:
   ```javascript
   <WeatherCard 
     latitude={51.5074}  // Your latitude
     longitude={-0.1278}  // Your longitude
   />
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The dashboard should now be running!

## 🏗️ Build for Production

To create a production-ready build:

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## Deployment

This project can be deployed to:
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via GitHub
- **GitHub Pages**: Use GitHub Actions for automated deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder

## Screenshots

### Light Mode
![Dashboard Light Mode](./screenshots/light-mode.png)

### Dark Mode
![Dashboard Dark Mode](./screenshots/dark-mode.png)

*Note: Add screenshots to a `screenshots` folder in your project*

## Component Details

### Navbar Component
- Displays the dashboard title
- Contains the Light/Dark mode toggle button
- Receives `toggleTheme` and `isDarkMode` as props

### GitHubCard Component
- Fetches data from GitHub API using the Fetch API
- Displays profile avatar, repos, followers, and following count
- Handles loading and error states
- Receives `username` as a prop

### WeatherCard Component
- Fetches weather data from Open-Meteo API
- Displays temperature, weather condition, wind speed
- Shows live updating time
- Receives `latitude` and `longitude` as props

### Dashboard Component
- Main page that renders all cards
- Passes props to child components
- Organizes cards in a responsive grid layout

## Customization

### Change GitHub Username
Edit `src/pages/Dashboard.jsx`:
```javascript
<GitHubCard username="your-username" />
```

### Change Weather Location
Edit `src/pages/Dashboard.jsx`:
```javascript
<WeatherCard 
  latitude={40.7128}   // New York
  longitude={-74.0060}


### Modify Colors
Edit `src/index.css` to change theme colors:
```css
.navbar-title {
  color: #2563eb; /* Change this color */
}
```

## Learning Outcomes

Through this project, I learned:
- How to fetch and display data from public APIs
- Managing state with React hooks (useState, useEffect)
- Implementing Light/Dark mode with persistent storage
- Creating reusable components and passing props
- Building responsive layouts with CSS
- Handling loading states and errors gracefully
- Using normal functions instead of arrow functions
- Version control with Git and GitHub

## 🤝 Contributing

This is a student project, but suggestions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- Email: your.email@example.com

## 🙏 Acknowledgments

- GitHub API for providing free access to user data
- Open-Meteo for free weather data
- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework

---

**Note**: Remember to replace placeholder values (username, location, screenshots) with your actual information before submitting!

## Additional Resources

- [React Documentation](https://react.dev/)
- [GitHub API Documentation](https://docs.github.com/en/rest)
- [Open-Meteo API Documentation](https://open-meteo.com/en/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
