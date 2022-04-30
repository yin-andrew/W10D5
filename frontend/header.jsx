import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    //array of all tabs [1,2,3]
    //if the current index idx =1, display 1. hide 2 and 3
    
    

    render() {
        return (
            <ul>
                <li>{this.props.title}</li>
                <li>{this.props.content}</li>
            </ul>
        )
    }
}

export default Header;