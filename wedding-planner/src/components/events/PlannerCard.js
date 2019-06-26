import React from 'react';


const PlannerCard = (props) =>{
    return(
        <div className="planner-card">
            <h2>{props.planner.couple_name}</h2>

            <img src={props.planner.item_photo} alt={props.planner.couple_name}/>

            <p><span>Theme: </span>{props.planner.wedding_theme}</p>
            <p><span>Date: </span>{props.planner.wedding_date}</p>

            <p><span>Location: </span>{props.planner.wedding_location}</p>
            <p><span>Photographer: </span>{props.planner.wedding_photographer}</p>
        </div>
    )
}


export default PlannerCard