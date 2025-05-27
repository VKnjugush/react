// src/App.js
import React from 'react';

// Import React Bootstrap components
import { Navbar, Container, Nav, Card, Button, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <React.Fragment> 
      <div className="App">
        
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">My React-Bootstrap Site Features</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-5 mb-5 text-center"> {/* mt-5 adds margin-top, mb-5 margin-bottom */}
          <h1>Welcome to Our Awesome Page!</h1>
          <p className="lead">
            Discover the amazing features offered using React and Bootstrap.
          </p>
        </Container>

        <Container>
          <Row>
            <Col md={4} className="mb-4"> {/* md={4} means 3 cards per row on medium screens and up, mb-4 for margin-bottom */}
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="/Images/img-1.webp" />
                <Card.Body>
                  <Card.Title>Feature One</Card.Title>
                  <Card.Text>
                    This is a brief description of our first amazing feature. It's designed to be helpful and intuitive.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="/Images/img-2.webp" />
                <Card.Body>
                  <Card.Title>Feature Two</Card.Title>
                  <Card.Text>
                    Our second feature offers unique capabilities that set us apart from the competition. Explore it now!
                  </Card.Text>
                  <Button variant="success">Explore Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="/Images/img-3.webp" />
                <Card.Body>
                  <Card.Title>Service A</Card.Title>
                  <Card.Text>
                    Discover our premium Service A, tailored to meet your specific needs and exceed expectations.
                  </Card.Text>
                  <Button variant="info">Get Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <footer className="bg-light text-center text-lg-start mt-5">
          <Container className="p-4">
            <p>© {new Date().getFullYear()} MyReactBootstrapSite. All Rights Reserved.</p>
          </Container>
        </footer>

      </div>
    </React.Fragment> 
  );
}

export default App;