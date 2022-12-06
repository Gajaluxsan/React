import React, { Component } from 'react';

class App extends Component {
	render() {
		var heading = ['Name', 'City', 'Course'];
		var body =
			[['Kapil', 'Jaipur', 'MCA'],
			['Aakash', 'Hisar', 'Btech'],
			['Mani', 'Ranchi', 'MSc'],
			['Yash', 'Udaipur', 'Mtech']
			];
		return (
			<div >
				<Table heading={heading} body={body} />,
			</div>
		);
	}
}

class Table extends Component {
	render() {
		var heading = this.props.heading;
		var body = this.props.body;
		return (
            <div className='container'>
			<table className='table' style={{ width: 600 }}>
				<thead>
					<tr>
						{heading.map(head => <th>{head}</th>)}
					</tr>
				</thead>
				<tbody>
					{body.map(row => <TableRow row={row} />)}
				</tbody>
			</table>
            </div>
		);
	}
}

class TableRow extends Component {
	render() {
		var row = this.props.row;
		return (
			<tr>
				{row.map(val => <td>{val}</td>)}
			</tr>
		)
	}
}
const TebleRows=(props)=>{
    const row =this.props.row;
    return({row})
}

export default App;
