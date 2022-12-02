import React, { Component } from "react";
import Animation from './giphy.gif';


export const Favoris =(props)=>{
return(
    <React.Fragment>
        <img  timeout={500} src={Animation} style={{display: 'block', margin:'auto'}}/>
    </React.Fragment>
);
};
export default Favoris;


