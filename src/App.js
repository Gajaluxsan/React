import logo from './logo.svg';
import './App.css';
import Table from './table.js';

function App() {
    const chartct =[{name: 'Gajaluxsan',age:23},{name: 'tharsini',age:23},{name: 'gugan',age:23}]
    return ( <div className = "container-sm bg-info mt-5" >
      <h1 className='text-center mb-4 text-white'>User Table</h1>
            <Table charect={chartct}/>
        </div>
    );
}

export default App;