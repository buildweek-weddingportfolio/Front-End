import React from "react";

export default class SearchBar extends React.Component {
    state = {
        coupleName: "",
        location: "",
        theme: "",
    }

    render() {
        return (
            <div className="search-bar">
                <h2>Search</h2>
                <form onSubmit={this.search}>
                    <p>Search By:</p>
                    <label for="coupleName">Couple's Name</label>
                    <input 
                        type="text"
                        id="coupleName"
                        name="coupleName"
                        value={this.state.coupleName}
                        onChange={this.handleChanges}
                    />
                    <label for="location">Location</label>
                    <input 
                        type="text"
                        id="location"
                        name="location"
                        value={this.state.location}
                        onChange={this.handleChanges}
                    />
                    <label for="theme">Wedding Theme</label>
                    <input 
                        type="text"
                        id="theme"
                        name="theme"
                        value={this.state.theme}
                        onChange={this.handleChanges}
                    />
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

}