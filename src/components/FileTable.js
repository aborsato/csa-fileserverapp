import React from "react";
import NoFiles from "./NoFiles";
import Download from './Download';

const FileTable = props => {
  const results = props.data;
  return (results.length === 0) ? <NoFiles /> : (
    <table class="tg">
      <thead>
        <tr>
          <th class="tg-0lax">name</th>
          <th class="tg-0lax">owner</th>
          <th class="tg-0lax">date</th>
          <th class="tg-0lax">actions</th>
        </tr>
      </thead>
      <tbody>
        {results.map((file, key) => {
          return (
            <tr key={key}>
              <td>{file.name}</td>
              <td>{file.owner}</td>
              <td>{file.created_on}</td>
              <td><Download fileName={file.name} /></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default FileTable;
