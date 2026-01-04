const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex items-center space-x-2  text-orange-600 text-[15px]">
        <p>404</p>
        <div className="w-px h-3.5 bg-orange-600 rounded-2xl"></div>
        <p>Page not found</p>
      </div>
    </div>
  );
};

export default NotFound;
