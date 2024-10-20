import { CircularProgress } from '@mui/material';

function PageLoading() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-white absolute top-0 left-0">
      <CircularProgress size={100} />
    </div>
  );
}

export default PageLoading;
