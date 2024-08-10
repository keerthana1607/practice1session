import { BrowserRouter as  Router,Routes, Route,Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';


function AppRouter() {

    if(sessionStorage.getItem("name")!=null){
        return (
            <Router>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
              </Routes>
            </Router>
          )
    }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*"  element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
