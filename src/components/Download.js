import React from "react";
import axios from "axios";
import { saveAs } from "file-saver";

const Download = props => {
  const downloadFile = fileName => {
    const payload = {
      blobName: fileName
    }
    axios
      .post(`/api/sas`, payload)
      .then(response => {
        saveAs(response.data.uri, fileName);
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  }
  const fileName = props.fileName;
  return <button onClick={() => downloadFile(fileName)} >download</button>
};

export default Download;
