import React from 'react';



const DashBoardHeader = (props) =>{
    return(
        <header>
            <nav>
                <div>Name</div>
                <div>Wedding Planner</div>
                <div># of events ({props.events.length})</div>
                <div>Logout</div>
            </nav>
        </header>
    )
}

export default DashBoardHeader;