import React from "react";
import Header from "./header";

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { idx: 0 };
    }

    onClick(num) {
        this.setState({ idx: num })
    }
    // changing the active tab to num onClick(idx =2).  
    render() {
        let {idx} = this.state;
        console.log(idx);
        let params = this.props.array[this.state.idx];
        return (
            <Header
                array={this.props.array}
                tab={idx}
                title={params.title}
                content={params.content}
                onClick={this.onClick.bind(this)}
            />
        )
    }
}

export default Tabs;