import React from 'react';
import '../hamburger_menu/style.css';
import { Link, useHistory } from 'react-router-dom';

function Hamburger() {
  let history = useHistory();

  const redirectOrRefresh = (page) => {
    if (window.location.pathname === page) {
      window.location.reload();
    } else {
      history.push(page);
    }
  };

  return (
    <div className='menu-wrap'>
      <input type='checkbox' className='toggler' />
      <div className='hamburger'>
        <div></div>
      </div>
      <div className='menu'>
        <div>
          <div>
            <ul>
              <li>
                <Link
                  onClick={() => {
                    redirectOrRefresh('/home');
                  }}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    redirectOrRefresh('/about');
                  }}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    redirectOrRefresh('/contact');
                  }}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
