import React, { Component, useState, useEffect } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.getModalClass = this.getModalClass.bind(this)
    this.handleToggle = this.handleToggle.bind(this)

    const [isShow, setIsShow] = useState(false);
  }

  getModalClass(){
      let modalClass = 'modal';
      if(this.props.show) {
        modalClass += ' show'
      }
      return modalClass;
  }

  handleToggle(e){
    e.preventDefault()
    this.setState({
        show: !this.state.show,
    })
  }
  render() {
    return (
      <div 
      onClick={this.handleToggle}
      className={this.getModalClass()}>
        <div
        onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
        }}
        className="main">
          <div className="header">
            <h3 className="title">
                {this.props.title}
            </h3>
            <button className="close-btn" onClick={this.handleToggle}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="content">
              {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}


export default Modal;