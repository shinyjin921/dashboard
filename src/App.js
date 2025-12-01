import { useEffect, useState } from "react"
import Hello from "./components/Hello"
import Login from "./components/Login"
import Weather from "./components/Weather"


const App = () => {
  const [userName,setUserName] = useState(null);
  
  const handleLogin = (data)=>{
    localStorage.setItem("USER_NAME",data)
    setUserName(data);
  }
  const handleLogout = ()=>{
    localStorage.removeItem("USER_NAME");
    setUserName('');
  }
  useEffect(()=>{
    //로컬 스토리지에 userName이 있는지 체크
    const saved =localStorage.getItem("USER_NAME");
    setUserName(saved);
  },[])
  return (
    <div id="app"> 
    {
      userName ? <Hello user={userName} onLogout={handleLogout}/> 
      : <Login onLogin={handleLogin}/>
    }
    <Weather />
    </div>
  )
}

export default App
