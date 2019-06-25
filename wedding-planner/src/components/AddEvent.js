import React from 'react';
import {postEvent} from '../actions'
import { connect } from 'react-redux';





 class AddEvent extends React.Component{
     state={
         couple_name:'',
         wedding_theme:'',
         wedding_date:'',
         wedding_location:''
     }


     addPost = (e) =>{
         e.preventDefault(e)
         console.log(this.state.couple_name)
         const newItem ={
             couple_name: this.state.couple_name,
             wedding_theme: this.state.wedding_theme,
             wedding_date: this.state.wedding_date,
             wedding_location: this.state.wedding_location
         }

         this.props.postEvent(newItem)

    }

    changeHandler = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }


     render(){

         return(
             <form onSubmit={this.addPost}>
                 <input 
                    type="text"
                    value={this.state.couple_name}
                    onChange={this.changeHandler}
                    name="couple_name"
                    placeholder="Couples Names"
                    required
                 />
                 <input 
                    type="text"
                    value={this.state.wedding_theme}
                    onChange={this.changeHandler}
                    name="wedding_theme"
                    placeholder="Wedding Theme"
                 />
                 <input 
                    type="date"
                    value={this.state.wedding_date}
                    onChange={this.changeHandler}
                    name="wedding_date"
                    placeholder="Wedding Date"
                 />
                 <input 
                    type="text"
                    value={this.state.wedding_location}
                    onChange={this.changeHandler}
                    name="wedding_location"
                    placeholder="Wedding Location"
                 />
                 <button>Add Post</button>
             </form>
         )
        }


}

const mapStateToProps = ({state}) =>({
    state
})

export default connect(mapStateToProps, {postEvent})(AddEvent);