import { NavLink } from 'react-router-dom';
import style from './MenuItem.module.css';

function MenuItems({ item }) {
  return (
    <li>
      <NavLink to={`/${item.title}`} className={style.item}>
        {item.title}
      </NavLink>
    </li>
  );
}

export default MenuItems;
