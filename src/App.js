import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <Table />
      {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
      {/* <div>
        <Stylesheet primary={true} />
        <Inline />
        <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1>
      </div> */}
      {/* <NameList></NameList> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}

      {/* <Counter></Counter> */}
      {/* <Greet name="Steffi" heroName="Catwoman"> */}
      {/* <p>This is children props</p></Greet> */}
      {/* <Greet name="Alex" heroName="Hulk">
        <button>Click</button>
      </Greet>
      <Greet name="Erik" heroName="Dr. Doom" />
      <Welcome name="Steffi" heroName="Catwoman"></Welcome>
      <Welcome name="Alex" heroName="Hulk" /> */}
      {/* <Welcome name="Erik" heroName="Dr. Doom" /> */}
      {/* <Hello /> */}

      {/* <Message></Message> */}
    </div>
  );
}

export default App;
