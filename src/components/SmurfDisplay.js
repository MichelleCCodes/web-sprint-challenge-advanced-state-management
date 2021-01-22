import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from 'axios';

import Smurf from './Smurf'; 
// import {getSmurfs} from '../actions';

function SmurfDisplay() {

useEffect(()=> {
axios.get('http://localhost:3333/smurfs')
.then(res=>{
    console.log(res);
  })
  .catch(
          console.log('error :(')
  )
},[])
        return(
                <div className="smurfdisplay">
                        {/* map over smurf component */}
                <Smurf/>
                </div>
        )
      };

export default SmurfDisplay;

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.

// componentDidMount() {
//   axios.get('http://localhost:3333/smurfs').then(res=>{
//     console.log(res);
//   })
// }
