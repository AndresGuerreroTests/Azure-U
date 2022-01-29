import { createContext, useReducer } from "react";

import TareasReducer from "./TareasReducer";

import { v4 } from "uuid";

const TareasContext = createContext();

export default TareasContext;

export const ContextProvider = (props) => {
  const initialState = {
    tasks: [],
  };

  const [state, dispatch] = useReducer(TareasReducer, initialState);

  const addTask = (task) => {
    dispatch({
      type: "AGREGAR_TAREA",
      payload: {
        ...task,
        id: v4(),
        done: false,
      },
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: "ELIMINAR_TAREA",
      payload: id,
    });
  };

  const editTask = (newTask) => {
    newTask.done = newTask.done ? false : true;

    dispatch({
      type: "EDITAR_TAREA",
      payload: newTask,
    });
  };

  const editState = (newState) => {

    newState.done = newState.done ? false : true;

    dispatch({
      type: "EDITAR_ESTADO",
      payload: newState,
    });
  };

  return (
    <TareasContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        deleteTask,
        editTask,
        editState,
      }}
    >
      {props.children}
    </TareasContext.Provider>
  );
};
