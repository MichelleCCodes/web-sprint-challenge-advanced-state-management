import React, { useEffect } from "react";
import { connect } from "react-redux";

import Smurf from "./Smurf";
import { getSmurfs } from "../actions";

const SmurfDisplay = ({ isFetching, error, smurfs, getSmurfs }) => {

  useEffect(() => {
    getSmurfs();
  }, []);

  if (error) {
    return <h2>We got an error:{error}</h2>;
  }

  if (isFetching) {
    return <h2>Contacting the village for you...</h2>;
  }

  return (
    <>
      <div className="smurfdisplay">
        {smurfs.map(smurf => {
        return <Smurf key={smurf.id} smurf={smurf}/>;
        })}
        </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfDisplay);

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
