import React, { useContext, useEffect } from "react";
import { FileContext } from "../context/FileContext";
import FileTable from "./FileTable";
import Loader from "./Loader";

const Container = () => {
  const { files, loading, listFiles } = useContext(FileContext);
  useEffect(() => {
    listFiles();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="">
      {loading ? <Loader /> : <FileTable data={files} />}
    </div>
  );
};

export default Container;
