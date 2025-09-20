import React, { useState, useEffect, useRef } from 'react';
import "./Header.css";

const Header = () => {
  const headerRef = useRef(null);
  const navRef = useRef(null);

  // ✅ asset helper so it works in local + production (GitHub Pages etc.)
  const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [currentLogo, setCurrentLogo] = useState(asset("image/logo1.png"));

  // Update header background
  const updateHeaderBackground = () => {
    const shouldShowBg = isScrolled || isHovered || isNavActive || isMenuHovered;

    if (headerRef.current) {
      if (shouldShowBg) {
        headerRef.current.classList.add("show-bg");
      } else {
        headerRef.current.classList.remove("show-bg");
      }
    }
  };

  // Update logo
  const updateLogo = () => {
    const shouldShowBlackLogo = isScrolled || isHovered || isNavActive || isMenuHovered;
    setCurrentLogo(shouldShowBlackLogo ? asset("image/logo2.png") : asset("image/logo1.png"));
  };

  // Scroll
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsScrolled(scrollTop > 50);
  };

  // Desktop hover
  const setupDesktopHover = () => {
    if (window.innerWidth >= 1024 && navRef.current && headerRef.current) {
      const navItems = navRef.current.querySelectorAll("ul > li, .nav-button");

      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);

      navItems.forEach((item) => {
        item.addEventListener("mouseenter", handleMouseEnter);
      });

      headerRef.current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        navItems.forEach((item) => {
          item.removeEventListener("mouseenter", handleMouseEnter);
        });
        if (headerRef.current) {
          headerRef.current.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    }
  };

  // Mobile menu toggle
  const handleMenuToggle = () => {
    setIsNavActive(!isNavActive);
  };

  // Toggle submenus
  const handleSubmenuClick = (e, submenuKey) => {
    if (window.innerWidth < 1024) {
      e.preventDefault();
      setOpenSubmenus((prev) => ({
        ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
        [submenuKey]: !prev[submenuKey],
      }));
    }
  };

  // Click outside nav
  const handleDocumentClick = (e) => {
    if (window.innerWidth < 1024 && isNavActive) {
      if (
        navRef.current &&
        headerRef.current &&
        !navRef.current.contains(e.target) &&
        !headerRef.current.querySelector(".menu-toggle").contains(e.target)
      ) {
        setIsNavActive(false);
      }
    }
  };

  // Resize
  const handleResize = () => {
    setIsHovered(false);
    setIsMenuHovered(false);
    setIsNavActive(false);
    setOpenSubmenus({});
  };

  // Sync bg + logo
  useEffect(() => {
    updateHeaderBackground();
    updateLogo();
  }, [isScrolled, isHovered, isNavActive, isMenuHovered]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("resize", handleResize);

    const cleanupHover = setupDesktopHover();

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("resize", handleResize);
      if (cleanupHover) cleanupHover();
    };
  }, []);

  return (
    <header id="header" ref={headerRef}>
      <div className="nav-hover-area"></div>
      <div className="header-container">
        <div className="header-logo">
          <img src={currentLogo} alt="logo" />
        </div>

        <nav id="nav" ref={navRef} className={isNavActive ? 'active' : ''}>
          <ul>
            <li><a href="#">Home</a></li>

            <li className={`has-submenu ${openSubmenus.portfolio ? 'open' : ''}`}>
              <a href="#" onClick={(e) => handleSubmenuClick(e, 'portfolio')}>
                Portfolio 
                <svg className="arrow-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                </svg>
              </a>
              <ul className="submenu">
                <li><a href="#">Wedding</a></li>
                <li><a href="#">Family Portrait</a></li>
                <li><a href="#">Maternity</a></li>
                <li><a href="#">Event</a></li>
              </ul>
            </li>

            <li><a href="#">Contact</a></li>
            <li><a href="#">Book Us</a></li>

            <li className={`has-submenu ${openSubmenus.branch ? 'open' : ''}`}>
              <a href="#" onClick={(e) => handleSubmenuClick(e, 'branch')}>
                Our Branch
                <svg className="arrow-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                </svg>
              </a>
              <ul className="submenu">
                <li><a href="#">Ibadan</a></li>
                <li><a href="#">Ile-Ife</a></li>
                <li><a href="#">UK (Freelancing)</a></li>
              </ul>
            </li>
          </ul>

          <div className="nav-button">
            <a href="#"><button>Rent a space</button></a>
          </div>
        </nav>

        {/* Menu Toggle */}
        <div 
          className="menu-toggle" 
          id="menuToggle" 
          onClick={handleMenuToggle}
          onMouseEnter={() => window.innerWidth < 1024 && setIsMenuHovered(true)}
          onMouseLeave={() => window.innerWidth < 1024 && setIsMenuHovered(false)}
        >
          <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
          <svg className="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;