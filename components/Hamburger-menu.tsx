import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "../styles/Hamburger-menu.module.css";
import { HamburgerProps } from "./Mobile-Navbar";

const HamburgerMenu = ({ menuOpen, setMenuOpen }: HamburgerProps) => {
  return (
    <div className={styles.container} onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? (
        <IconContext.Provider value={{ size: "3rem" }}>
          <AiOutlineClose />
        </IconContext.Provider>
      ) : (
        <IconContext.Provider value={{ size: "3rem" }}>
          <GiHamburgerMenu />
        </IconContext.Provider>
      )}
    </div>
  );
};

export default HamburgerMenu;
