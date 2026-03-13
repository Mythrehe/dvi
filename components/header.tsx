import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('HOME');
  const [isCoursesHovered, setIsCoursesHovered] = useState(false);
  const [hoveredCourseIndex, setHoveredCourseIndex] = useState<number | null>(null);
  const router = useRouter();

  const courses = [
    'Diploma in Health Assistant (Nursing)',
    'Diploma in Medical Lab Technician',
    'Diploma in Operation Theatre Technician',
    'Diploma in Physiotherapy',
    'Diploma in X-Ray Technician',
    'Diploma in Dental Technician',
    'Diploma in Eye Technician'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item: string) => {
    setActiveNav(item);
    if (item === 'APPLY ONLINE') {
      router.push('/registration');
    }
  };

  const handleApplyNow = () => {
    router.push('/registration');
  };

  const navItems = [
    'HOME',
    'ABOUT US',
    'COURSES OFFERED',
    'RESOURCES',
    'APPLY ONLINE'
  ];

  const styles = {
    header: {
      width: '100%',
      height: '80px',
      position: 'fixed' as const,
      top: 0,
      left: 0,
      zIndex: 1000,
      display: 'flex' as const,
      alignItems: 'center' as const,
      justifyContent: 'space-between' as const,
      padding: '0 60px',
      boxSizing: 'border-box' as const,
      transition: 'all 0.4s ease',
      background: scrolled ? '#fff' : 'transparent',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
    },
    logoSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    logoCircle: {
      width: '55px',
      height: '55px',
      borderRadius: '50%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      overflow: 'hidden',
    },
    logoText: {
      color: scrolled ? '#1a202c' : '#fff',
      fontSize: '14px',
      fontWeight: '700',
      lineHeight: '1.3',
      maxWidth: '280px',
      transition: 'color 0.4s ease',
      textShadow: scrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.3)',
    },
    navSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px',
      marginLeft: 'auto',
      marginRight: '0px',
      flexWrap: 'nowrap' as const,
    },
    navItem: {
      color: scrolled ? '#4a5568' : '#fff',
      fontSize: '12px',
      fontWeight: '600',
      cursor: 'pointer',
      padding: '5px 0',
      position: 'relative' as const,
      transition: 'all 0.3s ease',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap' as const,
    },
    navItemActive: {
      color: '#ffc107',
      fontSize: '12px',
      fontWeight: '700',
      cursor: 'pointer',
      padding: '5px 0',
      position: 'relative' as const,
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap' as const,
    },
    activeUnderline: {
      position: 'absolute' as const,
      bottom: '-4px',
      left: '0',
      width: '100%',
      height: '3px',
      backgroundColor: '#ffc107',
      borderRadius: '2px',
    },
    admissionBadge: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#ffc107',
      borderRadius: '8px',
      padding: '6px 10px',
      gap: '12px',
      boxShadow: '0 4px 20px rgba(255,193,7,0.4)',
      animation: 'pulse 2s infinite',
    },
    admissionText: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'flex-start',
      gap: '0px',
      lineHeight: '1',
    },
    yearText: {
      fontSize: '18px',
      fontWeight: '900',
      color: '#1a202c',
      margin: '0',
      letterSpacing: '-1px',
    },
    admissionLabel: {
      fontSize: '9px',
      fontWeight: '800',
      color: '#1a202c',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    applyButton: {
      background: '#2d3748',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      padding: '8px 16px',
      fontSize: '11px',
      fontWeight: '700',
      cursor: 'pointer',
      height: '36px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      transition: 'all 0.3s ease',
    },
    verticalDivider: {
      width: '1px',
      height: '50px',
      background: scrolled ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.3)',
      margin: '0 40px',
      transition: 'background 0.4s ease',
    },
  };

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
      `}</style>
      <header style={styles.header}>
        {/* Logo Section */}
        <div style={styles.logoSection}>
          <div style={styles.logoCircle}>
            <img 
              src="dvi_logo.jpeg" 
              alt="Sri Dhanvantri Healthcare Training Institute Logo"
              style={{ 
                width: '45px', 
                height: '45px',
                borderRadius: '50%',
                objectFit: 'cover'
              }} 
            />
          </div>
          <div style={styles.logoText}>
            Sri Dhanvantri Healthcare<br />
            Training Institute
          </div>
        </div>

        <div style={styles.verticalDivider}></div>

        {/* Navigation */}
        <nav style={styles.navSection}>
          {navItems.map((item) => {
            if (item === 'COURSES OFFERED') {
              return (
                <div
                  key={item}
                  style={activeNav === item ? styles.navItemActive : styles.navItem}
                  onMouseEnter={() => setIsCoursesHovered(true)}
                  onMouseLeave={() => {
                    setIsCoursesHovered(false);
                    setHoveredCourseIndex(null);
                  }}
                >
                  {item}
                  <div style={{
                    position: 'absolute' as const,
                    top: '100%',
                    left: '0',
                    background: '#fff',
                    borderRadius: '4px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                    padding: '8px 0',
                    minWidth: '280px',
                    display: isCoursesHovered ? 'block' : 'none',
                    zIndex: 1000
                  }}>
                    {courses.map((course, idx) => (
                      <div
                        key={idx}
                        onMouseEnter={() => setHoveredCourseIndex(idx)}
                        onMouseLeave={() => setHoveredCourseIndex(null)}
                        style={{
                          padding: '12px 20px',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          background: hoveredCourseIndex === idx ? '#f39c12' : 'transparent',
                          color: hoveredCourseIndex === idx ? '#ffffff' : '#333333',
                          fontSize: '12px',
                          fontWeight: '600',
                          textTransform: 'uppercase'
                        }}
                        onClick={() => {
                          setIsCoursesHovered(false);
                          if (course === 'Diploma in Health Assistant (Nursing)') {
                            router.push('/courses/nursing');
                          }
                        }}
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <div
                key={item}
                style={activeNav === item ? styles.navItemActive : styles.navItem}
                onClick={() => handleNavigation(item)}
              >
                {item}
                {activeNav === item && <span style={styles.activeUnderline}></span>}
              </div>
            );
          })}
          
          <div style={styles.admissionBadge}>
            <div style={styles.admissionText}>
              <span style={styles.yearText}>2026-27</span>
              <span style={styles.admissionLabel}>Admission Open</span>
            </div>
            <Button style={styles.applyButton} onClick={handleApplyNow}>
              Apply Now
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;