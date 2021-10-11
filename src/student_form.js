import React from 'react'
import logo from './logo.svg';
import './App.css';
import StorageHelper from './helpers/storageHelper'
import CommonHelper from './helpers/commonHelper'
const commonCall = new CommonHelper();


class Student_form extends React.Component {
  constructor(props) {
    console.log("first")
    super(props);
    this.state = {
      id:"",
      firstname:[],
      middlename:"", 
      lastname:"", 
      dob:"", 
      course:"",
      district:"",  
      city:"", 
      gender:"", 
      phone:"", 
      address:"", 
      email:"",
      employee:""
    };
  }




  componentWillMount() {
    this.getEmployee();
}


async getEmployee() {

  this.setState({
    loading:true
  });
  await fetch('http://localhost:8092/api/v1/employee/get-list', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }

  }).then(res => res.json())
  .then((result) => {
      if (result) {          
      console.log(result) 
              this.setState({
                firstname:result.content,
                employee:result.content[0].firstname,
                loading:false
              });
              console.log(this.state.firstname);
      }
      else {
         
          return false;
      }
  }, function (error) {
      debugger;
      return false;
  })

}



  async Submit(){
    console.log(this.state)
    if(this.state.firstname=="")
    {
      alert("Enter firstname");
    }
    else if(this.state.middlename=="")
    {
      alert("Enter middlename");
    }
    else if(this.state.lastname=="")
    {
      alert("Enter lastname");
    }
    else if(this.state.dob=="")
    {
      alert("Enter dob");
    }
    else if(this.state.course=="")
    {
      alert("Enter course");
    }
    else if(this.state.district=="")
    {
      alert("Enter district");
    }
    else if(this.state.city=="")
    {
      alert("Enter city");
    }
    else if(this.state.gender=="")
    {
      alert("Enter gender");
    }
    else if(this.state.phone=="")
    {
      alert("Enter phone");
    }
    else if(this.state.address=="")
    {
      alert("Enter address");
    }
    else if(this.state.email=="")
    {
      alert("Enter email");
    }
    else{
      this.setState({
          loading:true
      });
      const requestOptions = await fetch('http://localhost:8092/api/v1/employee/get-createlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },    
        body: JSON.stringify(this.state)
  
    }).then(res => res.json())
      .then((result) => {
        if (result) {          
        console.log(result) 
          commonCall.setName({name:this.state.firstname,lastname:this.state.lastname})
          // commonCall.setNames(this.state.lastname)
          window.location = "/list";
                this.setState({
                  Id:result.Id,
                  firstname: result.firstname,
                  middlename: result.middlename,
                  lastname: result.lastname,
                  dob: result.dob,
                  course:result.course,
                  district:result.district,
                  city:result.city,
                  gender:result.gender,
                  phone:result.phone,
                  address:result.address,
                  email:result.email,
                  
                  firstname:result.content,
                  employee:result.content[0].firstname,
                  loading:false
                });
                console.log(this.state.firstname);
        }
        else {
           
            return false;
        }
    }, function (error) {
        debugger;
        return false;
    })
  }
}

async DeleteEmployee(e){

      console.log("sqr")
      // console.log(sqr)
      var req={firstname:this.state.firstname}
      
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

  async UpdateEmployee(e){

    console.log("sqr")
    // console.log(sqr)
    var req={firstname:this.state.firstname}
    
    let requestOptions = await fetch('http://localhost:8092/api/v1/employee/get-updatelist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req)
    });
    if (requestOptions.status == 200) {
      alert("Update Successfully");
    } else {
      alert("error");
    }
};



    handleAssign(event,values) {
      var value = values;
      console.log(event.target.value)
      console.log(values)
      this.setState({
        employee: event.target.value      
      });
      // fetch('http://localhost:8092/api/v1/employee/get-list')
}
 


