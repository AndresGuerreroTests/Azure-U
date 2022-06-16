//Styles
import "./App.css";

//Dependencies
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import { ContextProvider } from "./context/TareasContext";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const TextMain = styled.p`
  text-align:center;
`

function App() {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={TaskList} />
            <Route exact path="/agregar" component={TaskForm} />
            <Route exact path="/editar/:id" component={TaskForm} />
          </Switch>
        </Container>
        <TextMain>Creado por:</TextMain>
      </Router>
    </ContextProvider>
  );
}

export default App;
