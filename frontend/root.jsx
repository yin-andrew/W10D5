import React from "react";
import Clock from './clock.jsx';
import Tabs from "./tabs.jsx";
const Root =(props) => {
    const array = [
        {title: "first", 
        content: "blablabla"},
        {title: "second", 
        content: "blebleble"},
        {title: "third", 
        content: "blobloblo"}
    ];
    return (
        <>
            <div><Clock/></div>
            <div><Tabs array={array}/></div>
        </>
    )
} 

export default Root;