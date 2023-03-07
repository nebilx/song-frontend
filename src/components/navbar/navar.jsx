import { Outlet, Link } from "react-router-dom";
import { Container, Content, Logo, Nav, Bar } from "./navbar.style";
import { BsMusicNoteList } from "react-icons/bs";
import { useState } from "react";
const Navbar = () => {
  const [bar, setBar] = useState(false);
  return (
    <Container>
      <Content bar={bar}>
        <Logo>
          <span>
            <BsMusicNoteList />
          </span>
          <h1>Song</h1>
        </Logo>
        <Nav bar={bar}>
          <a>
            <Link to="/">Songs</Link>
          </a>
          <a>
            {" "}
            <Link to="/add">Add Song</Link>{" "}
          </a>
          <a>
            {" "}
            <Link to="/statics">Statics</Link>{" "}
          </a>
        </Nav>
        <Bar bar={bar} onClick={() => setBar(!bar)}>
          <span className="active"></span>
        </Bar>
      </Content>
    </Container>
  );
};

export default Navbar;
