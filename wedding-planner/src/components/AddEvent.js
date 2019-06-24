import React from 'react';
import {postEvent} from '../actions'
import { connect } from 'tls';





 class AddEvent extends React.Component{
     state={
         couple_name:'',
         wedding_theme:'',
         wedding_date:'',
         wedding_location:''
     }


     addPost = (e) =>{
         e.preventDefault(e)
         const newItem ={
             couple_name: this.state.name
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
                    value={this.state.name}
                    onChange={this.changeHandler}
                    name="couple_name"
                    plaaceHolder="Couples Names"
                 />
             </form>
         )
        }


}

const mapStateToProps = ({state}) =>({
    state
})

export default connect(mapStateToProps, {postEvent})(AddEvent);