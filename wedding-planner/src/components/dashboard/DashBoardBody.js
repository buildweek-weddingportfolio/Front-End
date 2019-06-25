import React from 'react';
import AddEvent from '../AddEvent';



const DashBoardBody = (props) =>{

    const deleteEv = (e,id) =>{
        e.preventDefault();
        props.deleteEvent(id);
    }
    return(
        <div>
            <AddEvent />
            {props.events.map((event) =>(
                <div key={event.id}>
                    <div>{event.couple_name}</div>

                    <div><img src={event.item_photo} alt={event.couple_name}/></div>
        
                    <div>{event.wedding_theme}</div>
                    <div>{event.wedding_date}</div>
        
                    <div>{event.wedding_location}</div>
                    <div>{event.wedding_photographer}</div>
                    <div>
                        <div>trash</div>
                        <div><button onClick={(e) => deleteEv(e,event.id)}>delete</button></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DashBoardBody;