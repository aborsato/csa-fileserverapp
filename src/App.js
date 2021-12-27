import React, { Component } from "react";
import FileContextProvider from "./context/FileContext";
import Header from "./components/Header";
import Container from "./components/Container";

class App extends Component {
  render() {
    return (
      <FileContextProvider>
        <div className="container">
          <Header />
          <Container />

        </div>
      </FileContextProvider>
    );
  }
}

export default App;
