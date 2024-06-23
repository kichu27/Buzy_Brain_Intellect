import React from 'react';

const Sidebar = () => {
  // Inline styles
  const styles = {
    container: {
      height: '100vh',
      width: '250px',
      position: 'fixed',
      top: '0',
      left: '0',
      backgroundColor: '#111',
      padding: '10px',
      boxSizing: 'border-box',
      color: 'white',
    },
    menuItem: {
      padding: '10px 15px',
      textDecoration: 'none',
      color: 'white',
      display: 'block',
      transition: '0.3s',
    },
    menuItemHover: {
      backgroundColor: '#575757',
    }
  };

  // State to manage hover effect
  const [hoverIndex, setHoverIndex] = React.useState(null);

  // Menu items
  const menuItems = [
    'Home',
    'About',
    'Services',
    'Contact',
  ];

  return (
    <div style={styles.container}>
      {menuItems.map((item, index) => (
        <a
          key={index}
          href={`#${item.toLowerCase()}`}
          style={{
            ...styles.menuItem,
            ...(hoverIndex === index ? styles.menuItemHover : {}),
          }}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
