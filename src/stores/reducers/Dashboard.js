import { Constants } from "../Constants";
const { DashboardType } = Constants;

var initialState = {
    showUserMenu: false
};

const Dashboard = (state = initialState, action) => {
    switch(action.type){
        case DashboardType.TOGGLE_USER_MENU:
            return {
                ...state,
                showUserMenu: !state.showUserMenu,
            };
        default:
            return state;
    }
}

export default Dashboard;