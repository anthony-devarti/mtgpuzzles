import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Tutorial from './routes/Tutorial';
import Create from './routes/Create';

function App() {
  return (
    <div className='global'>
      <Router>
        <div className="App">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Teferi's Puzzle Box</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Quiz Menu</Nav.Link>
                <Nav.Link>
                  <Link to="/tutorial">
                    Tutorial
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/create">
                    Create
                  </Link>
                </Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Quiz Menu</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline className='search'>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Go</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <Routes>
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
