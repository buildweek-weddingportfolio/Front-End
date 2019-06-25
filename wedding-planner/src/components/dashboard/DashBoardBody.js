import React from 'react';
import AddEvent from '../AddEvent';



const DashBoardBody = (props) =>{
    return(
        <div>
            <AddEvent />
            {props.events.map(event =>(
                <>
                    <div>{event.couple_name}</div>

                    <div><img src={event.item_photo} alt={event.couple_name}/></div>
        
                    <div>{event.wedding_theme}</div>
                    <div>{event.wedding_date}</div>
        
                    <div>{event.wedding_location}</div>
                    <div>{event.wedding_photographer}</div>
                    <div>
                        <div>trash</div>
                        <div>edit</div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default DashBoardBody;