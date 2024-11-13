import { CircularProgress } from '@mui/material';

function PageLoading() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-white fixed top-0 left-0">
      <CircularProgress size={100} className="!z-[9999]" />
    </div>
  );
}

export default PageLoading;
