import { Component } from "react";
// Arrow Function  TAble Header
const TableHeader =()=>{
    return(<thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Action</th>
        </tr>
    </thead>);
}
// Arrow Function  TAble Footer
const TableFooter =()=>{
    return(<tfoot>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Action</th>
        </tr>
    </tfoot>);
}
const TableBody =(props)=>{
   const er =props
}

class Table extends Component {
    render() {
        const {dataes} = this.props
        return (
            <table className="table">
                <TableHeader/>
                <TableBody chardata={dataes}/>
                <TableFooter/>
            </table>
    );
    }
}
export default Table;