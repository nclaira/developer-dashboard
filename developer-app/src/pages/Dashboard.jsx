import React from 'react'
import GitHubCard from '../components/GitHubCard'
import WeatherCard from '../components/WeatherCard'

// Dashboard page component - main page that displays all cards
function Dashboard(props) {
  return (
    <div className="w-full">
      {/* Dashboard Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Weather Card */}
        <WeatherCard
          latitude={51.5074}
          longitude={-0.1278}
          isDarkMode={props.isDarkMode}
        />

        {/* GitHub Card - Your GitHub profile */}
        <GitHubCard
          username="nclaira"
          isDarkMode={props.isDarkMode}
        />
      </div>
    </div>
  )
}

export default Dashboard
