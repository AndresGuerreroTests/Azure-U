import React, { useContext, useState, useEffect } from "react";
import TareasContext from "../context/TareasContext";
import { useHistory, useParams } from "react-router";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1.5rem;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 63vw;

  @media (min-width: 600px) {
    width: 50vw;
  }
`;
const Input = styled.input`
  padding: 1rem;
  margin: 1.5rem 0rem;
  outline: none;
  border: 1px solid rgba(86, 86, 102, 1);
  transition: all 0.5s ease;
  font-family: "Montserrat", sans-serif;

  &:focus {
    transition: all 0.5s ease;
    border: 1px solid rgba(121, 180, 231, 1);
  }
`;

const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  min-width: 200px;
  height: 50px;
  margin-top: 1.4rem;
  padding: 0 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #fff;
  border: 1px solid #000;
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;
  letter-spacing: 1px;

  &:hover {
    transition: all 0.3s ease;
    color: #fff;
    background-color: #000;
    border-color: #000;
  }
`;

const TaskForm = () => {
  const [tareas, guadarTareas] = useState({
    id: "",
    title: "",
    description: "",
    done: "",
  });

  const { title, description } = tareas;

  const history = useHistory();
  const params = useParams();

  const { tasks, addTask, editTask } = useContext(TareasContext);

  useEffect(() => {
    let TareaSeleccionada = "";

    if (tasks) {
      TareaSeleccionada = tasks.find((task) => task.id === params.id);
    }

    if (TareaSeleccionada) {
      guadarTareas(TareaSeleccionada);
    }
  }, [params, tasks]);

  const hanldeChange = (e) => {
    guadarTareas({
      ...tareas,
      [e.target.name]: e.target.value,
    });
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();

    if (tareas.id) {
      editTask(tareas);
    } else {
      addTask(tareas);
    }

    history.push("/");
  };

  return (
    <Container>
      <Form onSubmit={hanldeSubmit}>
        <Input
          type="text"
          name="title"
          value={title}
          onChange={hanldeChange}
          placeholder="Nombre de Tarea"
        />
        <Input
          type="text"
          name="description"
          value={description}
          onChange={hanldeChange}
          placeholder="Descripción"
        />
        <Button>{tareas.id ? "Editar tarea" : "Crear tarea"}</Button>
      </Form>
    </Container>
  );
};

export default TaskForm;
