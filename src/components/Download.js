import React from "react";
import axios from "axios";

const Download = props => {
  const downloadFile = fileName => {
    const payload = {
      blobName: fileName
    }
    axios
      .post(`/api/sas`, payload)
      .then(response => {
        window.open(response.data.uri, "_blank");
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
