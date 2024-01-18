import { Outlet } from "react-router-dom";
import Header from "../components/molecules/Header";
import Footer from "../components/molecules/Footer";
import styles from "./styles.module.css";

export default function RootLayout() {
  return (
    <div className={styles.rootLayout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
