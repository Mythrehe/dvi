'use client';

import React from 'react';
import { Row, Col, Typography, ConfigProvider } from 'antd';
import { PRIMARY_COLOR } from '@/app/common'; // Assuming this is #ffa800 (Orange from image)

const { Title, Text, Paragraph } = Typography;

const DhanvantriScope = () => {
  // Orange Accent Color from image
  const accentOrange = '#ffa800'; 

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: accentOrange,
          fontFamily: "'Inter', 'sans-serif'", // Matching the clean sans-serif style
        },
      }}
    >
      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <Title style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 800, color: '#1a1a1a', margin: 0 }}>
              Nursing, Paramedical <br />
              And Its Scope
            </Title>
          </div>

          <Row gutter={[60, 0]} align="middle">
            {/* LEFT SIDE: Image + Orange Polygon */}
            <Col xs={24} md={10} xl={10}>
              <div style={{ position: 'relative' }}>
                {/* Image Placeholder */}
                <img 
                  src="/scope.png"
                  alt="Sri Dhanvantri Health Care Training Centre Building"
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
                  }} 
                />

                {/* Overlapping Orange Polygon Shape (matches image exactly) */}
                <div style={{
                  position: 'absolute',
                  top: '15%',
                  left: '-30px',
                  width: '60px',
                  height: '180px',
                  background: accentOrange,
                  clipPath: 'polygon(0 0, 100% 15%, 100% 85%, 0 100%)', // Creates the angled geometry
                  zIndex: 2,
                }} />
              </div>
            </Col>

            {/* RIGHT SIDE: Written Content */}
            <Col xs={24} md={14} xl={14} style={{ padding: '20px 0 20px 40px' }}>
              <div style={{ color: '#6d757d', fontSize: '18px', lineHeight: '2.0' }}>
                <Paragraph style={{ marginBottom: '40px' }}>
                  The Paramedical and Nursing professions are the compassionate pillars of the modern health care ecosystem. They represent the vital link between complex medical science and patient care. 
                  Our training center provides the expertise required for patient recovery, emergency response, diagnostic procedures, and hospital operational management.
                  The health care industry has made phenomenal strides globally, and paramedical sciences now stand as a crucial and independent vertical that ensures patient safety and medical precision at every stage.
                  Our graduates are trained to be medical experts in a true sense.
                </Paragraph>

                <Paragraph style={{ marginBottom: '0' }}>
                  A career in Nursing or Paramedical Sciences is not just challenging; it is exceptionally creative and rewarding. By choosing this career path, you contribute directly to building a healthier and resilient society.
                  Tremendous career opportunities are available globally, ranging from Community Clinics and specialized Hospital Nursing to laboratory analysis, surgical technology, and advanced physical therapy.
                  The scope extends beyond clinical practice into academic research, vocational education, institutional administration, and health policy management, creating a dynamic environment for long-term professional growth and global opportunity.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default DhanvantriScope;