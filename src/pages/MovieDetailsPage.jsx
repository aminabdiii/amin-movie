/* eslint-disable react-hooks/rules-of-hooks */
import { Navigate, useSearchParams } from 'react-router-dom';
import Menu from '../components/header/Menu';
import { useEffect, useState } from 'react';
import MoviePicture from '../components/MovieDetailsComponents/MoviePicture';
import PageLoading from '../components/features/PageLoading';

const API_KEY = 'da0d4e78';
const BASE_URL = `https://www.omdbapi.com?apikey=${API_KEY}`;

const localItem = JSON.parse(localStorage.getItem('watched')) || [];
function MovieDetailsPage() {
  const [searchParams] = useSearchParams();
  const [
    {
      Poster: poster,
      Title,
      Genre,
      Runtime,
      Country,
      imdbRating,
      Language,
      Released,
      Plot,
      Actors,
      Type,
    },
    setMovieDetails,
  ] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isBeforeWatch, setIsBeforeWatch] = useState(false);

  if (!searchParams.get('id')) return <Navigate to="/home" />;

  useEffect(() => {
    async function getDetailsMovie() {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}&i=${searchParams.get('id')}`);
      if (!res.ok) return;
      const data = await res.json();
      setMovieDetails(data);
      setIsLoading(false);
    }
    getDetailsMovie();
  }, [searchParams]);

  function handleAddWatched() {
    if (localItem.some((id) => id === searchParams.get('id'))) return;

    localStorage.setItem(
      'watched',
      JSON.stringify([...localItem, searchParams.get('id')])
    );
  }

  useEffect(
    function () {
      if (localItem.some((id) => id === searchParams.get('id')))
        setIsBeforeWatch(true);
    },
    [searchParams]
  );

  if (isLoading) return <PageLoading />;

  return (
    <div className="min-h-screen" id="movieDetailsContaier">
      <Menu />
      <main className="mt-10 max-w-5xl mx-auto flex flex-col gap-7 items-center justify-center md:flex-row px-1 vxs:px-3 sm:px-2 md:justify-between">
        <MoviePicture poster={poster} isBeforeWatch={isBeforeWatch} />

        <div className="flex flex-col gap-y-8 items-center justify-start sm:w-[80%] h-[600px] md:w-[57%] md:justify-between">
          <section className="md:h-1/2 font-sans w-full capitalize max-sm:w-11/12 text-center md:text-start flex flex-col md:justify-between gap-y-2 border bg-white/25 p-2 sm:p-5 shadow-md shadow-violet-500 rounded-lg">
            <div className="text-lg 500:text-xl 550:text-2xl md:text-2xl font-medium">
              <span className="italic font-bold">{Title}</span>
            </div>

            <div className="text-base 500:text-lg md:text-lg font-medium space-x-2">
              <span className="italic font-bold">{Genre}</span>
            </div>
            <div className="text-base 500:text-lg md:text-lg font-medium">
              <span>Runtime:</span>
              <span> {Runtime}</span>
            </div>
            <div className="text-base 500:text-lg md:text-lg font-medium">
              <span>country:</span>
              <span className="text-indigo-700 font-bold italic">
                {' '}
                {Country}
              </span>
            </div>
            <div className="text-base 500:text-lg md:text-lg font-medium">
              <span className="">IMDb Rating </span>
              <span className="font-bold text-blue-500">{imdbRating}⭐</span>
            </div>
            <div className="text-base 500:text-lg md:text-lg font-medium">
              <span>Languages: </span>
              <span className="font-bold italic">{Language}</span>
            </div>
          </section>
          <section className="md:h-1/2 font-sans w-full capitalize max-sm:w-11/12 text-center sm:text-start flex flex-col md:justify-between gap-y-2 border bg-white/25 p-2 sm:p-5 shadow-md shadow-violet-500 rounded-lg">
            <div className="text-base 500:text-lg md:text-lg font-medium">
              <span>Type: </span>
              <span className="font-bold italic">{Type} </span>
            </div>
            <div className="text-base 500:text-lg md:text-lg font-medium">
              <span>Released: </span>
              <span className="font-bold italic">{Released} 📅 </span>
            </div>
            <div className="text-base 500:text-lg md:text-lg font-medium">
              <span className="text-sm sm:text-base line-clamp-3 text-[#111827]">
                <strong>plot: </strong>
                {Plot}
              </span>
            </div>
            <div className="text-base font-medium">
              <span>Actors: </span>
              <span className="font-bold italic text-sm">{Actors}</span>
            </div>

            <div className="flex items-center justify-center w-full">
              <a
                onClick={handleAddWatched}
                href={`https://www.imdb.com/title/${searchParams.get('id')}`}
                className="max-w-[250px] w-full transition-all text-center bg-violet-500 py-2 !text-base xs:!text-lg rounded-xl text-white font-bold hover:bg-violet-500/90 mt-1">
                Watch the {Type}!
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default MovieDetailsPage;
