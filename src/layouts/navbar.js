const Navbar = () => {
    return (
        <>
      <nav className="bg-gray-950 p-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-3xl font-bold">E-commerce Store</div>
          <div className="hidden md:flex space-x-4 text-lg">
            <a href="#home" className="text-white hover:bg-white hover:text-black p-2 rounded ">Home</a>
            <a href="#about" className="text-white hover:bg-white hover:text-black p-2 rounded">About</a>
            <a href="#products" className="text-white hover:bg-white hover:text-black p-2 rounded">Products</a>
            <a href="#contact" className="text-white hover:bg-white hover:text-black p-2 rounded">Contact</a>
          </div>
          <div className="text-lg bg-white text-black p-3 rounded font-bold">
            <button className="">Sign In
            </button>
          </div>
        </div>
      </nav>
          <img src="https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=612x612&w=0&k=20&c=ROAncmFL4lbSQdU4VOhyXu-43ngzfEqHE5ZZAw5FtYk=" className="w-full h-screen"/>
          </>
    );
  };
  
  export default Navbar;
  