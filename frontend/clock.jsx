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
    
    format() {
        let hours = this.state.time.getHours()
        let minutes = this.state.time.getMinutes()
        let seconds = this.state.time.getSeconds()

        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        return `${hours}:${minutes}:${seconds} PDT`;
    }


    render() {
        return (
        <>
            <h1 className="title">Clock</h1>        
            <div className="container">
                <div id ="label">
                    <h1>Time: </h1>
                    <h1>Date: </h1>
                </div>

                <div id="data">
                    <h1>{this.format()}</h1>
                    <h1>{this.state.time.toDateString()}</h1>
                </div>
            </div>
        </>
        )
        
    }
}

export default Clock;
