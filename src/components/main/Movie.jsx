import { Link } from 'react-router-dom';

function Movie({ movie }) {
  const { Title: title, Type: type, Poster: poster, imdbID } = movie;
  return (
    <Link to={`/MovieDetails?id=${imdbID}`} className='flex justify-center'>
      <div className="w-full rounded-lg overflow-hidden transition-all relative flex justify-center group cursor-pointer max-vxs:w-10/12">
        <img
          src={poster}
          alt={title.slice(0, 18) + '...'}
          className="w-full transition-all group-hover:grayscale h-[448.5px] max-500:h-[350px] max-xs:h-[270px] max-vxs:h-[380px] group-hover:scale-105"
        />
        <i
          className={`bi bi-play-btn-fill transition-all invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:block absolute inset-y-1/3 text-4xl ${
            poster !== 'N/A' ? 'text-white' : 'text-black'
          }`}></i>

        <div className="absolute bottom-6 transition-all text-white z-50 font-sans capitalize text-center leading-8 px-5">
          <span
            className={`text-2xl font-bold max-sm:text-xl max-xxs:text-lg max-vxs:text-2xl line-clamp-2 ${
              poster !== 'N/A' ? 'text-white' : 'text-black'
            }`}>
            {title}
          </span>
          <div className="flex justify-center gap-x-2 w-full px-5 max-xxs:text-sm max-vxs:text-base">
            <span>Type:</span>
            <span>{type}</span>
            <span>⭐</span>
          </div>
        </div>
        <div className="w-full h-1/3 absolute bottom-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
      </div>
    </Link>
  );
}

export default Movie;
