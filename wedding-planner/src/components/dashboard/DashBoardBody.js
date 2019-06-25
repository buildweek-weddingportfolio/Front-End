import React from 'react';
import AddEvent from '../AddEvent';
import {Link,Route} from 'react-router-dom';
import UpdateEvent from '../UpdateEvent';


const DashBoardBody = (props) =>{

    const deleteEv = (e,id) =>{
        e.preventDefault();
        props.deleteEvent(id);
    }
    
    return(
        <div>
            <Route path="/dashboard/:id/update/:eventId" render={ props => <UpdateEvent props={props} /> }  />
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
                        <div><button onClick={(e) => deleteEv(e,event.id)}>delete</button></div>
                        <Link to={`/dashboard/${event.user_id}/update/${event.id}`}>Update</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DashBoardBody;