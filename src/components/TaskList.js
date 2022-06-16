import React, { useContext } from "react";

import TareasContext from "../context/TareasContext";

import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 4rem auto;
  padding: 1rem;
  overflow-x: auto;
  width: 70%;
  text-align: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  border: 0.2px solid #ddd;
  width: 100%;

  & thead {
    border-bottom: 1px solid #b1b1b1;
  }

  & th,
  td,
  div {
    text-align: left;
    padding: 8px;
    font-size: 1.3rem;
  }

  & div {
    padding: 8px 0;
  }

  & td div {
    text-align: justify;
  }
`;

const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  min-width: 100px;
  height: 30px;
  border-radius: 5px;
  font-size: 1rem;
  color: #000;
  margin: 5px;
  border: 1px solid #000;
  transition: all 0.4s ease;
  cursor: pointer;
  outline: none;

  &:nth-child(1):hover {
    transition: all 0.4s ease;
    background-color: #faff00;
  }

  &:nth-child(2):hover {
    transition: all 0.4s ease;
    background-color: red;
  }
`;

const ButtonState = styled.button`
  outline: none;
  height: 20px;
  border: none;
  background-color: #d10707d6;
  width: 100px;
  border-radius: 10px;
  color: #fff;
  font-size: 0.6rem;
  margin: 0;
  padding: 0;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;

  &[class~="Completada"] {
    background-color: green;
  }
`;

const Tbody = styled.tbody`
  .complete {
    text-decoration: line-through;
  }
`;
const TaskList = () => {
  const { tasks, deleteTask, editState } = useContext(TareasContext);

  return (
    <Container>
      {tasks.length !== 0 ? (
        <Table data-cy="tabla-tareas">
          <thead>
            <tr>
              <th>Tarea</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <Tbody>
            {tasks.map((tarea) => (
              <tr key={tarea.id}>
                <td
                  className={tarea.done ? "complete" : ""}
                  data-cy="td-titulo"
                >
                  {tarea.title}
                </td>
                <td name="descripcion" data-cy="td-descripcion">
                  <div className={tarea.done ? "complete" : ""}>
                    {tarea.description}
                  </div>
                </td>
                <td>
                  <ButtonState
                    className={tarea.done ? "Completada" : "Incompleto"}
                    onClick={() => editState(tarea)}
                    data-cy="boton-estado"
                  >
                    {tarea.done ? "Completada" : "Incompleto"}
                  </ButtonState>
                </td>
                <td>
                  <Link to={`/editar/${tarea.id}`}>
                    <Button>Editar</Button>
                  </Link>
                  <Button
                    onClick={() => {
                      deleteTask(tarea.id);
                    }}
                    data-cy="boton-eliminar"
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <p>No hay tareas pendientes</p>
      )}
    </Container>
  );
};

export default TaskList;
