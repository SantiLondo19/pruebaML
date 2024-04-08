export const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='border-4 border-gray-200 rounded-full h-12 w-12 border-t-[#3498db] animate-spin'></div>
      <p className='mt-4 text-gray-600 text-lg'>Cargando...</p>
    </div>
  );
};

