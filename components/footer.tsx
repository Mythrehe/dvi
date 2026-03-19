import React from 'react';

import { useRouter } from 'next/navigation';

import { CSSProperties } from 'react';



const Footer = () => {

  const router = useRouter();



  const styles: { [key: string]: CSSProperties } = {

    footer: {

      width: '100%',

      backgroundColor: '#0d1b2a',

      padding: '60px 5% 40px 5%',

      boxSizing: 'border-box',

      fontFamily: 'Arial, sans-serif',

      color: '#fff',

    },

    container: {

      maxWidth: '1400px',

      margin: '0 auto',

      display: 'flex',

      justifyContent: 'space-between',

      flexWrap: 'wrap',

      gap: '30px',

    },

    column: {

      flex: '1 1 200px',

      display: 'flex',

      flexDirection: 'column',

      gap: '5px',

      minWidth: '250px',

    },

    brandColumn: {

      flex: '1 1 300px',

      display: 'flex',

      flexDirection: 'column',

      gap: '10px',

    },

    brandTitle: {

      fontSize: '22px',

      fontWeight: '700',

      color: '#fff',

      lineHeight: '1.3',

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

      marginTop: '5px',

    },

    phone: {

      fontSize: '18px',

      fontWeight: '600',

      color: '#fff',

      margin: 0,

      letterSpacing: '0.5px',

    },

    columnTitle: {

      fontSize: '18px',

      fontWeight: '700',

      color: '#fff',

      margin: '0 0 10px 0',

      position: 'relative',

      paddingBottom: '10px',

    },

    link: {

      fontSize: '14px',

      color: '#778da9',

      textDecoration: 'none',

      cursor: 'pointer',

      transition: 'all 0.3s ease',

      lineHeight: '1.6',

    },

    bottomBar: {

      maxWidth: '1400px',

      margin: '40px auto 0 auto',

      textAlign: 'center' as const,

      fontSize: '13px',

      color: '#778da9',

      borderTop: '1px solid rgba(255,255,255,0.1)',

      paddingTop: '20px',

    },

  };



  const exploreLinks = ['About us', 'Gallery', 'Contact us', 'Privacy Policy'];

  const courseLinks = [

    { id: 'nursing', name: 'Health Assistant (Nursing)' },

    { id: 'medical-lab', name: 'Medical Lab Technician' },

    { id: 'operation-theatre', name: 'Operation Theatre Technician' },

    { id: 'physiotherapy', name: 'Physiotherapy' },

    { id: 'x-ray', name: 'X-Ray Technician' },

    { id: 'dental', name: 'Dental Technician' },

    { id: 'eye', name: 'Eye Technician' }

  ];



  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {

    const target = e.currentTarget;

    target.style.color = isEnter ? '#ffc107' : '#778da9';

    target.style.paddingLeft = isEnter ? '8px' : '0px';

  };



  const handleExploreLinkClick = (link: string) => {

    switch(link) {

      case 'About us':

        router.push('/about');

        break;

      case 'Gallery':

        router.push('/gallery');

        break;

      case 'Contact us':

        // Scroll to location section in footer

        const locationElement = document.getElementById('footer-location');

        if (locationElement) {

          locationElement.scrollIntoView({ behavior: 'smooth' });

        } else {

          // Fallback: scroll to bottom of page

          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

        }

        break;

      case 'Privacy Policy':

        router.push('/privacy-policy');

        break;

      default:

        break;

    }

  };



  return (

    <footer style={styles.footer}>

      <style>{`

        @media (max-width: 768px) {

          footer { padding: 60px 20px 30px 20px !important; }

          .footer-container { gap: 0px !important; flex-direction: column !important; }

          .footer-column { min-width: 100% !important; margin-top: 0 !important; }

          .column-title { padding-bottom: 5px !important; }

          .column-title::after {

            content: "";

            position: absolute;

            left: 0;

            bottom: 0;

            width: 40px;

            height: 2px;

            background: #ffc107;

          }

        }

      `}</style>



      <div style={styles.container} className="footer-container">

        {/* Brand Column */}

        <div style={styles.brandColumn} className="footer-column">

          <h3 style={styles.brandTitle}>

            Sri Dhanvantri Healthcare <br />

            Training Institute

          </h3>

          <p style={styles.brandLocation}>Dharmapuri, Tamil Nadu, India</p>



          <div style={styles.phoneNumbers}>

            <p style={styles.phone}>(+91) 96291-46563</p>

            <p style={styles.phone}>(+91) 94453-19925</p>

            <p style={styles.phone}>04342 358617</p>

          </div>

        </div>



        {/* Explore Column */}

        <div style={styles.column} className="footer-column">

          <h4 style={styles.columnTitle} className="column-title">Explore</h4>

          {exploreLinks.map((link, index) => (

            <a

              key={index}

              onClick={() => handleExploreLinkClick(link)}

              style={styles.link}

              onMouseEnter={(e) => handleLinkHover(e, true)}

              onMouseLeave={(e) => handleLinkHover(e, false)}

            >

              {link}

            </a>

          ))}

        </div>



        {/* Courses Column */}

        <div style={styles.column} className="footer-column">

          <h4 style={styles.columnTitle} className="column-title">Courses Offered</h4>

          {courseLinks.map((link, index) => (

            <a

              key={index}

              onClick={() => router.push(`/courses/${link.id}`)}

              style={styles.link}

              onMouseEnter={(e) => handleLinkHover(e, true)}

              onMouseLeave={(e) => handleLinkHover(e, false)}

            >

              {link.name}

            </a>

          ))}

        </div>



        {/* Location Column - Fixed negative margins */}

        <div id="footer-location" style={styles.column} className="footer-column">

          <h4 style={styles.columnTitle} className="column-title">Our Location</h4>



          <div style={{

            fontSize: '14px',

            color: '#e2e8f0',

            lineHeight: '1.8',

            marginBottom: '10px',

          }}>

            <p style={{ margin: 0, fontWeight: '600', color: '#ffc107' }}>

              Sri Dhanvantri Healthcare Training Institute

            </p>

            <p style={{ margin: 0 }}>

              Door No 16/5D, Bharathipuram, 4th Street,<br />

              (Krishna hero showroom opposite road),<br />

              Dharmapuri - 636 705

            </p>

          </div>

         

          <div style={{ color: '#ffc107', fontSize: '14px', fontWeight: '600', marginTop: '5px' }}>

            {/*admissions@sridhanvantri.com*/}

          </div>

        </div>

      </div>



      <div style={styles.bottomBar}>

        <p style={{ margin: '0 0 10px 0' }}>

          Copyright © 2026 <span style={{ color: '#fff', fontWeight: '600' }}>Sri Dhanvantri Healthcare Institute</span>. All Rights Reserved.

        </p>

        <span>Designed with excellence in healthcare education.</span>

      </div>

    </footer>

  );

};



export default Footer;