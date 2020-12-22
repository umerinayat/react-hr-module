import React from 'react';

import { Link } from 'react-router-dom';


function Header(props) {

    return (
       <> 
        <h1>Header</h1>
        <Link to="/hr/awards"> Awards </Link>
        {" | "}
        <Link to="/hr/warnings"> Warnings </Link>
       </>
    );

}


export default Header;