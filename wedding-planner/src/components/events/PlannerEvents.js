import React from 'react';

import PlannerCard from './PlannerCard';
import SearchBar from "../searchBar/SearchBar";

import {connect} from 'react-redux';
import{getPlanners} from '../../actions';




class PlannersEvents extends React.Component{

    componentDidMount(){
        this.props.getPlanners();
    }

    render(){
        if (this.props.error) {
            return <h1>{this.props.error}</h1>
        }

        return(
            <>

            {this.props.planners.map(planner => (
                <div key={planner.id}>
                    <PlannerCard  planner={planner}/>
                </div>
            ))}

            </>
        )
    }
}

const mapStateToProps = ({planners, error}) =>({
    planners,
    error
})

export default connect(mapStateToProps, {getPlanners})(PlannersEvents);