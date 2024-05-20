/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Navbar = ({ item }) => {
  return (
    <div className="w-full py-3 flex justify-between items-center">
      <h3 className="text-orange-500 font-bold text-xl">Orange</h3>

      <div className="flex py-2 px-4 rounded-lg bg-orange-600 text-white text-sm">
        <h3>Favorates</h3>
        <h4 className="bg-orange-700 px-2 ml-1 rounded-full">
          {item.filter((elem) => elem.favorate).length}
        </h4>
      </div>
    </div>
  );
};

export default Navbar;
