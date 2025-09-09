import Sidebar from "../components/SideBar.jsx";
import styles from "./AppLayout.module.css";
import Map from "../components/Map.jsx";
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
