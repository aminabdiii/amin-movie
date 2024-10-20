import { NavLink } from 'react-router-dom';
import Burgor from './Burgor';
import Logo from './Logo';
import MenuItems from './MenuItems';
import VerticalNavItem from './VerticalNavItem';
import { useState } from 'react';

const menuList = [
  {
    title: 'watchlist',
    callBack: undefined,
  },
];
const menuListIcons = [
  'bi bi-info-circle-fill',
  'bi bi-telephone-fill',
  'bi bi-info-square-fill',
];

function Menu() {
  const [isOpenVerticalMenu, setIsOpenVerticalMenu] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto flex justify-between items-center py-5 px-3 relative">
      <Logo />
      <Burgor onClick={() => setIsOpenVerticalMenu(true)} />
      <ul className="hidden sm:flex sm:items-center sm:gap-x-5 text-base">
        {menuList.map((item, index) => {
          return <MenuItems key={index} item={item} />;
        })}
        <a
          href="https://t.me/AminAP9"
          className="text-base bg-[#da47c2c2] text-white rounded-3xl p-2">
          @AminAP9
        </a>
      </ul>

      <ul
        className={`transition-all flex flex-col items-center justify-center w-10/12 fixed bg-violet-500  text-white z-[99] font-bold rounded-xl overflow-hidden text-xl right-0 ${
          isOpenVerticalMenu
            ? 'translate-x-0 top-1/4 left-[9%]'
            : 'translate-x-[100%] top-1/4'
        }`}>
        <li className="w-full">
          <NavLink
            to="/home"
            className="border-b py-5 flex gap-x-4 w-full justify-center">
            <i className="bi bi-house-fill"></i>
            Home
          </NavLink>
        </li>

        {menuList.map((item, index) => {
          return (
            <VerticalNavItem
              key={item.title}
              item={item}
              menuListIcons={menuListIcons[index]}
            />
          );
        })}
        <li className="w-full">
          <a
            href="https://t.me/AminAP9"
            className="py-5 flex gap-x-4 justify-center">
            <i className="bi bi-telegram"></i>
            AminAP9
          </a>
        </li>
      </ul>

      <div
        onClick={() => setIsOpenVerticalMenu(false)}
        className={`transition-all w-full h-full bg-black/50 fixed top-0 left-0 z-40 ${
          isOpenVerticalMenu ? 'visible opacity-100' : 'invisible opacity-0'
        }`}></div>
    </nav>
  );
}

export default Menu;
