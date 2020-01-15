import React from 'react';
import cls from './Navbar.module.css';

const Navbar = () => {
  console.log(cls);
    return(
        <nav className={cls.nav}>
        <div className={`${cls.item} ${cls.active}`}>
          <a href='/profile'>Profile</a>
        </div>
        <div className={cls.item}>
          <a href='/dialogs'>Messages</a>
        </div>
        <div className={cls.item}>
          <a href='#'>News</a>
        </div>
        <div className={cls.item}>
          <a href='#'>Music</a>
        </div>
        <div className={cls.item}>
          <a href='#'>Settings</a>
        </div>
      </nav>
    );
}

export default Navbar;