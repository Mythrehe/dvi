'use client';

import React from 'react';
import { Row, Col, Typography, Button, Space, Divider } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const DhanvantriScope = () => {
  const brandDark = '#1a202c';
  const accentGold = '#ffc107';
  const brandNavy = '#0d1b2a';

  return (
    <section className="scope-section" style={{
      position: 'relative',
      background: '#fff',
      padding: '30px 0',
      overflow: 'hidden',
    }}>
      <style jsx>{`
        .scope-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          zIndex: 1;
        }
        
        .dhanvantri-blessing-box {
          margin-top: 20px;
          text-align: center;
          padding: 60px 40px;
          background: linear-gradient(to bottom, #ffffff, #fdfbf7);
          border-radius: 8px;
          position: relative;
        }

        .god-image-frame {
          width: 280px;
          height: 350px;
          margin: 0 auto 30px;
          position: relative;
          padding: 10px;
          background: #fff;
          box-shadow: 0 15px 45px rgba(0,0,0,0.15);
          border: 1px solid #eee;
        }

        .god-image-frame::before {
          content: "";
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border: 1px solid ${accentGold};
          z-index: -1;
        }

        .motto-text {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 800;
          color: ${brandNavy};
          letter-spacing: -0.5px;
          margin-top: 10px;
        }

        @media (max-width: 991px) {
          .scope-container { padding: 0 20px; }
          .scope-header { text-align: center; margin-bottom: 40px; }
          .god-image-frame { width: 220px; height: 280px; margin: 0 auto 30px; }
        }
      `}</style>

      {/* Background Pattern */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: `radial-gradient(circle at 10% 20%, rgba(255,193,7,0.03) 0%, transparent 40%)`,
        pointerEvents: 'none',
      }} />

      <div className="scope-container">
        <Row gutter={[48, 40]} align="middle">
          {/* LEFT SIDE: Image & Title */}
          <Col xs={24} lg={10}>
            <div className="scope-header" style={{ marginBottom: '40px' }}>
              <Space align="center" style={{ marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '2px', background: accentGold }} />
                <Text style={{ color: brandDark, fontWeight: 700, letterSpacing: '2px', fontSize: '12px', textTransform: 'uppercase' }}>
                  About The Field
                </Text>
              </Space>

              <Title style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: brandDark, margin: 0, lineHeight: 1.2 }}>
                Nursing, Paramedical <br />
                <span style={{ color: accentGold }}>And Its Scope</span>
              </Title>
            </div>

            <div style={{ position: 'relative', maxWidth: '100%' }}>
              <div style={{ position: 'relative', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.12)', borderRadius: '4px' }}>
                <img src="/scope.png" alt="Sri Dhanvantri Scope" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
          </Col>

          {/* RIGHT SIDE: Content */}
          <Col xs={24} lg={14}>
            <div style={{ width: '100%' }}>
              <Paragraph style={{ color: '#444', fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                The <strong style={{ color: brandDark }}>Paramedical and Nursing</strong> professions are the compassionate pillars of the modern health care ecosystem. They represent the vital link between complex medical science and <span style={{ color: accentGold, fontWeight: 600 }}>patient-centered care</span>.
              </Paragraph>

              <div style={{ background: brandDark, padding: '24px', marginBottom: '24px', borderLeft: `4px solid ${accentGold}` }}>
                <Paragraph style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>
                  "A career in Nursing or Paramedical Sciences is not just challenging; it is exceptionally creative and rewarding."
                </Paragraph>
              </div>

              <Space size="middle" wrap style={{ marginBottom: '40px' }}>
                <Button type="primary" size="large" style={{ background: accentGold, borderColor: accentGold, color: brandDark, fontWeight: 700, borderRadius: 0 }}>
                  Explore Careers
                </Button>
                <Button type="default" size="large" icon={<ArrowRightOutlined />} style={{ borderColor: brandDark, color: brandDark, fontWeight: 600, borderRadius: 0 }}>
                  Learn More
                </Button>
              </Space>

              <div style={{ display: 'flex', gap: '32px', paddingTop: '24px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                {[
                  { label: 'Opportunities', val: 'Global' },
                  { label: 'Demand', val: 'High' }
                ].map((stat, i) => (
                  <div key={i}>
                    <Text style={{ display: 'block', color: accentGold, fontSize: '24px', fontWeight: 800, lineHeight: 1 }}>{stat.val}</Text>
                    <Text style={{ color: '#666', fontSize: '12px', textTransform: 'uppercase' }}>{stat.label}</Text>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* DHANVANTRI GOD SECTION */}
        <div className="dhanvantri-blessing-box">
          <div className="god-image-frame">
             <img 
              src="/dvi.jpg" 
              alt="Lord Dhanvantari - The Divine Physician" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          
          <Text style={{ color: accentGold, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '14px' }}>
            Empowering the Healers of Tomorrow
          </Text>
          
          <div className="motto-text">
            GUIDED BY TRADITION, <span style={{ color: accentGold }}>TRAINED FOR LIFE</span>
          </div>
          
          <Divider style={{ width: '80px', minWidth: '80px', margin: '25px auto', backgroundColor: accentGold, height: '2px' }} />
          
          <Paragraph style={{ maxWidth: '750px', margin: '0 auto', color: '#555', fontSize: '17px', lineHeight: '1.6' }}>
            Rooted in the legacy of <strong>Lord Dhanvantri</strong>, our institute bridges the gap between 
            ancient compassion and modern paramedical precision. We don't just teach medicine; 
            we nurture the hands that heal.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default DhanvantriScope;