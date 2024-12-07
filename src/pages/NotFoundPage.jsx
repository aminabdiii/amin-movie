import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="w-full h-dvh gap-10 flex flex-col justify-center items-center bg-gray-950 text-gray-100/60 font-bold font-sans">
      <p className="text-6xl">404</p>
      <Link
        to="/"
        className="p-5 border-gray-100/60 border rounded-md hover:bg-gray-100/60 hover:text-gray-950 hover:border-gray-950 transition-all duration-300 text-xl">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
