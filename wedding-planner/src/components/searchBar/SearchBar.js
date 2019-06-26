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
                <form>
                    <input 
                        type="text"
                        placeholder="coupleName"
                        name="coupleName"
                        value={this.state.coupleName}
                        onChange={this.handleChanges}
                        required
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