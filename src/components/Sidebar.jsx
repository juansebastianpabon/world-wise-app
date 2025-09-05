import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
