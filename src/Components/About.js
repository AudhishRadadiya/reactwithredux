import React from 'react';
import { useHistory, useLocation, useParams } from "react-router-dom";

function About() {
    const history = useHistory();
    const location = useLocation();
    const params = useParams();
    const {id,name} = params

  return (
    <div>
        {/* <button onClick={() => history.push("/")}>GO TO HOME</button> */}
        <button onClick={() => history.goBack()}>GO BACK</button>
        <h5>You were redirected from {location.state.frm}</h5>
        <p>{id}{name}</p>
    </div>
  )
}

export default About;