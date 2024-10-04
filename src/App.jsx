import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <div className='card'>
        <header>
          <div className='navBar'>
            <nav>
              <NavLink to=''>Home</NavLink>
              <NavLink to='about'>About</NavLink>
              <NavLink to='contact'>Contact</NavLink>
            </nav>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
        <footer>ERI 2024</footer>
      </div>
    </>
  );
}

export default App;
