import React from 'react';
import {connect} from 'react-redux';
import {getPlanners, putEvent} from '../../actions'


class UpdateEvent extends React.Component{
    // need the ability to add an image

    constructor(props){
        super(props)

        this.url_userId = this.props.props.match.params.id
        this.id = localStorage.getItem('userId');
        this.eventId = this.props.props.match.params.eventId;

        this.state = {
            couple_name:'',
            item_photo:null,
            wedding_date:'',
            wedding_location:'',
            wedding_photographer:'',
            wedding_theme:''
        }

        const target = this.props.planners.find(event => `${event.id}` === this.eventId)
    }


    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }

    update = (e) =>{
        e.preventDefault();
        const event = {
            id:this.eventId, 
            couple_name:this.state.couple_name,
            item_photo:null,
            wedding_date:this.state.wedding_date,
            wedding_location:this.state.location,
            wedding_photographer:this.state.photographer,
            wedding_theme:this.state.wedding_theme,
            user_id: this.id
        }

        if(this.state.couple_name.trim() !== ''){
            this.props.putEvent(event).then(res =>{
                if(res){
                    this.props.getPlanners().then(res =>{
                        if(res){

                            this.props.props.history.push(`/dashboard/${this.id}`)
                        }
                    })
                }
            });

        }
    }

    render(){
        const target = this.props.planners.find(event => `${event.id}` === this.eventId)

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