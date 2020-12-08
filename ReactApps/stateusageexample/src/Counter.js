import React from "react";

export default class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {currentValue: this.props.startValue}
    }
    
    //static defaultProps = {startValue: 0, incValue: 5}

    render(){
        const clickHandler = ()=>{
            this.setState({currentValue: this.state.currentValue + this.props.incValue});
        }
    return <button onClick={clickHandler}>{this.state.currentValue}</button>
    }
}