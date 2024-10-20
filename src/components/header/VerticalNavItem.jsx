import { NavLink } from 'react-router-dom';

function VerticalNavItem({ item, menuListIcons }) {
  return (
    <li key={`${item.title}`} className='w-full'>
      <NavLink to={`/${item.title}`} className="w-full border-b py-5 flex gap-x-4 justify-center">
        <i className={menuListIcons}></i>
        {item.title}
      </NavLink>
    </li>
  );
}

export default VerticalNavItem;
