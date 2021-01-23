import React,{ useState } from 'react';
import { connect } from 'react-redux'; 
import { postSmurf } from '../actions'; 

const AddForm = (props) => {
const {smurfs} = props

//HELPER FUNCTIONS: 
const onSubmit = evt => {
    evt.preventDefault();
    // postSmurf()
}

const onChange = (e) => {
    console.log(postSmurf)
    postSmurf(e.target.value);
}
        return(<section>
            <h2>Add Smurf</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={onChange} name="name" id="name" />

                    <label htmlFor="position">Position:</label><br/>
                    <input onChange={onChange} name="position" id="position" />

                    <label htmlFor="description">Description:</label><br/>
                    <input onChange={onChange} name="description" id="description" />
                </div>

                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: </div>
                <button onClick={onSubmit}>Submit Smurf</button>
            </form>
        </section>);
}

const mapStateToProps = state => {
    return{ 
        smurfs: state.smurfs
    }
}
export default connect( mapStateToProps, { postSmurf })(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.

// create form values
// create a handleSubmit that uses postSmurfs function
