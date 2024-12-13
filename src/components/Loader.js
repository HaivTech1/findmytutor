const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 flex justify-center items-center z-50">
      <div className="loader border-t-4 border-b-4 border-orange-500 w-12 h-12 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
