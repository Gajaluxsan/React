import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

const obj = [{email:"gowtham@outlook.com",firstname:"gowtham",lastname:"ss",password:"outlook010"},{email:"ss@ss.com",firstname:"ss",lastname:"ss",password:"ss"},{email:"gow@gow.com",firstname:"gow",lastname:"gow",password:"gow"}];

const TableHeaderRow = () => {
  return <tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Password</th></tr>;
}

const TableRow = ({data}) => {
  return data.map((data) =>
    <tr>
      <td>{data.firstname}</td><td>{data.lastname}</td><td>{data.email}</td><td>{data.password}</td>
    </tr>
  );
}

const Table = ({data}) => {
  return (
    <table>
      <TableHeaderRow />
      <TableRow data={data} />
    </table>
  );
}

const App = () => <Table data={obj} />;
ReactDOM.render(<App />, document.getElementById("app"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();