import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        props.array
    }

    

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