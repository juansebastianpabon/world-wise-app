import Sidebar from "../components/SideBar.jsx";
import styles from "./AppLayout.module.css";
import Map from "../components/Map.jsx";
import User from "../components/User.jsx";
import { useAuth } from "../contexts/FakeAuthContext.jsx";
function AppLayout() {
  const { isAuthenticated } = useAuth();
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      {isAuthenticated && <User />}
    </div>
  );
}

export default AppLayout;
