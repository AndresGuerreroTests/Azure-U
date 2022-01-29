export default (state, action) => {
  switch (action.type) {
    case "AGREGAR_TAREA":
      return {
        tasks: [...state.tasks, action.payload],
      };
    case "ELIMINAR_TAREA":
      return {
        tasks: state.tasks.filter((tarea) => action.payload !== tarea.id),
      };

    case "EDITAR_TAREA":
    case "EDITAR_ESTADO":
      return {
        tasks: state.tasks.map((tarea) =>
          tarea.id === action.payload.id ? action.payload : tarea
        ),
      };
    default:
      return {
        ...state,
      };
  }
};
