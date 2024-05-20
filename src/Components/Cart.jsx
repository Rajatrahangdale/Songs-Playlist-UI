/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Cart = ({ index, handleClick, item }) => {
  const { image, song, singer, favorate } = item;
  return (
    <div className="w-60 p-4 bg-zinc-100 rounded-md flex gap-2 pb-10 relative">
      <div className="w-20 h-20 bg-orange-500 rounded-md overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="">
        <h1 className="text-xl leading-none font-bold py-2">{song}</h1>
        <h2 className="text-sm">{singer}</h2>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={`px-4 py-3 absolute ${
          favorate
            ? "bg-green-500 left-24 -bottom-4 "
            : "bg-orange-400 left-16 -bottom-4"
        }   text-white text-xs rounded-full`}
      >
        {favorate ? "Added" : "Add to Favorates"}
      </button>
    </div>
  );
};

export default Cart;
