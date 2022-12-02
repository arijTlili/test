import React, { Fragment,Component } from 'react';

import Favoris from '../../favoris';




const Like = (props) => {
    let classes= "fa fa-heart";

    
        if (!(props.liked)) {classes += "-o";
}
        else if((props.liked))
        
            {return(
            <Favoris timeout={props.timeout} />
            )
            }
        return (<i 
                    onClick={props.onClick} 
                    className={classes} 
                    aria-hidden="true"
                    />
                    
                    
                
                    );
}
export default Like;
 



