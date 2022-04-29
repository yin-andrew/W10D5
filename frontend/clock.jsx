import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()};
    }

    tick() {
        this.setState({time: new Date()});
    }
    
    componentDidMount() {
        this.intervalId= setInterval(()=>{
            this.tick();
        }, 1000)
    }
    
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    
    render() {
        return (<h1>{this.state.time.toDateString()}</h1>)
        
    }

}

export default Clock;
