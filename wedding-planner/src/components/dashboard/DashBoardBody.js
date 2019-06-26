import React from 'react';
import AddEvent from './AddEvent';
import {Link,Route} from 'react-router-dom';
import UpdateEvent from './UpdateEvent';
import DashBoardHeader from './DashBoardHeader';


const DashBoardBody = (props) =>{

    const deleteEv = (e,id) =>{
        e.preventDefault();
        props.deleteEvent(id);
        const user = props.id
        props.props.history.push(`/dashboard/${user}`)
    }
    
    
    return(
        <div>
            <DashBoardHeader count={props.events.length} id={props.id}/>
            <Route path="/dashboard/:id/update/:eventId" render={ props => <UpdateEvent props={props} /> }  />
            <Route path="/dashboard/:id/add" render={props => <AddEvent props={props} />} />
            <div className="event-card-container">

                {props.events.map((event) =>(
                        <div className="event-card" key={event.id}>
                            <div>{event.couple_name}</div>

                            <div><img src={event.item_photo} alt={event.couple_name}/></div>
                
                            <div>{event.wedding_theme}</div>
                            <div>{event.wedding_date}</div>
                
                            <div>{event.wedding_location}</div>
                            <div>{event.wedding_photographer}</div>
                            <div>
                                <div><button onClick={(e) => deleteEv(e,event.id)}>delete</button></div>
                                <div><Link to={`/dashboard/${props.id}/update/${event.id}`}>Update</Link></div>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default DashBoardBody;