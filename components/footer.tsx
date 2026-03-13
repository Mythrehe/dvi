import React from 'react';
import { useRouter } from 'next/navigation';
import { CSSProperties } from 'react';

const Footer = () => {
  const router = useRouter();
  const styles: { [key: string]: CSSProperties } = {
    footer: {
      width: '100%',
      backgroundColor: '#0d1b2a',
      padding: '80px 100px 40px 100px',
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      gap: '60px',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    brandColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      maxWidth: '300px',
    },
    brandTitle: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#fff',
      lineHeight: '1.4',
      margin: 0,
    },
    brandLocation: {
      fontSize: '14px',
      color: '#778da9',
      margin: 0,
    },
    phoneNumbers: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginTop: '10px',
    },
    phone: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#fff',
      margin: 0,
      letterSpacing: '0.5px',
    },
    email: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#ffc107',
      margin: '15px 0 0 0',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    columnTitle: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#fff',
      margin: '0 0 15px 0',
      letterSpacing: '0.5px',
    },
    link: {
      fontSize: '14px',
      color: '#778da9',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      lineHeight: '1.8',
    },
    socialSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      maxWidth: '250px',
    },
    socialIcons: {
      display: 'flex',
      gap: '10px',
    },
    socialIcon: {
      width: '45px',
      height: '45px',
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#0d1b2a',
      textDecoration: 'none',
    },
    copyright: {
      fontSize: '13px',
      color: '#778da9',
      lineHeight: '1.8',
      marginTop: '20px',
    },
    copyrightBrand: {
      color: '#fff',
      fontWeight: '600',
    },
    divider: {
      width: '100%',
      height: '1px',
      backgroundColor: 'rgba(255,255,255,0.1)',
      margin: '50px 0 30px 0',
    },
    bottomBar: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '13px',
      color: '#778da9',
    },
  };

  const exploreLinks = [
    'About us',
    // 'Gallery',
    // 'Faculty',
    // 'Research Activities',
    'Videos',
    'Contact us',
    // 'Sitemap',
    'Privacy Policy'
  ];

  const courseLinks = [
    'Health Assistant (Nursing)',
    'Medical Lab Technician',
    'Operation Theatre Technician',
    'Physiotherapy',
    'X-Ray Technician',
    'Dental Technician',
    'Eye Technician'
  ];

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
    const target = e.currentTarget;
    target.style.color = isEnter ? '#ffc107' : '#778da9';
    target.style.transform = isEnter ? 'translateX(5px)' : 'translateX(0)';
  };

  const handleStudentLinkClick = (link: string) => {
    if (link === 'Apply Online') {
      router.push('/registration');
    }
  };

  const handleSocialHover = (e: React.MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
    const target = e.currentTarget;
    target.style.backgroundColor = isEnter ? '#ffc107' : '#fff';
    target.style.transform = isEnter ? 'translateY(-3px)' : 'translateY(0)';
  };

  const handleEmailHover = (e: React.MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
    const target = e.currentTarget;
    target.style.color = isEnter ? '#fff' : '#ffc107';
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand Column */}
        <div style={styles.brandColumn}>
          <h3 style={styles.brandTitle}>
            Sri Dhanvantri Healthcare <br />
            Training Institute
          </h3>
          <p style={styles.brandLocation}>Dharmapuri, Tamil Nadu, India</p>

          <div style={styles.phoneNumbers}>
            <p style={styles.phone}>(+91) 96291-46563</p>
            <p style={styles.phone}>(+91) 94453-19925</p>
            <p style={styles.phone}>(+91) 95973-20622</p>
          </div>

          <a
            href="mailto:admissions@hillsideacademy.in"
            style={styles.email}
            onMouseEnter={(e) => handleEmailHover(e, true)}
            onMouseLeave={(e) => handleEmailHover(e, false)}
          >
            admissions@hillsideacademy.in
          </a>
        </div>

        {/* Explore Column */}
        <div style={styles.column}>
          <h4 style={styles.columnTitle}>Explore</h4>
          {exploreLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              style={styles.link}
              onMouseEnter={(e) => handleLinkHover(e, true)}
              onMouseLeave={(e) => handleLinkHover(e, false)}
            >
              {link}
            </a>
          ))}
        </div>

        {/* For Students Column */}
        <div style={styles.column}>
          <h4 style={styles.columnTitle}>Courses Offered</h4>
          {courseLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              style={styles.link}
              onClick={(e) => {
                e.preventDefault();
                handleStudentLinkClick(link);
              }}
              onMouseEnter={(e) => handleLinkHover(e, true)}
              onMouseLeave={(e) => handleLinkHover(e, false)}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Get In Touch Column */}
        <div style={styles.socialSection}>
          <h4 style={styles.columnTitle}>Get In Touch</h4>

          <div style={styles.socialIcons}>
            <a
              href="#"
              style={styles.socialIcon}
              onMouseEnter={(e) => handleSocialHover(e, true)}
              onMouseLeave={(e) => handleSocialHover(e, false)}
              aria-label="X (Twitter)"
            >
              𝕏
            </a>
            <a
              href="#"
              style={styles.socialIcon}
              onMouseEnter={(e) => handleSocialHover(e, true)}
              onMouseLeave={(e) => handleSocialHover(e, false)}
              aria-label="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              style={styles.socialIcon}
              onMouseEnter={(e) => handleSocialHover(e, true)}
              onMouseLeave={(e) => handleSocialHover(e, false)}
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          <p style={styles.copyright}>
            Copyright © 2024 <span style={styles.copyrightBrand}>Hillside<br />
              College of Pharmacy and<br />
              Research Centre</span> All Rights<br />
            Reserved.
          </p>
        </div>
      </div>

      <div style={styles.divider}></div>

      <div style={styles.bottomBar}>
        <span></span>
        <span></span>
      </div>
    </footer>
  );
};

export default Footer;