import React from 'react';
import AddEvent from './AddEvent';
import {Link,Route} from 'react-router-dom';
import UpdateEvent from './UpdateEvent';
import DashBoardHeader from './DashBoardHeader';


const DashBoardBody = (props) =>{
const userId = localStorage.getItem('userId')
    const deleteEv = (e,id) =>{
        e.preventDefault();
        props.deleteEvent(id).then(res =>{
            if(res)
            props.props.history.push(`/dashboard/${userId}`)
        });
    }
    
    
    return(
        <div>
            <DashBoardHeader count={props.events.length} id={userId}/>
            <Route path="/dashboard/:id/update/:eventId" render={ props => <UpdateEvent props={props} /> }  />
            <Route path="/dashboard/:id/add" render={props => <AddEvent props={props} />} />
            <div className="event-card-container">
                {props.events.map((event) =>(
                    <div className="event-card" key={event.id}>
                        <h2>{event.couple_name}</h2>

                    <div><img src={event.item_photo} alt={event.couple_name} />
                    </div>
            
                        <p><span>Theme: </span>{event.wedding_theme}</p>
                        <p><span>Date: </span>{event.wedding_date}</p>
            
                        <p><span>Location: </span>{event.wedding_location}</p>
                        <p><span>Photographer: </span>{event.wedding_photographer}</p>
                        <div className="event-actions">
                            <button onClick={(e) => deleteEv(e,event.id)}>Delete</button>
                            <Link to={`/dashboard/${userId}/update/${event.id}`}>Update</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DashBoardBody;