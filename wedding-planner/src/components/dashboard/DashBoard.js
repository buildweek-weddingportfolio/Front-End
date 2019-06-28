import React from 'react';
import {connect} from 'react-redux';
import { Route } from "react-router-dom";
import {getPlanners, deleteEvent, putEvent} from '../../actions';
import DashBoardBody from './DashBoardBody';
import DashBoardFooter from './DashBoardFooter';
import './dashboard.scss';


class DashBoard extends React.Component{


    componentDidMount(){
        const id = localStorage.getItem("userId");
        const url = this.props.match.url;  //  "/dashboard/:id/eventskefosijef
        const check = url.replace("/dashboard/", "");
        if (check !== id) {
            this.props.history.push(`/dashboard/${id}`);
        }
            this.props.getPlanners();
    }



    render(){

        const id = localStorage.getItem("userId");
             const events = this.props.planners.filter(event => `${event.user_id}` === id)
             return(
                 <div className="dashBoard-container">
                     <Route path="/dashboard/:id" render={props => <DashBoardBody events={events}
                     deleteEvent={this.props.deleteEvent}
                     update={this.props.putEvent}
                     props={props}
                     />} />
                     <div style={{height: "30px"}} />
                 </div>
             )
         

     }
}

const mapStateToProps = ({planners}) => ({
    planners
})

export default connect(mapStateToProps, {getPlanners,deleteEvent,putEvent})(DashBoard);