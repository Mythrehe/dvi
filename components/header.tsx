"use client";

import React, { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
import { useRouter, usePathname } from 'next/navigation';
import { MenuOutlined, CloseOutlined, DownOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [isCoursesHovered, setIsCoursesHovered] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  
  const brandNavy = '#0d1b2a'; 
  const accentGold = '#ffc107'; 

  const courses = [
    { name: 'DIPLOMA IN HEALTH ASSISTANT (NURSING)', path: '/courses/nursing' },
    { name: 'DIPLOMA IN MEDICAL LAB TECHNICIAN', path: '/courses/medical-lab' },
    { name: 'DIPLOMA IN OPERATION THEATRE TECHNICIAN', path: '/courses/operation-theatre' },
    { name: 'DIPLOMA IN PHYSIOTHERAPY', path: '/courses/physiotherapy' },
    { name: 'DIPLOMA IN X-RAY TECHNICIAN', path: '/courses/x-ray' },
    { name: 'DIPLOMA IN DENTAL TECHNICIAN', path: '/courses/dental' },
    { name: 'DIPLOMA IN EYE TECHNICIAN', path: '/courses/eye' }
  ];

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT US', path: '/about' },
    { label: 'COURSES OFFERED', path: '/courses' },
    { label: 'GALLERY', path: '/gallery' },
    { label: 'APPLY ONLINE', path: '/registration' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        .header-main {
          width: 100%;
          height: 100px;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 5000;
          background: #fff;
          display: flex;
          align-items: stretch;
          box-shadow: ${scrolled ? '0 4px 15px rgba(0,0,0,0.1)' : 'none'};
          transition: all 0.3s ease;
        }

        .header-left {
          flex: 0 0 30%;
          display: flex;
          align-items: center;
          padding-left: 30px;
          background: #fff;
          z-index: 10;
        }

        .header-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
          margin-left: -30px;
        }

        /* Fixed Background for Slant */
        .header-navy-bg {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: ${brandNavy};
          clip-path: polygon(5% 0, 100% 0, 100% 100%, 0% 100%);
          z-index: -1;
        }

        .top-info-bar {
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 30px;
          gap: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .nav-bar {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-right: 20px;
          gap: 20px;
        }

        .nav-item-wrapper {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .nav-link {
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .nav-link:hover { color: ${accentGold}; }

        .desktop-dropdown {
          position: absolute;
          top: 85%;
          left: 50%;
          transform: translateX(-50%);
          background: #ffffff;
          min-width: 320px;
          border-radius: 0 0 8px 8px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
          z-index: 6000;
          padding: 8px 0;
          border: 1px solid #eee;
        }

        .dropdown-item {
          padding: 12px 25px;
          font-size: 11px;
          font-weight: 700;
          color: ${brandNavy};
          cursor: pointer;
          transition: all 0.2s;
        }

        .dropdown-item:hover { background: ${accentGold}; }

        .mobile-top-info {
          display: none;
          background: ${brandNavy};
          width: 100%;
          padding: 6px 15px;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          z-index: 5001;
        }

        .mobile-toggle { 
          display: none; 
          align-items: center; 
          padding-right: 20px; 
          color: ${brandNavy}; 
          font-size: 24px; 
          cursor: pointer;
        }

        /* --- RESPONSIVE FIXES --- */
        @media (max-width: 1024px) {
          .header-main { 
            height: 60px !important; 
            top: 28px !important; 
          }
          .mobile-top-info { display: flex; height: 28px; }
          .header-right { display: none; }
          .mobile-toggle { display: flex; margin-left: auto; }
          .header-left { 
            flex: 1; 
            padding-left: 10px; 
          }
          .logo-img { width: 38px !important; height: 38px !important; }
          .logo-text { font-size: 13px !important; line-height: 1.0; }
          .logo-subtext { font-size: 9px !important; }
        }
      `}</style>

      {/* 1. Mobile Top Info Bar */}
      <div className="mobile-top-info">
        <a href="tel:+919629146563" style={{ color: '#fff', fontSize: '10px', display: 'flex', gap: '5px' }}>
          <PhoneOutlined style={{ color: accentGold, transform: 'rotate(90deg)' }} /> +91 9629146563
        </a>
        <a href="mailto:karthigayanc54@gmail.com" style={{ color: '#fff', fontSize: '10px', display: 'flex', gap: '5px' }}>
          <MailOutlined style={{ color: accentGold }} /> karthigayanc54@gmail.com
        </a>
      </div>

      <header className="header-main">
        {/* 2. Left Side Logo & Text */}
        <div className="header-left" onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
          <img src="/dvi_logo.jpeg" alt="Logo" className="logo-img" style={{ width: '55px', height: '55px', borderRadius: '50%' }} />
          <div style={{ marginLeft: '8px' }}>
            <div className="logo-text" style={{ color: brandNavy, fontSize: '15px', fontWeight: '900', lineHeight: '1.1' }}>
              SRI DHANVANTRI <br />
              <span className="logo-subtext" style={{ fontSize: '11px', fontWeight: '700', opacity: 0.8 }}>HEALTHCARE TRAINING INSTITUTE</span>
            </div>
          </div>
        </div>

        {/* 3. Mobile Hamburger Toggle */}
        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(true)}>
          <MenuOutlined />
        </div>

        {/* 4. Desktop Right Side */}
        <div className="header-right">
          <div className="header-navy-bg"></div>
          <div className="top-info-bar">
            <div style={{ color: '#fff', fontSize: '11px' }}><PhoneOutlined /> +91 9629146563</div>
            <div style={{ color: '#fff', fontSize: '11px', marginLeft: '20px' }}><MailOutlined />karthigayanc54@gmail.com</div>
          </div>

          <nav className="nav-bar">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="nav-item-wrapper"
                onMouseEnter={() => item.label === 'COURSES OFFERED' && setIsCoursesHovered(true)}
                onMouseLeave={() => item.label === 'COURSES OFFERED' && setIsCoursesHovered(false)}
              >
                <div 
                  className="nav-link"
                  style={{ color: pathname === item.path ? accentGold : '#fff' }}
                  onClick={() => item.label !== 'COURSES OFFERED' && router.push(item.path)}
                >
                  {item.label}
                  {item.label === 'COURSES OFFERED' && <DownOutlined style={{ fontSize: '10px' }} />}
                </div>

                {item.label === 'COURSES OFFERED' && isCoursesHovered && (
                  <div className="desktop-dropdown">
                    {courses.map((course, idx) => (
                      <div 
                        key={idx}
                        className="dropdown-item"
                        onClick={() => {
                          router.push(course.path);
                          setIsCoursesHovered(false);
                        }}
                      >
                        {course.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Button 
              type="primary"
              onClick={() => router.push('/registration')}
              style={{ background: accentGold, color: brandNavy, border: 'none', fontWeight: '800', height: '32px', fontSize: '11px', marginLeft: '10px' }}
            >
              ADMISSIONS OPEN FOR 2026-27
            </Button>
          </nav>
        </div>
      </header>

      {/* 5. Mobile Drawer */}
      <Drawer
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        width="80%"
        title={<span style={{ color: brandNavy, fontWeight: '900' }}>MENU</span>}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {navItems.map((item) => (
            <div key={item.label} style={{ borderBottom: '1px solid #f0f0f0' }}>
              <div 
                style={{ fontSize: '14px', fontWeight: '800', color: brandNavy, display: 'flex', justifyContent: 'space-between', padding: '15px 0' }}
                onClick={() => {
                  if (item.label === 'COURSES OFFERED') setMobileCoursesOpen(!mobileCoursesOpen);
                  else { router.push(item.path); setMobileMenuOpen(false); }
                }}
              >
                {item.label}
                {item.label === 'COURSES OFFERED' && <DownOutlined rotate={mobileCoursesOpen ? 180 : 0} />}
              </div>
              {item.label === 'COURSES OFFERED' && mobileCoursesOpen && (
                <div style={{ background: '#f5f5f5' }}>
                  {courses.map((course, idx) => (
                    <div 
                      key={idx} 
                      style={{ padding: '12px 20px', fontSize: '12px', fontWeight: '700', color: brandNavy }}
                      onClick={() => { router.push(course.path); setMobileMenuOpen(false); }}
                    >
                      {course.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default Header;