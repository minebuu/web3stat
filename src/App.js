import React from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Button, Card, CardGroup} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

function App() {
  return (
    <div className="App">
      
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Web3Stat</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#market">Marketplace</Nav.Link>
          <Nav.Link href="#news">News</Nav.Link>
          <Nav.Link href="#community">Community</Nav.Link>
          <Nav.Link href="#games">Games</Nav.Link>
          <Nav.Link href="#ido">IDO</Nav.Link>

          
          <NavDropdown title="Guilds" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Governance</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Guild Quest</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Scholarship</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Discord</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Talk</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.6">Create New Guild</NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
        <Nav>
          <Nav.Link href="#deets">My Web3stat</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Connect Wallet
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <div class="bg-light p-5 rounded-lg m-3">
      <h1 class="display-4">Hello, Web3 world!</h1>
      <p class="lead">Web3stat is a social game community, a space to explore new P2E games, exchange information, and organize guilds to maximize profits. </p>
      <hr class="my-4" />
      <p>Our platform is a hub that connects experienced game users, guilds, and play-to-earn games.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>

    {/* <div className="container">
      <div className="row">
        <div className="photo">
          <img src="./sandbox.png" width="100%" />
          <h4>The Sandbox</h4>
        </div>
        <div className="photo">
          <img src="./lok.jpg"rounded width="100%"/>
          <h4>League of Kingdoms</h4>
        </div>
        <div className="photo">
        <img src="./farsite.jfif" width="100%"/>
          <h4>FARSITE</h4>
        </div>
      </div>
    </div> */}

    <CardGroup>
      <Card>
        <Card.Img variant="top" src="sandbox366.png" />
        <Card.Body>
          <Card.Title>The Sandbox</Card.Title>
          <Card.Text>
          The Sandbox is a blockchain-based virtual world allowing users to create, build, buy and sell digital assets in the form of a game.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 1 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="lok366.png" />
        <Card.Body>
          <Card.Title>League of Kingdoms</Card.Title>
          <Card.Text>
          League of Kingdoms is an MMO Strategy game where gamers fight for dominion. You can fully own and seamlessly trade digital assets through NFT technology.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 hours ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="farsite366.jpg" />
        <Card.Body>
          <Card.Title>Farsite Online</Card.Title>
          <Card.Text>
            Farsite is a blockchain-powered sandbox MMO RTS game with elements of adventure in a sci-fi setting based on a post-apocalyptic story.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 1 days ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

    </div>
  );
}


export default App;
