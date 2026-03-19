"use client";

import React from 'react';
import { Row, Col, Typography, ConfigProvider, Tag, Divider } from 'antd';

const { Title, Text, Paragraph } = Typography;

const GalleryPage = () => {
  const brandDark = '#1a202c';
  const accentGold = '#ffc107';

  // --- EDIT THIS LIST TO ADD YOUR IMAGES ---
  const myImages = [
    { src: '/img1.jpeg', cat: 'NCC Work', title: 'Field Coordination' },
    { src: '/img2.jpeg', cat: 'NCC Work', title: 'Field Coordination' },
    { src: '/img3.jpeg', cat: 'Hospital Visit', title: 'General Hospital Visit' },
    { src: '/img4.jpeg', cat: 'Laboratory', title: 'Patient Support' },
    { src: '/img5.jpeg', cat: 'Laboratory', title: 'Field Coordination' },
    { src: '/img6.jpeg', cat: 'class', title: 'Class' },
    { src: '/img7.jpeg', cat: 'Hospital Visit', title: 'OT Observation' },
    { src: '/img8.jpeg', cat: 'Hospital Visit', title: 'Ward Management' },
    { src: '/img4.jpeg', cat: 'Hospital Visit', title: 'General Hospital Visit' },
  ];

  return (
    <ConfigProvider theme={{ token: { colorPrimary: accentGold } }}>
      <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingTop: '80px' }}>
        
        <div style={{ background: brandDark, padding: '40px 0', textAlign: 'center',paddingTop:'130px' }}>
          <Title level={2} style={{ color: '#fff', margin: 0 }}>Campus <span style={{ color: accentGold }}>Gallery</span></Title>
          <Paragraph style={{ color: 'rgba(255,255,255,0.6)', marginTop: '10px' }}>Experience the practical training at Sri Dhanvantri</Paragraph>
        </div>

        <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 20px' }}>
          <Row gutter={[16, 16]}>
            {myImages.map((img, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <div className="gallery-item" style={{
                  position: 'relative',
                  height: '280px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  background: '#eee'
                }}>
                  <img 
                    src={img.src} 
                    alt={img.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                       e.currentTarget.src = "https://placehold.co/600x400/1a202c/ffc107?text=Upload+Image+Here";
                    }}
                  />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '15px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))'
                  }}>
                    <Tag color="gold" style={{ fontSize: '10px', borderRadius: '2px' }}>{img.cat}</Tag>
                    <div style={{ color: '#fff', fontWeight: 600, marginTop: '5px' }}>{img.title}</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <style jsx global>{`
        .gallery-item { transition: transform 0.3s ease; cursor: pointer; }
        .gallery-item:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
      `}</style>
    </ConfigProvider>
  );
};

export default GalleryPage;