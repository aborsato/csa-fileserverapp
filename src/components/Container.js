import React, { useContext, useEffect } from "react";
import { FileContext } from "../context/FileContext";
import FileTable from "./FileTable";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
  const { files, loading, runSearch } = useContext(FileContext);
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="">
      {loading ? <Loader /> : <FileTable data={files} />}
    </div>
  );
};

export default Container;
