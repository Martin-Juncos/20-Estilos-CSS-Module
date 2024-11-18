import React from "react";
import styles from "./App.module.css";
import Header from "./Header";

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Bienvenido a mi aplicación</h1>
      <p>Este es un ejemplo de cómo usar CSS Modules en ReactJS.</p>
    </div>
  );
};

export default App;
