import './App.css'
import Profile from './Profile/Profile.jsx'
import userData from "./userData.json"
import FriendList from './FriendList/FriendList.jsx'
import friendsList from "./friendsList.json"


function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends = {friendsList} />
      
    </>
    
  )
}

export default App;
