import React, { Component } from "react";
import { connect } from 'react-redux';
import DashboardActions from "../../stores/actions/Dashboard";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.toggleUserMenu = this.toggleUserMenu.bind(this)
    
  }

  toggleUserMenu(e){
    e.preventDefault()
    e.stopPropagation()
    this.props.toggleUserMenu();
  }

  render() {
    let UserMenuClass = 'user-info ';
    UserMenuClass += this.props.Dashboard.showUserMenu ? 'show-menu' : '';

    return (
      <div className="topbar">
        <div className="container-fluid">
          <div className="d-flex justify-content-between">
            <div className="page-title">
              <p className="title">Dashboard</p>
            </div>
            <div className={UserMenuClass}>
              <div
                className="hero"
                onClick={this.toggleUserMenu}
              >
                <img src={"https://i.imgur.com/yZUiwsg.jpg"} alt="" />
                <span className="small-title">
                  HI: <strong>adnin</strong>
                </span>
              </div>
              <div
                className="user-menu"
                onClick={(e) => {
                    if (this.props.Dashboard.showUserMenu) {
                        e.preventDefault()
                        e.stopPropagation()
                    }
                }}
              >
                <div className="header">Nguyen Van Hai</div>
                <div className="content">
                  <li>
                    <span className="left-icon">
                      <i className="fa fa-user"></i>
                    </span>
                    <span className="text">Profile Manager</span>
                  </li>
                  <li>
                    <span className="left-icon">
                      <i className="fa fa-lock"></i>
                    </span>
                    <span className="text">Password</span>
                  </li>
                </div>
                <div className="footer">
                  <span className="text">Sign out</span>
                  <span className="right-icon">
                    <i className="fas fa-sign-out-alt"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      Dashboard: state.Dashboard,
    }
  }
  
  const mapDispatchToProps = (dispatch, props) => {
    return {
      toggleUserMenu: () => {
        dispatch(DashboardActions.toggleUserMenu());
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Topbar);