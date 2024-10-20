import { Link } from 'react-router-dom';

function Logo() {
  return (
    <h2 className="font-bold text-2xl text-black xs:text-3xl select-none" title='Amin Movie'>
      <Link to="/home">Aminovie</Link>
    </h2>
  );
}

export default Logo;
