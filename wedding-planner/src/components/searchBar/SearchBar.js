import React from "react";
import { editSearch } from "../../actions";
import { connect } from "react-redux";
import "./SearchBar.scss";

class SearchBar extends React.Component {
    state = {
        coupleName: "",
        location: "",
        theme: "",
    }

    render() {
        return (
            <div className="search-container">
                <h2>Search</h2>
                <form onSubmit={this.search}>
                    <p>Search By:</p>
                    <label htmlFor="coupleName">Couple's Name</label>
                    <input 
                        type="text"
                        id="coupleName"
                        name="coupleName"
                        value={this.state.coupleName}
                        onChange={this.handleChanges}
                    />
                    <label htmlFor="location">Location</label>
                    <input 
                        type="text"
                        id="location"
                        name="location"
                        value={this.state.location}
                        onChange={this.handleChanges}
                    />
                    <label htmlFor="theme">Wedding Theme</label>
                    <input 
                        type="text"
                        id="theme"
                        name="theme"
                        value={this.state.theme}
                        onChange={this.handleChanges}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    search = e => {
        e.preventDefault();
        this.props.editSearch(this.state)
    }

    componentWillUnmount() {
        this.props.editSearch({
            coupleName: "",
            location: "",
            theme: "",
        })
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect (mapStateToProps, { editSearch })(SearchBar);