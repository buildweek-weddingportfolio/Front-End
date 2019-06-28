import React from 'react';
import {connect} from 'react-redux';
import {getPlanners, putEvent} from '../../actions';

const images = 
    [
        {"name":'rings', "url":"https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},
        {"name":'hands', "url":"https://www.culturalindia.net/iliimages/Hindu%20Wedding.jpg"},
        {"name":'celebration', "url":"https://303magazine.com/wp-content/uploads/2019/03/wedding-celebration.jpg"},
        {"name":'yacht', "url":"data:image/jpeg;base64,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"},
        {"name":'cake', "url":"https://blog.etsy.com/en/files/2022/04/Cake-Topper-Header-1-1200x900.jpg"},
        {"name":'names', "url":"https://www.telegraph.co.uk/content/dam/weddings/2018/05/22/TELEMMGLPICT000164315071-xlarge_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg"}
    ]


class UpdateEvent extends React.Component{
    // need the ability to add an image

    constructor(props){
        super(props)

        this.url_userId = this.props.props.match.params.id
        this.id = localStorage.getItem('userId');
        this.eventId = this.props.props.match.params.eventId;
        this.target = this.props.planners.find(event => `${event.id}` === this.eventId)

        this.state = {
            couple_name: !this.target ? "" : this.target.couple_name,
            item_photo: this.target.item_photo ? this.target.item_photo : '',
            wedding_date: !this.target ? "" : this.target.wedding_date,
            wedding_location: !this.target ? "" : this.target.wedding_location,
            wedding_photographer: this.target ? this.target.wedding_photographer.trim() !== "" ? this.target.wedding_photographer : "TBA" : "TBA",
            wedding_theme: !this.target ? "" : this.target.wedding_theme
        }

    }


    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }

    update = (e) =>{
        e.preventDefault();
        const photographerCheck = this.state.wedding_photographer.trim()
        const photographer = photographerCheck === "" ? "TBA" : photographerCheck;
        console.log(photographerCheck);
        const event = {
            id:this.eventId, 
            couple_name:this.state.couple_name.trim(),
            item_photo:this.state.item_photo,
            wedding_date:this.state.wedding_date,
            wedding_location:this.state.wedding_location.trim(),
            wedding_photographer: photographer,
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

    dashboard = e => {
        e.preventDefault();
        this.props.props.history.push(`/dashboard/${this.id}`)
    }

    render(){

        if(!this.target){
            return <h2>No target</h2>
        }
        
        return(
            <div className="add-form-container">
                <h2>Update event</h2>
                <form onSubmit={this.update}>
                    <label>Couples Name:</label>
                        <input 
                        type="text"
                        value={this.state.couple_name}
                        onChange={this.changeHandler}
                        name="couple_name"
                        placeholder="Couple's Name"
                        required
                        />
                    <label> Theme: </label>
                        <input 
                        type="text"
                        value={this.state.wedding_theme}
                        onChange={this.changeHandler}
                        name="wedding_theme"
                        placeholder="Wedding Theme"
                        />
                    
                    <label>Wedding Date:</label>
                        <input 
                        type="date"
                        value={this.state.wedding_date}
                        onChange={this.changeHandler}
                        name="wedding_date"
                        placeholder="Wedding Date"
                        />

                        <label>Wedding Location:</label>
                        <input 
                        type="text"
                        value={this.state.wedding_location}
                        onChange={this.changeHandler}
                        name="wedding_location"
                        placeholder="Wedding Location"
                        />

                    {/* <div className="photo-select">
                        <label>Wedding Photo:</label>
                        <select onChange={this.changeHandler} name="item_photo">
                        {images.map(image =>(
                            <option value={image.url}>{image.name}</option>
                        ))}
                        </select>
                    </div> */}

                    <div className="form-buttons">
                        <button type="button" onClick={this.dashboard}>Cancel</button>
                        <button type="submit">Update Post</button>
                    </div>
                </form>
            </div>

        )
    }
           
}


const mapStateToProps = ({planners}) => ({planners})

export default connect(mapStateToProps, {getPlanners, putEvent})(UpdateEvent);