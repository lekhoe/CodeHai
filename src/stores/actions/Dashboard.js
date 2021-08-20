import { Constants } from "../Constants";

const DashboardActions = {
    toggleUserMenu: () => {
        return {
            type: Constants.DashboardType.TOGGLE_USER_MENU,
        }
    }
}

export default DashboardActions;