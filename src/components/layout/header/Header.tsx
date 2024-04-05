import { Button } from "../../button/Button"
import email from "./../../../assets/icons/email.svg"
import phone from "./../../../assets/icons/phone.svg"
import menu from "./../../../assets/icons/menu.svg"


import s from "./header.module.scss"


export const Header = () => {
  return (
    <header>
      <div className="container">
      <div className={s.header}>
        <img src={menu} alt="menu" className={s.menu}/>
        <Button className={s.button}>Lorem</Button>
        <div className={s.home}>Home</div>
        <nav className={s.navigate}>
          <ul>
            <li className={s.navigateItem}>
              <img src={email} alt="email" />
            </li>
            <li className={s.navigateItem}>
              <img src={phone} alt="phone" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </header>
    
  )
}
