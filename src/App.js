import React from "react";
import OnlyReactForm from "./components/OnlyReactForm";
import "./App.css";
import FormikForm from "./components/FormikForm";
import FormikCustomComponents from "./components/FormikCustomComponents";

function App() {
  return (
    <div className="App">
      <OnlyReactForm></OnlyReactForm>
      <FormikForm />
      <FormikCustomComponents />
    </div>
  );
}

export default App;
