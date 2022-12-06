import logo from './logo.svg';
import './App.css';
import Table from './table.js';

function App() {
    const obj = [{email:"gowtham@outlook.com",firstname:"gowtham",lastname:"ss",password:"outlook010"},{email:"ss@ss.com",firstname:"ss",lastname:"ss",password:"ss"},{email:"gow@gow.com",firstname:"gow",lastname:"gow",password:"gow"}];
    return ( <div className = "container-sm bg-info mt-5" >
      <h1 className='text-center mb-4 text-white'>User Table</h1>
            <Table data={obj}/>
        </div>
    );
}

export default App;