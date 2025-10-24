import React from 'react'

function GitHubCard(props) {
  const [userData, setUserData] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(function() {
    function fetchGitHubData() {
      setLoading(true)
      setError(null)

      const username = props.username || 'octocat'
      
      fetch(`https://api.github.com/users/${username}`)
        .then(function(response) {
          
          if (!response.ok) {
            throw new Error('User not found')
          }
          return response.json()
        })
        .then(function(data) {
          setUserData(data)
          setLoading(false)
        })
        .catch(function(err) {
          setError(err.message)
          setLoading(false)
        })
    }
    fetchGitHubData()
  }, [props.username])

  if (loading) {
    return (
      <div className={`rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        props.isDarkMode ? 'bg-gray-800 shadow-black/30' : 'bg-white shadow-black/10'
      }`}>
        <h2 className={`text-2xl font-bold mb-6 ${
          props.isDarkMode ? 'text-gray-100' : 'text-gray-900'
        }`}>GitHub</h2>
        <p className={`text-center py-8 ${
          props.isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        props.isDarkMode ? 'bg-gray-800 shadow-black/30' : 'bg-white shadow-black/10'
      }`}>
        <h2 className={`text-2xl font-bold mb-6 ${
          props.isDarkMode ? 'text-gray-100' : 'text-gray-900'
        }`}>GitHub</h2>
        <p className={`text-center py-8 ${
          props.isDarkMode ? 'text-red-400' : 'text-red-600'
        }`}>Error: {error}</p>
      </div>
    )
  }

  return (
    <div className={`rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
      props.isDarkMode ? 'bg-gray-800 shadow-black/30' : 'bg-white shadow-black/10'
    }`}>
      <h2 className={`text-2xl font-bold mb-6 ${
        props.isDarkMode ? 'text-gray-100' : 'text-gray-900'
      }`}>GitHub</h2>
      
      <div className="flex flex-col items-center gap-6">
       
        <img 
          src={userData.avatar_url} 
          alt={userData.name || userData.login}
          className={`w-28 h-28 md:w-32 md:h-32 rounded-full border-4 object-cover ${
            props.isDarkMode ? 'border-sky-700' : 'border-sky-700'
          }`}
        />
        
        <div className="flex justify-around w-full gap-4">
          <div className="text-center">
            <p className={`text-3xl md:text-4xl font-bold ${
              props.isDarkMode ? 'text-sky-700' : 'text-sky-700'
            }`}>{userData.public_repos}</p>
            <p className={`text-sm mt-1 ${
              props.isDarkMode ? 'text-sky-700' : 'text-gray-600'
            }`}>Repos</p>
          </div>
          
          <div className="text-center">
            <p className={`text-3xl md:text-4xl font-bold ${
              props.isDarkMode ? 'text-sky-700' : 'text-sky-700'
            }`}>{userData.followers}</p>
            <p className={`text-sm mt-1 ${
              props.isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Followers</p>
          </div>
          
          <div className="text-center">
            <p className={`text-3xl md:text-4xl font-bold ${
              props.isDarkMode ? 'text-sky-700' : 'text-sky-700'
            }`}>{userData.following}</p>
            <p className={`text-sm mt-1 ${
              props.isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Following</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GitHubCard
