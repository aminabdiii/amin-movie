function MoviePicture({ poster, isBeforeWatch }) {
  return (
    <div className="flex transition-all max-xs:w-11/12 xs:h-[600px] xs:w-[400px] overflow-hidden border-2  rounded-lg border-gray-300 cursor-pointer relative group ">
      <img
        src={poster}
        alt=""
        className="transition-all duration-300 w-full h-full group-hover:scale-[1.02] group-hover:brightness-[1.02] group-hover:contrast-[1.05] select-none"
      />

      {isBeforeWatch && (
        <span className="absolute top-0 left-0 transition-all bg-violet-500 text-white/80 font-bold p-2 rounded-br-lg">
          Already watched
        </span>
      )}
    </div>
  );
}

export default MoviePicture;
