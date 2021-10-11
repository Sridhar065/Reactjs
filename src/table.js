import React from 'react'
import logo from './logo.svg';
import './App.css';
import StorageHelper from './helpers/storageHelper'
import CommonHelper from './helpers/commonHelper'


export default class Table extends React.Component {
  static displayName = Table.name; 

  constructor (props) {
    super(props);
    this.DeleteEmployee = this.DeleteEmployee.bind(this);
    this.state = { 
      firstname:"",
      middlename:"", 
      lastname:"", 
      dob:"", 
      course:"",
      district:"",  
      city:"", 
      gender:"", 
      phone:"", 
      address:"", 
      email:[],
      loading:true
    };
    // let name = StorageHelper.getValue("name");
    // let last = StorageHelper.getValue("last");
      // fetch('http://localhost:8092/api/v1/employee/get-list')
      // .then(response => response.json())
      // .then(data => {
      //   console.log(data.content)
      //   this.setState({ email: data.content, loading: false });
      // });
  }

 
  componentWillMount() {
    fetch('http://localhost:8092/api/v1/employee/get-list')
    .then(response => response.json())
    .then(data => {
      console.log(data.content)
      this.setState({ email: data.content, loading: false });
    });
}

  async DeleteEmployee(e){

  console.log("sqr")
  // console.log(sqr)
  var req=""
  
  let requestOptions = await fetch('http://localhost:8092/api/v1/employee/get-delete', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req)
  });
  if (requestOptions.status == 200) {
    alert("Deleted Successfully");
  } else {
    alert("error");
  }
};

    static renderForecastsTable(email)
    {
    return (
      <table>
        <thead>
          <tr className="hed-row">
            <th className="hed-row1">ID</th> <br/>
            <th className="hed-row2">firstname</th> <br/>
            <th className="hed-row3">middlename</th> <br/>
            <th className="hed-row4">lastname</th> <br/> 
            <th className="hed-row5">dob</th> <br/>
            <th className="hed-row5">course</th> <br/>
            <th className="hed-row2">district</th> <br/>
            <th className="hed-row3">city</th> <br/>
            <th className="hed-row4">gender</th> <br/> 
            <th className="hed-row5">phone</th> <br/>
            <th className="hed-row5">address</th> <br/>
            <th className="hed-row5">email</th> <br/>
            <th className="hed-row5">delete</th> <br/>
          </tr>
        </thead>
        <tbody>
        {email.map(email =>
               <tr className="hed-row6" key={email.id}>
                  <td>{email.id}</td> <br/>
                  <td>{email.firstname}</td> <br/>
                  <td>{email.middlename}</td> <br/> <br/> 
                  <td>{email.lastname}</td>  <br/>
                  <td>{email.dob}</td>  <br/>
                  <td>{email.course}</td>  <br/>
                  <td>{email.district}</td> <br/>
                  <td>{email.city}</td> <br/> <br/> 
                  <td>{email.gender}</td>  <br/>
                  <td>{email.phone}</td>  <br/>
                  <td>{email.address}</td>  <br/>
                  <td>{email.email}</td>  <br/>
                  <td>
                      <button style={{ backgroundColor: "#22afd6", color: "#fff", fontSize: "120%"}} 
                      name="Id" value="Submit" data-ddd={email.firstname} onClick={this.DeleteEmployee} >Delete</button>
                  </td>
                   
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render () {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Table.renderForecastsTable(this.state.email);

    return (
      <div className='table-striped'>
         <h1>{StorageHelper.getValue("name")}</h1>
         <h1>{StorageHelper.getValue("last")}</h1>
        {contents}
      </div>
    );
  }
}


