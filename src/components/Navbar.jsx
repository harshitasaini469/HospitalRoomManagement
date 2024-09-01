const Navbar = () => {
  
  return (
    <div className="">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" >
            Add Room
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black" href="room-booking">
            Book Room
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
