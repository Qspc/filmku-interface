import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const page = location.pathname.split('/')[1];
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sticky top-0 z-30 px-12 shadow-xl bg-surface">
      <div className="relative flex flex-col px-2 py-3 mx-auto cursor-pointer max-w-7xl md:flex-row md:justify-between">
        {/* logo kiri */}
        <Link id="logo" className="flex items-center text-2xl font-bold text-primary" style={{ color: '#1677ff' }} to="/">
          FILMKU
        </Link>
        <div onClick={() => setToggle(!toggle)} className="absolute z-10 flex justify-center w-6 h-6 align-middle rounded-full md:hidden right-3">
          {toggle ? <ion-icon size="large" name="close-outline"></ion-icon> : <ion-icon size="large" name="menu-outline"></ion-icon>}
        </div>
        <ul className={`items-center justify-center md:justify-end  w-full  md:flex ${toggle ? 'block' : 'hidden'}`}>
          {page !== '' && (
            <li className="px-5 text-center">
              <NavLink className="block text-white hover:text-primary md:py-0 " to="/">
                Home
              </NavLink>
            </li>
          )}
          {page === '' ? (
            <>
              <li className="px-5 text-center">
                <a className="block mx-auto text-white hover:text-primary md:py-0 " href="#about">
                  Tentang
                </a>
              </li>
              <li className="px-5 text-center">
                <a className="block mx-auto text-white hover:text-primary md:py-0 " href="#team">
                  Kontak
                </a>
              </li>
            </>
          ) : (
            ''
          )}
          {toggle ? (
            <></>
          ) : (
            <li>
              <hr
                className="ml-5 mr-10 bg-white"
                style={{
                  borderLeft: '1px solid rgba(255,255,255,0.5)',
                  height: '40px',
                  width: '1px',
                }}
              />
            </li>
          )}
          <li className="text-center">
            <NavLink className="block mx-auto text-white hover:text-primary md:py-0 " to="/movies">
              Database
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
