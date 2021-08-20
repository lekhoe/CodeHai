import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardActions from "../../stores/actions/Dashboard";
import Topbar from "./Topbar";
import Modal from '../Modal';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal : false,
    }
  }

  render() {
    let modalBody = <div>modal body</div>
    return (
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (this.props.Dashboard.showUserMenu) {
            this.props.toggleUserMenu();
          }
        }}
        className="wrapper dashboard"
      >
        <Topbar />
        <div className="main">
          <div className="sidebar">
            <button onClick={() => {
              this.setState({
                showModal: !this.state.showModal,
              })
              console.log(this.state.showModal);
            }}>show Modal</button>
          </div>
          <div className="content"></div>
        </div>
        <div className="footer"></div>
        <Modal
          show={this.state.showModal}
          title="my Modal test"
          content={modalBody}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Dashboard: state.Dashboard,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    toggleUserMenu: () => {
      dispatch(DashboardActions.toggleUserMenu());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);