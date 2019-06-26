import React from 'react';
import {Link} from 'react-router-dom';



const DashBoardHeader = (props) =>{
    return(
        <header>
            <nav>
                <div>Wedding Planner</div>
                <div># of events ({props.count})</div>
                <div><Link to={`/dashboard/${props.id}/add`}>Add Event</Link></div>
            </nav>
        </header>
    )
}

export default DashBoardHeader;