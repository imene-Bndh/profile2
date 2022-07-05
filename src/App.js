import './App.css';
import Profile from "./profile/Profile"

function App() {
  return (
    <div className="App">
      <Profile 
      fullName={"BENDAHGANE Imene"} 
      bio={"yong passionate programmer, born in 1998. had master degree in artificial intelligence. relised many project in both web and artificial intelligence"} 
      profession="web developper , data scientist"
      >
        <img src="/images/profilePic1.png" alt="profile pic" />
      </Profile>
      
    </div>
  );
}

export default App;
