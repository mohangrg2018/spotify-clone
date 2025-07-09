import { assets } from "../assets/frontend-assets/assets";

const Sidebar = () => {
  return (
    <section className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-8" src={assets.home_icon} alt="logo" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-8" src={assets.search_icon} alt="search icon" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="stack icon" />
            <p className="font-bold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="arrow icon" />
            <img className="w-5" src={assets.plus_icon} alt="plus icon" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-3">
          <h1>Create your first playlist</h1>
          <p className="font-light">It's easy, we'll help you</p>
          <button className="px-4 py-1.5 bg-white text-black rounded-full">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-3">
          <h1>Let's findsome podcasts to follow</h1>
          <p className="font-light">We'll keep you up to date</p>
          <button className="px-4 py-1.5 bg-white text-black rounded-full">
            Browse Podcasts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