handleChange(event) {
    var value = event.target.name;
    this.setState({
      [value]: event.target.value
    });
  }

  render() {
    return (
      <div className="main-form">
      <form>
         
         <label className="tle">Student Registration Form</label> <br/> <br/>
            <hr/> <br/>
         <label> Firstname </label>         
         <input className="lbl1" type="text" name="employee" size="15" placeholder="Enter your firstname" value={this.state.employee} onChange={this.handleChange.bind(this)}/>

         <div>
         {/* <label className="lbl12"> Firstname </label>  */}
         <select  name="e1" className="dataip" style={{width:"11%",height:"20px",borderRadius:"4px",height:"28px"}} value={this.state.e1} onChange={this.handleAssign.bind(this)}>

              {this.state.firstname.map((obj) => 
                <option key={obj.firstname}>{obj.firstname}</option>
                  )};
      </select>
      <br/> <br/>
      <label className="lbl12"> Firstname </label> 
      <input  type="text" className="form-control" name="employee" value={this.state.employee} placeholder="Data name" onChange={this.handleChange.bind(this)} />
      </div>

         <label> Middlename: </label>     
         <input className="lbl2" type="text" name="middlename" size="15" placeholder="Enter your mdlename" value={this.state.middlename} onChange={this.handleChange.bind(this)}/> <br/> <br/>  

         <label> Lastname: </label>         
         <input className="lbl3" type="text" name="lastname" size="15" placeholder="Enter your lastname" value={this.state.lastname} onChange={this.handleChange.bind(this)}/> <br/> <br/>  
       
       
         <label>Select your DOB</label>
        <input className="dobb" type="date" name="dob" value={this.state.dob} onChange={this.handleChange.bind(this)}/>
           
           <br/> <br/>

   <div>
       <label>   
       Course :  
       </label>   
       <select className="curs" name="course" value={this.state.course} onChange={this.handleChange.bind(this)} >  
       <option value="Course">Course</option>  
       <option value="B.E/B.Tech">B.E/B.Tech</option>  
       <option value="BBA">BBA</option>  
       <option value="BCA">BCA</option>  
       <option value="MBA">MBA</option>  
       <option value="MCA">MCA</option>  
       <option value="M.Tech">M.Tech</option>  
       </select>  
   </div>  

   <br/> <br/> 

       <div>
           <label> State</label>
           <select name="district" className="std" value={this.state.district} onChange={this.handleChange.bind(this)}>
           <option value="-1" selected>select..</option>
           <option value="TamilNadu">TamilNadu</option>
           <option value="Bangalore">Bangalore</option>
           <option value="Goa">Goa</option>
           <option value="Kerla">Kerla</option>
           <option value="Andhra">Andhra</option>
           <option value="Karnataka">Karnataka</option>
           <option value="Other">Other</option>
           </select>
       </div>   
           
           <br/> <br/>

       <div>
           <label>City</label>
           <select name="city"  className="cty" value={this.state.city} onChange={this.handleChange.bind(this)}>
           <option value="-1" selected>select..</option>
           <option value="Salem">Salem</option>
           <option value="Nammakal">Nammakal</option>
           <option value="Coimbatore">Coimbatore</option>
           <option value="Chennai">Chennai</option>
           <option value="Other">Other</option>
           </select>
       </div>  

       <br/> <br/>
           
           
           <div>
               <label className="gnd">Gender</label>
               <div className="gnd1">
                   <input class="gnd2" type="radio" name="gender" value="Male" onChange={this.handleChange.bind(this)} />
                       <label>Male</label> <br/><br/>
                   <input class="gnd2" type="radio" name="gender" value="Female" onChange={this.handleChange.bind(this)} />
                       <label>Female</label> <br/><br/>
                   <input class="gnd2" type="radio" name="gender" value="Other" onChange={this.handleChange.bind(this)} />
                       <label>Other</label> <br/><br/>
               </div>
           </div>
           <br/> <br/>  
       
       <label>   
       Phone :  
       </label>  
       <input className="phn1" type="text" name="country code"  value="+91" size="2"/>   
       <input className="phn2" type="text" name="phone" size="10" placeholder="Mbl/no" value={this.state.phone} onChange={this.handleChange.bind(this)}/> <br/> <br/>  

       <label>Address</label>  <br/> 
       <textarea className="add" cols="40" rows="3"  name="address" placeholder="Enter your address" value={this.state.address} onChange={this.handleChange.bind(this)}>  
       </textarea>  

       <br/> <br/>  

       Email:  
       <input className="eml" type="email" id="email" placeholder="Enter your email @gmail" name="email" value={this.state.email} onChange={this.handleChange.bind(this)}/> <br/>     

       </form>  
       
       <br/>
       <center>
       {this.state.firstname==""? <button style={this.state.firstname?{}:{display:"none"}} className="btn" style={{ backgroundColor: "#a87919", color: "#fff", fontSize: "120%",width:"120px" }}
        value="Submit" onClick={this.Submit.bind(this)} >Submit</button> :null} 

       {this.state.firstname!=""? <button style={this.state.firstname?{display:"none"}:{}} className="btn" style={{ backgroundColor: "#a87919", color: "#fff", fontSize: "120%",width:"120px" }} 
       value="Submit" onClick={this.UpdateEmployee.bind(this)} >Update</button>:null} &nbsp; &nbsp;

       {/* <button className="btn" onClick={this.Submit.bind(this)}>Submit</button> <br/> <br/> */}
       <button style={{ backgroundColor: "#22afd6", color: "#fff", fontSize: "120%"}} 
                      name="Id" value="Submit" onClick={this.DeleteEmployee.bind(this)} >Delete</button>
       </center>
</div>


    );
  }
}

export default Student_form;








// console.log(requestOptions);
// if (requestOptions.status == 200) {
//   alert("Register Successfully");
//   commonCall.setName({name:this.state.firstname,lastname:this.state.lastname})
//   // commonCall.setNames(this.state.lastname)
//   window.location = "/list";
// }   
// else {
//   alert("error");
// }