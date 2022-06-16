import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 400;
  color: gray;

  & span {
    font-weight: bold;
  }
`;

const AddContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  min-width: 200px;
  height: 50px;
  padding: 0 25px 0 25px;
  border-radius: 5px;
  font-size: 1rem;
  color: #fff;
  background-color: #000;
  border: 1px solid #000;
  transition: all 0.4s ease;
  cursor: pointer;
  outline: none;
  letter-spacing: 1px;

  &:hover {
    transition: all 0.4s ease;
    color: #000;
    background-color: #fff;
    border-color: #000;

  }
`;

const Header = () => {
  return (
    <div>
      <Container>
        <Link to="/">
          <Title>
            <span>Tareas</span> App
          </Title>
        </Link>
      </Container>
      <AddContainer>
        <Link to="/agregar">
        <Button data-cy="boton-nueva-tarea">Agregar Tarea</Button>
        </Link>
      </AddContainer>
    </div>
  );
};

export default Header;
