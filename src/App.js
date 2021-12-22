import React, { Component } from "react";
import FileContextProvider from "./context/FileContext";
import Header from "./components/Header";
import Container from "./components/Container";

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

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
