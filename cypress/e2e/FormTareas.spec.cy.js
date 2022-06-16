describe("<TaskForm />", () => {
  it("<TaskForm /> - Verificar pantalla de nueva tarea", () => {
    cy.visit("http://localhost:3000/agregar");

    //Boton exista
    cy.contains("button", "Agregar Tarea");

    cy.get("[data-cy=boton-nueva-tarea]")
      .invoke("text")
      .should("equal", "Agregar Tarea");

    //Formulario exista
    cy.get("[data-cy=form-nueva-tarea]").should("exist");

    //Inputs existan
    cy.get("[data-cy=titulo-input]").should("exist");

    cy.get("[data-cy=descripcion-input]").should("exist");

    // Boton submit
    cy.get("[data-cy=boton-form-tarea]").should("exist");
  });

  it("<TaskForm /> - Verificar formulario para nueva tarea", () => {
    cy.visit("http://localhost:3000/agregar");

    cy.contains("Crear tarea");

    //Datos
    cy.get("[data-cy=titulo-input]").type("Organizar el cuarto");
    cy.get("[data-cy=descripcion-input]").type(
      "Limpiar los muebles de mi cuarto"
    );

    cy.get("[data-cy=boton-form-tarea]").click();

    // Verificar que se listo la tarea
    cy.get("[data-cy=tabla-tareas]").should("exist");
    cy.get("[data-cy=td-titulo]")
      .invoke("text")
      .should("equal", "Organizar el cuarto");
    cy.get("[data-cy=td-descripcion]")
      .invoke("text")
      .should("equal", "Limpiar los muebles de mi cuarto");
  });

  it("<TaskForm /> - Verificar cambio de estado de tarea", () => {
    cy.get("[data-cy=boton-estado]").click();

    // Verificar que se cambio el estado
    cy.get("[data-cy=boton-estado]").should("have.class", "Completada");

    cy.get("[data-cy=boton-estado]").click();

    // Verificar que se cambio el estado
    cy.get("[data-cy=boton-estado]").should("have.class", "Incompleto");
  });

  it("<TaskForm /> - Verificar la eliminación de una tarea", () => {
    cy.get("[data-cy=boton-eliminar]").click();

    // Verificar tabla
    cy.get("[data-cy=tabla-tareas]").should("not.exist");
    cy.get("[data-cy=td-titulo]").should("not.exist");
    cy.get("[data-cy=td-descripcion]").should("not.exist");
  });
});