import { useEffect, useReducer, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useLocation, useSearchParams } from 'react-router-dom';
import MainTitle from './MainTitle';
import Movie from './Movie';
import SearchMovieElem from './SearchMovieElem';
import NotFoundBySearch from './NotFoundBySearch';
import StartSearchingSection from '../features/StartSearchingSection';

const API_KEY = 'da0d4e78';
const BASE_URL = `https://www.omdbapi.com?apikey=${API_KEY}`;

const initialState = {
  isLoading: false,
  movies: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'movies/loading':
      return { ...state, isLoading: true };

    case 'movies/MoviesFetched':
      return {
        ...state,
        isLoading: false,
        movies: action.payload.resultMovies,
      };
  }
}

function Main() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [{ isLoading, movies }, dispatch] = useReducer(reducer, initialState);
  const [search, setSearch] = useState('');
  const location = useLocation();
  const [isFailedSearch, setIsFailedSearch] = useState(false);

  async function handleGetPosts(event) {
    event.preventDefault();
    if (!search.length) return;
    setSearchParams({ query: search });
  }
  useEffect(() => {
    async function defaultFetch() {
      if (!searchParams.get('query')) return;
      dispatch({ type: 'movies/loading' });

      const res = await fetch(
        `${BASE_URL}&s=${searchParams.get('query')}&plot=full`
      );
      if (!res.ok) return;
      const response = await res.json();
      if (response.Response === 'False') setIsFailedSearch(true);

      dispatch({
        type: 'movies/MoviesFetched',
        payload: {
          resultMovies: response.Search,
        },
      });
    }
    defaultFetch();
  }, [searchParams]);

  useEffect(() => {
    setSearch('');
  }, [location.search]);

  return (
    <main
      className="max-w-7xl mx-auto mt-10 px-3 flex flex-col gap-y-5"
      id="Movies">
      <div className="flex max-sm:flex-col items-center justify-between max-lg:gap-y-5">
        <MainTitle className="text-3xl font-bold block">Movies</MainTitle>
        <form
          className="w-full flex justify-end items-center relative max-sm:justify-center"
          onSubmit={(event) => handleGetPosts(event)}>
          <SearchMovieElem
            search={search}
            setSearch={setSearch}
            placeholder={
              searchParams.get('query')
                ? `your search: "${searchParams.get('query')}"`
                : 'IMDb searching'
            }
          />
          <button
            className="bi bi-search cursor-pointer text-2xl max-xs:text-lg absolute inset-y-1/4 right-0 px-2 text-slate-500 max-sm:right-[10%]"
            onClick={(event) => handleGetPosts(event)}></button>
        </form>
      </div>

      {isLoading ? (
        <div className="flex justify-center h-[50vh] items-center">
          <CircularProgress size={50} />
        </div>
      ) : (
        <div className="grid max-vxs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {movies?.map((movie, index) => {
            return <Movie movie={movie} key={`${movie.Title}${index}`} />;
          })}

          {isFailedSearch && !movies?.length && (
            <NotFoundBySearch>Not found</NotFoundBySearch>
          )}

          {!movies?.length && !isFailedSearch && <StartSearchingSection />}
        </div>
      )}
    </main>
  );
}

export default Main;
