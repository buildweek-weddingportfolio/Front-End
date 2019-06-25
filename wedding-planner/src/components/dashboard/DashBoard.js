import React from 'react';
import {connect} from 'react-redux';
import {getPlanners} from '../../actions';
import DashBoardHeader from './DashBoardHeader';
import DashBoardBody from './DashBoardBody';
import DashBoardFooter from './DashBoardFooter';

 class DashBoard extends React.Component{

    componentDidMount(){
        this.props.getPlanners();
    }


     render(){
         const id = this.props.match.params.id;
         const planner = this.props.planners.find(planner => `${planner.user_id}` === id)
         const events = this.props.planners.filter(event => event.user_id === id)

         return(
             <div>
                 <DashBoardHeader events={events} planner={planner} />
                 <DashBoardBody events={events}/>
                 <DashBoardFooter />
             </div>
         )
     }
}

const mapStateToProps = ({planners}) => ({
    planners
})

export default connect(mapStateToProps, {getPlanners})(DashBoard);