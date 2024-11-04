import logo from './logo.svg';
import './global.css';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutUser, loginUser } from './Actions/auth';
import { Navigation } from './navigation/routes';

function App() {

  return (
    <div className="App">
       <Navigation/>
    </div>
  );
}

export default App;
