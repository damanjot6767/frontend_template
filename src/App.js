import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutUser, loginUser } from './Actions/auth';

function App() {
  const {user}=useSelector((state)=>state.users)
  const dispatch = useDispatch();

  const login = ()=>{
     dispatch(loginUser({
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
  }))
  }

  const logout = ()=>{
    dispatch(LogoutUser())
  }
  console.log("user",user)
  return (
    <div className="App">
       <button onClick={login}>Login</button>
       <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
