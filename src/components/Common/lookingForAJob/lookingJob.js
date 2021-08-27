import React from "react";
import classes from './lookingJob.mobule.css'
import lookingjob from '../../../assete/images/c1bac05a8fdd605ec458b341e4cced69.jpg'

let LookingJob = (props) => {
    return <div className={classes.job}>
        <img src={lookingjob}/>
    </div>

};

export default LookingJob;
