import { Menu, UserMenu as RAUserMenu, Logout } from "react-admin";
import KeyIcon from "@mui/icons-material/Key";
import LockIcon from "@mui/icons-material/Lock";
import { LABELS } from "@/constants";

const UserMenu = () => (
  <RAUserMenu>
    <Menu.Item
      to="/change-password"
      primaryText={LABELS.MENU_CHANGE_PASSWORD}
      leftIcon={<KeyIcon />}
    />
    <Logout />
  </RAUserMenu>
);

export default UserMenu;
