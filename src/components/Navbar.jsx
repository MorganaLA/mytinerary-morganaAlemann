import { useSelector, useDispatch } from 'react-redux';
import { user_token } from '../store/actions/userActions';
import Title from './Title';
import Button from './Button';
import MenuH from './MenuH';
import Menu from './Menu';

function Navbar() {
  const user = useSelector((store) => store.userReducer.user);
  const dispatch = useDispatch();

  const ImgLogin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );

  const ImgLogout = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
  </svg>
  );

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    dispatch(user_token(null));
    
    window.location.href = "/";
  };

  return (
    <header className="navbar pt-1 pb-1 w-full font-custom flex justify-between items-center text-base font-semibold">
      <Title />
      <nav className="flex justify-between items-center">
        <Menu />
        {user ? (
          <div className="flex items-center">
            <p className="mr-2">{user.name}</p>
            <Button
              onClick={handleLogout}
              img={<ImgLogout />}
              className="flex flex-row items-center ml-3 button h-10 group relative focus:outline-none focus:ring"
            />
          </div>
        ) : (
          <Button
            to="/log"
            img={<ImgLogin />}
            className="flex flex-row items-center ml-3 button h-10 group relative focus:outline-none focus:ring"
          />
        )}
        <MenuH />
      </nav>
    </header>
  );
}

export default Navbar;
