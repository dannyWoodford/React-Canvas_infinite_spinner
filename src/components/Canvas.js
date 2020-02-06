import React from 'react';


class Canvas extends React.Component {
  
    
    componentDidUpdate() {
        this.rectangle()
    }

    rectangle(){
        const {angle} = this.props;
        const {opacity} = this.props;
        const {r} = this.props;
        const {g} = this.props;
        const {b} = this.props;
        const {tunnelSize} = this.props;
        const {tunnelWidth} = this.props;
        const {tunnelHeight} = this.props;

        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        
        ctx.save();
        // ctx.filter = 'blur(40px)';
        ctx.beginPath();
        ctx.fillStyle = `rgba(${b}, ${b}, ${b}, .03)`;
        ctx.fillRect(0, 0, width, height);
        ctx.translate(width/tunnelWidth, height/tunnelHeight );
        ctx.rotate(angle * Math.PI / 180);
        ctx.fillStyle = `rgba(${r}, ${g}, ${255}, ${opacity})` ;
        ctx.fillRect(-width/12, -height/tunnelSize , width/1, height/6);
        ctx.restore(); 

        this.object()
    }

     object = () => {        
        const {angle} = this.props;
        const {opacity} = this.props;
        const {r} = this.props;
        const {g} = this.props;
        const {b} = this.props;
        const {tunnelSize} = this.props;
        const {tunnelWidth} = this.props;
        const {tunnelHeight} = this.props;

        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = `rgba(${b}, ${b}, ${b}, .03)`;
        ctx.fillRect(0, 0, width, height);
        ctx.translate(width/tunnelWidth, height/tunnelHeight );
        ctx.rotate(angle * Math.PI / 180);
        ctx.fillStyle = `rgba(${r -1700}, ${g - 800}, ${255}, ${opacity * -1})` ;
        ctx.fillRect(-width/12, -height/(tunnelSize * -1), width/1, height/6);
        ctx.restore(); 
    }
    
    render() {
      return <canvas onClick={this.props.clickHandler} width={window.innerWidth} height={window.innerHeight} ref="canvas"></canvas>;
    }
  }

export default Canvas;
