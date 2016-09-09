var MeTableHeader = React.createClass({
  render: () => {
    return(<thead>
      <tr>
        <th>My Name</th>
        <th>My Age</th>
        <th>My Gender</th>
      </tr>
    </thead>
    );
  }
});

var MeTableDataRow = React.createClass({
  render: ()=> {
    var meData = this.props.data;
    return(
      <tr>
        <td>{meData.name}</td>
        <td>{meData.age}</td>
        <td>{meData.gender}</td>
      </tr>
    );
  }

})

var MeTableBody = React.createClass({
  render: ()=> {
    var tbData = this.state.data;
    var tbRowData = tbData.forEach((row) => {
      return (<MeTableDataRow data={tbData} />);
    });
    return( 
      <tbody>
        {tbRowData}
      </tbody>);
  }
});
var MeTable = React.createClass({
  render: ()=> {
    <table>
    <MeTableHeader />
  </table>
  }

});

ReactDOM.render(<MeTable />, document.getElementById("table"));


