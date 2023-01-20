import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import HamburgerMenu from "./Hamburger-menu";

export type HamburgerProps = {
  menuOpen: boolean;
  setMenuOpen: Function;
};

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.container}>
      <span>Logo placeholder</span>
      <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen ? (
        <ul>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default MobileNavbar;
