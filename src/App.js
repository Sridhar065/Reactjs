
import React, {lazy, Suspense} from 'react';  
// import logo from './logo.svg';  
import './App.css';  
// import Login from './Login'; 
// import Welcome from './WelcomaPage' 
// import Student_form from './Reg'; 
// import Tables from './ViewList'  
import { BrowserRouter as Switch, Route } from 'react-router-dom';   
// import SecureLS from 'secure-ls';
// import storage from './helpers/storageHelper';

const Login = lazy(() => import('./Login'));
const Welcome = lazy(() => import('./WelcomaPage'));
const Student_form = lazy(() => import('./Reg'));
const Tables = lazy(() => import('./ViewList'));


// class App extends React.Component {  
//   constructor (prpos) {
//   super(prpos)
//     this.storageClient = new SecureLS ({encodingType: 'aes'});
//   }

//   logOut() {
//     storage.removeValue('token');
//   }
//   removeValue (key) {
//     const value = this.storageClient.remove (key);
//     return value;
//   }

//  render(){
//   return (  
//     <Router>    
//       <div>    
//         <nav>    
//           <div>    
//             <ul className="namess" >    
//               <li className="lin">    
//                 <Link to={'/'}>Login</Link>    
//               </li>    
//               <li className="lin1">    
//                 <Link to={'/welcomePage'}>welcomePage</Link>    
//               </li>  
//               <li className="lin2">    
//                 <Link to={'/Regsister'}>Regsister</Link>    
//               </li>  
//               <li className="lin3">    
//                 <Link to={'/ViewList'}>ViewList</Link>    
//               </li> 
//               <li className="lin4">
//                 <a href="/" className="nav-link" onClick={this.logOut}>
//                   LogOut
//                 </a>
//               </li>   
//             </ul>    
//           </div>    
//         </nav> <br />   
const Routes = () => ( 
        <Switch>  
          <Suspense fallback={<div>Loading pages...</div>}> 
            <Route exact path='/' component={Login} />    
            <Route path='/welcomePage' component={Welcome} />   
            <Route path='/Regsister' component={Student_form} />  
            <Route path='/ViewList' component={Tables} />
          </Suspense>    
        </Switch>         
  );  

export default Routes;
