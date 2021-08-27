import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../../../Common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../../assete/images/anime-berserk-42617.jpg";
import foundjob
    from "../../../../assete/images/png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png";
import lookingjob from '../../../../assete/images/c1bac05a8fdd605ec458b341e4cced69.jpg'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div>
            <div >
                <img src='https://1.bp.blogspot.com/-VNtiIpNxZOw/UfzS_NluqyI/AAAAAAAADas/-gTI7CYNdQQ/s1600/%255BCommie%255D+Berserk+-+Golden+Age+Chapter+III+-+Advent+%255BBD+720p+AAC%255D+%255BFF7A8F54%255D.mkv_snapshot_01.09.38_%255B2013.08.03_15.51.17%255D.jpg'/>
            </div>
            <div className={classes.discriptionBlock}>
                <img src={props.profile.photos.large}/>
            </div>
            <div></div>
        </div>
    )
}
export default ProfileInfo;