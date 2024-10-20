function NotFoundBySearch({ className, children }) {
  return (
    <div
      className={`flex gap-x-5 my-4 col-span-12 p-2 font-sans text-white font-medium bg-red-500/80 rounded-lg  capitalize text-center text-sm sm:text-base md:text-lg lg:text-2xl lg:p-4 ${className}`}>
      <i className="bi bi-exclamation-circle-fill"></i>
      {children}
    </div>
  );
}

export default NotFoundBySearch;
