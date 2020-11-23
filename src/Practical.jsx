import React from 'react';
import {FaReact} from 'react-icons/fa';
import {MdAccountBalance} from 'react-icons/md';
import {IconContext} from 'react-icons';



const Practical = () => {

   

    return(
        <>
        <IconContext.Provider value={{color:'blue', size:'5rem'}}>
        <div class="text-center">
        <FaReact />
        <MdAccountBalance color="purple" size="10rem" />
        </div>
        </IconContext.Provider>
        
        </>
    );

}

export default Practical;

