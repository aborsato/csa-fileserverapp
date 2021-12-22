import React, { createContext, useState } from "react";
import axios from "axios";
export const FileContext = createContext();

const FileContextProvider = props => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = query => {
    axios
      .get(`/api/files`)
      .then(response => {
        setFiles(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };
  return (
    <FileContext.Provider value={{ files, loading, runSearch }}>
      {props.children}
    </FileContext.Provider>
  );
};

export default FileContextProvider;
