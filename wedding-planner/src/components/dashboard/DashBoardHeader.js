import React from 'react';
import {Link} from 'react-router-dom';



const DashBoardHeader = (props) =>{
    const id = localStorage.getItem('userId')
    return(
        <header className="dashBoard-header">
            <nav>
                <div>Wedding Planner Dahboard</div>
                <Link className="add-link" to={`/dashboard/${id}/add`}>Add Event</Link>
                <div>Total Events Posted: {props.count}</div>
            </nav>
        </header>
    )
}

export default DashBoardHeader;