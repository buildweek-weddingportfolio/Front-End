import React from 'react';
import {connect} from 'react-redux';
import {getPlanners, deleteEvent, putEvent} from '../../actions';
import DashBoardHeader from './DashBoardHeader';
import DashBoardBody from './DashBoardBody';
import DashBoardFooter from './DashBoardFooter';


 class DashBoard extends React.Component{

    componentDidMount(){
        this.props.getPlanners();
    }




     render(){
      

         const id = this.props.match.params.id;
         const events = this.props.planners.filter(event => `${event.user_id}` === id)


         return(
             <div>
                 <DashBoardHeader events={events}/>
                 <DashBoardBody events={events} 
                 deleteEvent={this.props.deleteEvent}
                 update={this.props.putEvent}
                 />
                 <DashBoardFooter />
             </div>
         )
     }
}

const mapStateToProps = ({planners}) => ({
    planners
})

export default connect(mapStateToProps, {getPlanners,deleteEvent,putEvent})(DashBoard);