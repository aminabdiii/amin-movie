import HeroSection from './HeroSection';
import Menu from './Menu';
import style from './Header.module.css';

function Header() {
  return (
    <header className={`${style.background} max-lg:min-h-full max-lg:pb-5`}>
      <Menu />
      <HeroSection />
    </header>
  );
}

export default Header;
