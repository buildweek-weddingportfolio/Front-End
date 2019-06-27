import React from 'react';
import {postEvent} from '../../actions'
import { connect } from 'react-redux';

const images = 
    [
        {"name":'flowers', "url":"data:image/jpeg;base64,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"},
        {"name":'rings', "url":"https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},
        {"name":'hands', "url":"https://www.culturalindia.net/iliimages/Hindu%20Wedding.jpg"},
        {"name":'celebration', "url":"https://303magazine.com/wp-content/uploads/2019/03/wedding-celebration.jpg"},
        {"name":'yacht', "url":"data:image/jpeg;base64,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"},
        {"name":'cake', "url":"https://blog.etsy.com/en/files/2022/04/Cake-Topper-Header-1-1200x900.jpg"},
        {"name":'names', "url":"https://www.telegraph.co.uk/content/dam/weddings/2018/05/22/TELEMMGLPICT000164315071-xlarge_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg"}
    ]



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
            wedding_location:'',
            item_photo:''
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
            item_photo:this.state.item_photo,
            user_id:this.id
        }



        // //call post from action pass in event, upon success redirect to dashboard
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

        console.log(e.target.value)
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

                        <div className="add-input-container">
                            <label>Wedding Photo:</label>
                            <select onChange={this.changeHandler} name="item_photo">
                            {images.map(image =>(
                                <option value={image.url}>{image.name}</option>
                            ))}
                            </select>
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