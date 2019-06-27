import React from 'react';
import {postEvent} from '../../actions'
import { connect } from 'react-redux';





class AddEvent extends React.Component{
    constructor(props){
        super(props)
        //get user id from URL
        this.url = this.props.props.match.params.id

        //check url id against localstorage id
        this.id = localStorage.getItem('userId')

        //create state
        this.state={
            couple_name:'',
            wedding_theme:'',
            wedding_date:'',
            wedding_location:''
        }
    }


    addPost = (e) =>{
        //stop refresh
        e.preventDefault(e)

        //new event object pass in state values
        const newItem ={
            couple_name: this.state.couple_name,
            wedding_theme: this.state.wedding_theme,
            wedding_date: this.state.wedding_date,
            wedding_location: this.state.wedding_location,
            //user_id:this.id
        }



        //call post from action pass in event, upon success redirect to dashboard
        this.props.postEvent(newItem).then(res => {
            if (res) {
               this.props.props.history.push(`/dashboard/${this.id}`)
            }
        })

    }

    changeHandler = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
            return(
                <div className="add-form-container">
                    <h2>Add an event</h2>
                    <form onSubmit={this.addPost}>
                        <div className="add-input-container">
                        <label>Couples Name:</label>
                            <input 
                            type="text"
                            value={this.state.couple_name}
                            onChange={this.changeHandler}
                            name="couple_name"
                            placeholder="Couples Names"
                            required
                            />
                        </div>
                        <div className="add-input-container">
                        <label> Theme: </label>
                            <input 
                            type="text"
                            value={this.state.wedding_theme}
                            onChange={this.changeHandler}
                            name="wedding_theme"
                            placeholder="Wedding Theme"
                            />
                        </div>
                        
                        <div className="add-input-container">
                        <label>Wedding Date:</label>
                            <input 
                            type="date"
                            value={this.state.wedding_date}
                            onChange={this.changeHandler}
                            name="wedding_date"
                            placeholder="Wedding Date"
                            />
                        </div>

                        <div className="add-input-container">
                            <label>Wedding Location:</label>
                            <input 
                            type="text"
                            value={this.state.wedding_location}
                            onChange={this.changeHandler}
                            name="wedding_location"
                            placeholder="Wedding Location"
                            />
                        </div>

                        <div className="submit">
                            <button>Add Post</button>
                        </div>

                    </form>
                </div>
            )
        

    }


}

const mapStateToProps = ({state}) =>({
    state
})

export default connect(mapStateToProps, {postEvent})(AddEvent);