import { Component } from "react";
// Arrow Function  TAble Header
const TableHeader = () => {
    return <tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Password</th></tr>;
  }
// Arrow Function  TAble Footer
// const TableFooter =()=>{
//     return(<tfoot>
//         <tr>
//             <th>Name</th>
            
//         </tr>
//     </tfoot>);
// }
const TableBody =(props)=>{
   const {erwe} =props;
//    const rows = erwe.map((char)=>{
//         return(
//             <tr>
//                 <td>{char.name}</td>
//                 </tr>)
//     })
   return(<tbody>
    {erwe}
        </tbody>)
}

class Table extends Component {
    render() {
        const dataes = this.props
        return (
            <table className="table">
                <TableHeader/>
                <TableBody dataes={dataes}/>
            </table>
    );
    }
}
export default Table;