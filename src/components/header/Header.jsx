import React from "react";
import "./Header.css";
import Headroom from "react-headroom";
import { greeting } from "../../portfolio";
import { Container } from "react-bootstrap";
import { useColorMode ,useColorModeValue} from "@chakra-ui/react";
function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Headroom >
      <Container>
        <header className="header" sticky="top">
          <a to="" className="logo">
            <span className="grey-color"> &lt; </span>{" "}
            <span className="logo-name"> {greeting.username} </span>{" "}
            <span className="grey-color"> /&gt;</span>
          </a>{" "}
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"> </span>{" "}
          </label>{" "}
          <ul className="menu">
            <li >
              <a href="#"> Home </a>{" "}
            </li>{" "}
            <li>
              <a href="#about"> About </a>{" "}
            </li>{" "}
            <li>
              <a href="#skills"> Skills </a>{" "}
            </li>{" "}
            <li>
              <a href="#portfolio"> Project </a>{" "}
            </li>{" "}
            <li>
              <a href="#contact"> Contact Me </a>{" "}
            </li>
            
            
          </ul>{" "}
        </header>{" "}
      </Container>
    </Headroom>
  );
}
export default Header;
