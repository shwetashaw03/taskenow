import React from 'react';

const Menu = () => {
  // Define an array of menu items
  const menuItems = [
    { label: 'Home', url: '/' },
    { label: 'About Us', url: '/about' },
    { label: 'Services', url: '/services', subMenu: [
      { label: 'Service 1', url: '/service1' },
      { label: 'Service 2', url: '/service2' },
      { label: 'Service 3', url: '/service3' },
      { label: 'Service 4', url: '/service4' },
    ]},
    { label: 'Became a technician', url: '/become-technician' },
    { label: 'Contact Us', url: '/contact' },
    { label: 'Book Now', url: '/book-now', className: 'btn' }
  ];

  return (
    <nav className="nav-menu">
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <a href={menuItem.url} className={menuItem.className}>{menuItem.label}</a>
            {menuItem.subMenu && (
              <span className="subarrow fa fa-caret-down"></span>
            )}
            {menuItem.subMenu && (
              <ul className="sub-menu">
                {menuItem.subMenu.map((subMenuItem, subIndex) => (
                  <li key={subIndex}>
                    <a href={subMenuItem.url}>{subMenuItem.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
