import React from 'react';

const Menu = ({ change }) => {
  return (
    <div>
      <nav className="menu">
        <div>
          <a onClick={(event) => change(event, 'map')}>Карта</a>
        </div>
        <div>
          <a onClick={(event) => change(event, 'profile')}>Профиль</a>
        </div>
        <div>
          <a onClick={(event) => change(event, 'login')}>Логин</a>
        </div>
      </nav>
    </div>
  );
}

export default Menu;