import React from "react";
import styled from "@emotion/styled";
import { BsMusicNoteList } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <Logo>
        <span>
          <BsMusicNoteList />
        </span>
        <h1>Song</h1>
      </Logo>
      <Nav>
        <span>
          <Link to="/">Songs</Link>
        </span>
        <span>
          {" "}
          <Link to="/add">Add Song</Link>
        </span>
        <span>
          <Link to="/statics">Statics</Link>
        </span>
      </Nav>
    </Container>
  );
}

export default Header;

const Container = styled.div``;

const Logo = styled.div``;

const Nav = styled.div``;
