import React from "react";

class ImageComponent extends React.Component  {
    render() {
        return <img alt={this.props.alt} src={this.props.src} width={this.props.width}/>
    }
}

export default ImageComponent