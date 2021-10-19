import loading from "../../../assets/Iphone-spinner-2.gif";
import styles from "./preloader.module.css"
import React from "react";

let Preloader = (props) =>{
    return <div >
         <img src={loading} className={styles.preloading}/>
    </div>
}

export default Preloader;