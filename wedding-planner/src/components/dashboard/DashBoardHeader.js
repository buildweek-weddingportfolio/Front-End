import React from 'react';
import {Link} from 'react-router-dom';



const DashBoardHeader = (props) =>{
    const id = localStorage.getItem('userId')
    return(
        <header className="dashBoard-header">
            <nav>
                <div>Wedding Planner</div>
                <div>Events ({props.count})</div>
                <div ><Link className="add-link" to={`/dashboard/${id}/add`}>Add Event</Link></div>
            </nav>
        </header>
    )
}

export default DashBoardHeader;