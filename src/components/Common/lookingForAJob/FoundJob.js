import React from "react";
import classes from './lookingJob.mobule.css'
import foundjob from '../../../assete/images/png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png'

let FoundJob = (props) => {
    return <div className={classes.job} >
        <img src={foundjob}/>
    </div>
};

export default FoundJob;