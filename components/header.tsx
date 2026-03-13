import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useRouter, usePathname } from 'next/navigation';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { m } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('HOME');
  const [isCoursesHovered, setIsCoursesHovered] = useState(false);
  const [hoveredCourseIndex, setHoveredCourseIndex] = useState<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Check if current route is /registration
  const isRegistrationRoute = pathname === '/registration';

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

  const handleBackToHome = () => {
    router.push('/');
  };

  const navItems = [
    'HOME',
    'ABOUT US',
    'COURSES OFFERED',
    'RESOURCES',
    'APPLY ONLINE'
  ];

  const styles = {
    // Registration Route - Minimal Header with Back Button
    registrationHeader: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      width: '100%',
      height: '80px',
      zIndex: 1000,
      display: isRegistrationRoute ? 'flex' : 'none',
      alignItems: 'center',
      padding: '0 40px',
      background: 'transparent',
    },
    backButtonContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    backButton: {
      background: 'linear-gradient(135deg, #ffc107 0%, #ffb300 50%, #ff8f00 100%)',
      color: '#1a202c',
      border: 'none',
      borderRadius: '50px',
      padding: '14px 28px',
      fontSize: '14px',
      fontWeight: '700',
      cursor: 'pointer',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '50px',
      marginTop: '60px',
      gap: '10px',
      // boxShadow: '0 8px 25px rgba(255, 193, 7, 0.4), 0 4px 10px rgba(0, 0, 0, 0.1)',
      // transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      position: 'relative' as const,
      overflow: 'hidden',
    },
    backButtonIcon: {
      fontSize: '18px',
      transition: 'transform 0.3s ease',
    },
    backButtonGlow: {
      position: 'absolute' as const,
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
      pointerEvents: 'none' as const,
    },
    // Original Header Styles (hidden on registration)
    mainHeader: {
      width: '100%',
      height: '80px',
      position: 'fixed' as const,
      top: 0,
      left: 0,
      zIndex: 1000,
      display: isRegistrationRoute ? 'none' : 'flex',
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
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 8px 25px rgba(255, 193, 7, 0.4), 0 4px 10px rgba(0, 0, 0, 0.1); }
          50% { box-shadow: 0 12px 35px rgba(255, 193, 7, 0.6), 0 6px 15px rgba(0, 0, 0, 0.15); }
        }
        .back-button-animate {
          animation: pulse-glow 2s infinite;
        }
        .back-button-animate:hover {
          animation: none;
        }
      `}</style>

      {/* Registration Route - Only Back Button */}
      <header style={styles.registrationHeader}>
        <div style={styles.backButtonContainer}>
          <button
            style={styles.backButton}
            className="back-button-animate"
            onClick={handleBackToHome}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = 'translateX(-5px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 193, 7, 0.6), 0 8px 20px rgba(0, 0, 0, 0.2)';
              const glow = e.currentTarget.querySelector('.glow-overlay') as HTMLElement;
              if (glow) glow.style.opacity = '1';
              const icon = e.currentTarget.querySelector('.back-icon') as HTMLElement;
              if (icon) icon.style.transform = 'translateX(-4px)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = 'translateX(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 193, 7, 0.4), 0 4px 10px rgba(0, 0, 0, 0.1)';
              const glow = e.currentTarget.querySelector('.glow-overlay') as HTMLElement;
              if (glow) glow.style.opacity = '0';
              const icon = e.currentTarget.querySelector('.back-icon') as HTMLElement;
              if (icon) icon.style.transform = 'translateX(0)';
            }}
          >
            <span className="glow-overlay" style={styles.backButtonGlow}></span>
            <ArrowLeftOutlined className="back-icon" style={styles.backButtonIcon} />
            Back to Home
          </button>
        </div>
      </header>

      {/* Main Header - Hidden on Registration Route */}
      <header style={styles.mainHeader}>
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