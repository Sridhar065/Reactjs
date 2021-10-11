import React from 'react'
import logo from './logo.svg';
import './App.css';
import StorageHelper from './helpers/storageHelper'
import CommonHelper from './helpers/commonHelper'


export default class Tables extends React.Component {
  static displayName = Tables.name; 

  constructor (props) {
    super(props);
    // this.DeleteEmployee = this.DeleteEmployee.bind(this);
    this.state = { 
      firstname:"",
      middlename:"", 
      lastname:"", 
      dob:"", 
      course:"",
      district:"",  
      city:"", 
      city_detils:[], 
      gender:"", 
      phone:"", 
      address:"", 
      email:[],
      employee:"",
      Search:"",
      loading:true
    };
    let name = StorageHelper.getValue("name");
    let last = StorageHelper.getValue("last");
    fetch('http://localhost:8092/api/v1/employee/get-list')
    .then(response => response.json())
    .then(data => {
      console.log(data.content)
      this.setState({ email: data.content, loading: false });
    });
  }


  // deleteUser(id) {
  //   fetch(`http://localhost:4000/todo/${id}`, {
  //     method: 'DELETE'
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.warn(resp)
  //       getUsers()
  //     })
  //   })
  // }


  async DeleteEmployee(id){

    console.log("sqr")
    // console.log(sqr)
    // var req={firstname:this.state.firstname}
    
    let requestOptions = await fetch(`http://localhost:8092/api/v1/employee/get-delete/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    });
    if (requestOptions.status == 200) {
      alert("Deleted Successfully");
    } else {
      alert("error");
    }
  };
  

componentWillMount() {
  this.getEmployee();
}

async getEmployee() {
 
  this.setState({
    loading:true
  });
  await fetch('http://localhost:8092/api/v1/employee/get-city', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
 
  }).then(res => res.json())
  .then((result) => {
      if (result) {          
      console.log(result) 
              this.setState({
                city_detils:result.content,
                Search:result.content[0].city_detils,
                loading:false
              });
              console.log(this.state.city_detils);
      }
      else {
         
          return false;
      }
  }, function (error) {
      debugger;
      return false;
  })
 
}


// async getEmployee() {

// this.setState({
//   loading:true
// });
// await fetch('http://localhost:8092/api/v1/employee/get-city', {
//   method: 'GET',
//   headers: { 'Content-Type': 'application/json' }

// }).then(res => res.json())
// .then((result) => {
//     if (result) {          
//     console.log(result) 
//             this.setState({
//               city_detils:result.content,
//               city:result.content[0].city_detils,
//               loading:false
//             });
//             console.log(this.state.city_detils);
//     }
//     else {
       
//         return false;
//     }
// }, function (error) {
//     debugger;
//     return false;
// })

// }

// async Search(e){

//   var req={city:this.state.city}

//   await fetch('http://localhost:8092/api/v1/employee/get-search', {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//   }).then(data => {
//     console.log(data.content)
//     this.setState({city: data.content, loading: false });
//   });
//  }

 async Search(e){
  fetch('http://localhost:8092/api/v1/employee/get-search')
  .then(response => response.json())
  .then(data => {
    console.log(data.content)
    this.setState({city: data.content, loading: false });
  });
 }

handleAssign(event,values) {
  var value = values;
  console.log(event.target.value)
  console.log(values)
  this.setState({
    Search: event.target.value      
  });
}



handleChange(event) {
var value = event.target.name;
this.setState({
  [value]: event.target.value
});
}


    static renderForecastsTable(email)
    {
    return (
      <table className="hed-row12">
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
            {/* <th className="hed-row5">delete</th> <br/>
            <th className="hed-row5">Update</th> <br/> */}
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
                  
                  {/* <td>
                      <button style={{ backgroundColor: "#22afd6", color: "#fff", fontSize: "120%"}} 
                      name="firstname" value="Submit" data-ddd={email.firstname} onClick={this.DeleteEmployee(email.id)}>Delete</button>
                  </td>
                  <td>
                      <button style={{ backgroundColor: "#22afd6", color: "#fff", fontSize: "120%"}} 
                      name="firstname" value="Submit" data-ddd={email.firstname} onClick={this.UpdateEmployee} >Update</button>
                  </td> */}




                  {/* <td>
                      <button style={{ backgroundColor: "#22afd6", color: "#fff", fontSize: "120%"}} 
                      name="Id" value="Submit" data-ddd={email.firstname} onClick={this.DeleteEmployee} >Delete</button>
                  </td> */}
                   
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render () {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Tables.renderForecastsTable(this.state.email);

    return (
      <div className='table-striped'>
         <h1>{StorageHelper.getValue("name")}</h1>
         <h1>{StorageHelper.getValue("last")}</h1>

        <div>
         {/* <label className="lbl12">search</label>  */}
         search<select  name="Search" className="dataip12" style={{width:"11%",height:"20px",borderRadius:"4px",height:"28px"}} value={this.state.Search} 
         onChange={this.handleAssign.bind(this)} >

              {this.state.city_detils.map((obj) => 
                <option key={obj.city}>{obj.city}</option>
                  )};
      </select>
      <br/> <br/>
      {/* <label className="lbl12"> city </label> 
      <input  type="text" className="form-control" name="employee" value={this.state.employee} placeholder="Data name" onChange={this.handleChange.bind(this)} /> */}

     <button className="btn23" onClick={this.Search.bind(this)} >Search</button> <br/> <br/>
      </div>

        {contents}
      </div>
    );
  }
}


 
//   componentWillMount() {
//     fetch('http://localhost:8092/api/v1/employee/get-list')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data.content)
//       this.setState({ email: data.content, loading: false });
//     });
// }

//   async DeleteEmployee(e){

//   console.log("sqr")
//   // console.log(sqr)
//   var req=""
  
//   let requestOptions = await fetch('http://localhost:8092/api/v1/employee/get-delete', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(req)
//   });
//   if (requestOptions.status == 200) {
//     alert("Deleted Successfully");
//   } else {
//     alert("error");
//   }
// };


