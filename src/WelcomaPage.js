import React from 'react';
import './App.css';  
import logo from "./image.jpg";

class Welcome extends React.Component
{
     async regs()
     {
          console.log("sri");
          window.location = "/Regsister";
     }
     async list1()
     {
          console.log("sri");
          window.location = "/ViewList";
        
     }
    render()
    {
        return(
           <div>

                <pre className="welcm"> Welcome    to    Home    Page </pre>

                <img className="igs" src={logo} alt="website logo" />


                <div class="container11">
            
                <button className="btn12" onClick={this.regs.bind(this)}>Register</button>
                <button className="btn13"  onClick={this.list1.bind(this)}>list</button> <br/> 
               </div>
            </div>
        )
 
    }
}
export default Welcome;