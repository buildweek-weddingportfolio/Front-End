import React from 'react';

import PlannerCard from './PlannerCard';
import SearchBar from "../searchBar/SearchBar";

import {connect} from 'react-redux';
import{ getPlanners, editSearch } from '../../actions';




class PlannersEvents extends React.Component{

    componentDidMount(){
        this.props.getPlanners();
    }

    render(){

        // Filtering logic
        const theme      = this.props.searchObj.theme;
        const coupleName = this.props.searchObj.coupleName;
        const location   = this.props.searchObj.location;
        const planners = this.props.planners.filter(plannerEach => {
            return plannerEach.couple_name.includes(coupleName) &&
                   plannerEach.wedding_location.includes(location) &&
                   plannerEach.wedding_theme.includes(theme)
        })

        if (this.props.error) {
            return <h1>{this.props.error}</h1>
        }

        return(
            <>
            <SearchBar />
            {planners.map(planner => (
                <div key={planner.id}>
                    <PlannerCard  planner={planner}/>
                </div>
            ))}

            </>
        )
    }
}

const mapStateToProps = ({planners, searchObj, error}) =>({
    planners,
    searchObj,
    error
})

export default connect(mapStateToProps, { getPlanners, editSearch })(PlannersEvents);