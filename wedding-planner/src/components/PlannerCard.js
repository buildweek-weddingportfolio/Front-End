import React from 'react';


const PlannerCard = (props) =>{
    return(
        <>
            <div>{props.planner.couple_name}</div>

            <div><img src={props.planner.item_photo} alt={props.planner.couple_name}/></div>

            <div>{props.planner.wedding_theme}</div>
            <div>{props.planner.wedding_date}</div>

            <div>{props.planner.wedding_location}</div>
            <div>{props.planner.wedding_photographer}</div>
        </>
    )
}


export default PlannerCard