const Header = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        backgroundImage: "url(https://i.ibb.co/jJ6frbs/tech-image.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 md:text-6xl font-bold text-white">Hello there</h1>
          <p className="mb-5 text-2xl text-white">
            Welcome to <b>FineTech</b> , Your Ultimate Destination for Gadget
            and Technology Enthusiasts!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
