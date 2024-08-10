// import React, { useEffect, useState } from 'react';
// import { Container, Navbar, Nav } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import './Home.css'; // Ensure you have a CSS file for styling

// const Home = () => {
//   const [name, setName] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const email = sessionStorage.getItem('email');
//     if (!email) {
//       navigate('/'); // Redirect to login page if not logged in
//     } else {
//       const storedName = sessionStorage.getItem('name');
//       if (storedName) {
//         setName(storedName);
//       }
//     }
//   }, [navigate]);

//   return (
//     <div>
//       <Navbar bg="light" expand="lg">
//         <Container>
//           <Navbar.Brand href="#home">My Website</Navbar.Brand>
//           <Nav className="ml-auto">
//             {name && (
//               <Nav.Item className="d-flex align-items-center">
//                 <span className="mr-2">{name}</span>
//                 <i className="bi bi-person-circle" style={{ fontSize: '1.5rem' }}></i>
//               </Nav.Item>
//             )}
//           </Nav>
//         </Container>
//       </Navbar>
//       <Container className="mt-4">
//         <h1>Welcome, {name}!</h1>
//         {/* Additional content for the Home page */}
//       </Container>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css';

const Home = () => {
 
  const navigate = useNavigate();
  const [name, setName] = useState(sessionStorage.getItem("name") || "");



  const handleLogout = () => {
    sessionStorage.clear();
    
    window.location.href='/';
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My Website</Navbar.Brand>
          <Nav className="ml-auto d-flex align-items-center">
            {name && (
              <>
                <Nav.Item className="d-flex align-items-center mr-3">
                  <span className="mr-2">{name}</span>
                  <i className="bi bi-person-circle" style={{ fontSize: '1.5rem' }}></i>
                </Nav.Item>
                <Button variant="outline-danger" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <h1>Welcome, {name}!</h1>
      </Container>
    </div>
  );
};

export default Home;
