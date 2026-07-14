import { HEADER_MENU_ITEMS } from "@/widgets/header/config/headerMenuItems.ts";

import { Logo } from "@/shared/assets";
import { LogoText } from "@/shared/assets";
import Button from "@/shared/ui/button/Button.tsx";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logoAndMenu}>
          <div className={styles.logoContainer}>
            <Logo />
            <LogoText />
          </div>
          <nav>
            <ul className={styles.navList}>
              {HEADER_MENU_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.authButtons}>
          <Button className={styles.logInButton}>Вход</Button>
          <Button className={styles.signUpButton}>Регистрация</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
