const CategoryButton = ({ text, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`w-auto text-[11px] md:text-xs rounded-2xl px-3.5 lg:px-4 py-1.75 lg:py-2 link hover:scale-95 hover:bg-red-600 ${
        isActive ? "red-bg" : "bg-white/10 border border-white/10"
      } smooth-animation`}
    >
      {text}
    </div>
  );
};

export default CategoryButton;
