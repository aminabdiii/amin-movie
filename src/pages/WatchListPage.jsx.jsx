import { useCallback, useEffect, useState } from 'react';
import Menu from '../components/header/Menu';
import Movie from '../components/main/Movie';
import PageLoading from '../components/features/PageLoading';
import MainTitle from '../components/main/MainTitle';
import EmptyWatchListSection from '../components/features/EmptyWatchListSection';

const API_KEY = 'da0d4e78';
const BASE_URL = `https://www.omdbapi.com?apikey=${API_KEY}`;

function WatchListPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [local] = useState(
    () => JSON.parse(localStorage.getItem('watched')) || []
  );
  const [movies, setMovies] = useState([]);

  const getWatchListByLocalStorage = useCallback(
    async function () {
      setIsLoading(true);
      const historyMovies = local.map(async (id) => {
        const res = await fetch(`${BASE_URL}&i=${id}`);
        const response = await res.json();
        return response;
      });
      const watchedList = await Promise.all(historyMovies);
      setMovies(watchedList);
      setIsLoading(false);
    },
    [local]
  );

  useEffect(
    function () {
      getWatchListByLocalStorage();
    },
    [getWatchListByLocalStorage]
  );

  if (isLoading) return <PageLoading />;

  return (
    <div className="max-w-7xl mx-auto space-y-2 pb-5">
      <Menu />
      <MainTitle className="sm:hidden block text-center font-bold text-violet-500 text-2xl mb-4">
        WatchList
      </MainTitle>
      <div className="grid justify-center max-vxs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 px-3">
        {movies.length > 0 &&
          movies?.map((movie, index) => {
            return <Movie movie={movie} key={`${movie.Title}${index}`} />;
          })}

        {!movies?.length > 0 && <EmptyWatchListSection />}
      </div>
    </div>
  );
}

export default WatchListPage;
