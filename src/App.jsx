import { useState } from "react";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";

const App = () => {
  const data = [
    {
      image:
        "https://th.bing.com/th/id/OIP.kOvRwDhEej8cv1Bd3KSepQAAAA?rs=1&pid=ImgDetMain",
      song: "Jee Le jara",
      singer: "Vishal dadlani",
      favorate: false,
    },
    {
      image: "https://i.ytimg.com/vi/xHLnZMjJ8bY/maxresdefault.jpg",
      song: "Mahi Ve",
      singer: "A.R. Rahaman",
      favorate: false,
    },
    {
      image: "https://i.ytimg.com/vi/WUbz_Wm9o-I/hqdefault.jpg",
      song: "Tere Liye",
      singer: "Atif Aslam",
      favorate: false,
    },
    {
      image: "https://i.ytimg.com/vi/Xol-jjXubrM/maxresdefault.jpg",
      song: "Jindagi Kuch to Bta",
      singer: "Pritam",
      favorate: false,
    },
    {
      image:
        "https://cf.mora.jp/contents/package/0000/00000196/0024/144/032/0024144032.200.jpg",
      song: "Ishq Bulava",
      singer: "Vishal shekhar",
      favorate: false,
    },
    {
      image:
        "https://lyricsguides.com/wp-content/uploads/2020/06/Phir-Se-Ud-Chala-Lyrics-RockstarMohit-Chauhan-300x231.jpg",
      song: "Fir Se udd chala",
      singer: "Mohit Chauhan",
      favorate: false,
    },
  ];
  const [val, setVal] = useState(data);

  const handleClick = (indexClick) => {
    return setVal((prev) => {
      return prev.map((item, index) => {
        if (indexClick == index) {
          return { ...item, favorate: !item.favorate };
        }
        return item;
      });
    });
  };

  return (
    <div className="w-full h-screen px-20 bg-zinc-200">
      <Navbar item={val} />
      <div className="flex gap-8 flex-wrap mt-5">
        {val.map((item, index) => {
          return (
            <Cart
              key={index}
              index={index}
              handleClick={handleClick}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
