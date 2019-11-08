import React, { Component } from 'react';
import Canvas  from "./Canvas.js";

 class Animation extends Component {

        state = { 
            angle: 0,
            reverse: 0,
            speed: 1,
            opacity: 1,
            r: 0,
            g: 25,
            b: 250,
            tunnelSize: 1,
            tunnelWidth: 2,
            tunnelHeight: 2,
            objectRadius: 1
        };
    // component lifecycle______________________________________________________________________________________________
    componentDidMount() {
        this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
      
    componentWillUnmount() {
        if(this.state.opacity < 0){
        cancelAnimationFrame(this.rAF);
        }
    }
      
    updateAnimationState = () => {
        
        if(!this.state.reverse){
            this.setState(
            ({
                angle: this.state.angle + this.state.speed 
               
            }))
        }else if(this.state.reverse){
            this.setState(
            ({
                angle: this.state.angle - this.state.speed
               
             }))
        }

        this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
    
    // component lifecycle______________________________________________________________________________________________

    clickHandler = () => {
        this.setState({
            reverse: !this.state.reverse,
            speed: this.state.speed + 5,
            opacity: this.state.opacity - .02,
            r: this.state.r + 20,
            g: this.state.g + 10,
            b: this.state.b - 10,
            tunnelSize: this.state.tunnelSize + .1,
            tunnelWidth: this.state.tunnelWidth + .0,
            tunnelHeight: this.state.tunnelHeight + .0,
        })
    }

    // getRandomColor = (op) => {
    //     let r = 255
    //     let g = 255
    //     let b = 255

    //     return `rgba(${r},${g},${b},${op})`
    // }
      
      render() {
          console.log(this.state.speed);
        return <Canvas clickHandler={this.clickHandler} tunnelWidth={this.state.tunnelWidth} tunnelHeight={this.state.tunnelHeight} tunnelSize={this.state.tunnelSize} r={this.state.r} g={this.state.g} b={this.state.b} opacity={this.state.opacity} angle={this.state.angle} />
      }
    }

export default Animation;
