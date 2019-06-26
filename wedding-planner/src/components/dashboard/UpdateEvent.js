import React from 'react';
import {connect} from 'react-redux';
import {getPlanners, putEvent} from '../../actions'


class UpdateEvent extends React.Component{
    // need the ability to add an image

    state = {
        couple_name:'',
        item_photo:null,
        wedding_date:'',
        wedding_location:'',
        wedding_photographer:'',
        wedding_theme:''
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }

    update = (e) =>{
        e.preventDefault();
        const id = this.props.props.match.params.eventId;
        const event = {
            id:id, 
            couple_name:this.state.couple_name,
            item_photo:null,
            wedding_date:this.state.wedding_date,
            wedding_location:this.state.location,
            wedding_photographer:this.state.photographer,
            wedding_theme:this.state.wedding_theme
        }

        if(this.state.couple_name.trim() !== ''){
            this.props.putEvent(event).then(res =>{
                if(res)
                this.props.history.push(`/dashboard/${id}`)
            });

        }
    }

    render(){
        const url = this.props.props.match.params.eventId;
        const target = this.props.planners.find(event => `${event.id}` === url)

        if(!target){
            return <h2>No target</h2>
        }
        
        return(

            <form onClick={this.update}>
                <h2>{target.id}</h2>
                <input 
                    type="text"
                    name="couple_name"
                    placeholder={target.couple_name}
                    value={this.state.couple_name}
                    onChange={this.changeHandler}
                />

                <button>Update</button>
            </form>
        )
    }
           
}


const mapStateToProps = ({planners}) => ({planners})

export default connect(mapStateToProps, {getPlanners, putEvent})(UpdateEvent);