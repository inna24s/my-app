import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) return <Preloader/>
    return (
        <div>
            <div>
                <img className={s.bigImg}
                    src='https://get.wallhere.com/photo/sunlight-trees-landscape-sunset-lake-nature-reflection-grass-sky-field-sunrise-green-morning-Sun-panorama-Pennsylvania-marsh-creek-state-park-dawn-agriculture-meadow-prairie-5760x1080-px-rural-area-atmospheric-phenomenon-computer-wallpaper-573802.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} className={s.ava}/>

            </div>
        </div>
    );
}

export default ProfileInfo;