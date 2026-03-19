'use client';

import React from 'react';
import { Row, Col, Typography, Button, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const DhanvantriScope = () => {
  const brandDark = '#1a202c';
  const accentGold = '#ffc107';

  return (
    <section className="scope-section" style={{
      position: 'relative',
      background: '#fff',
      padding: '60px 0',
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
        
        @media (max-width: 991px) {
          .scope-container {
            padding: 0 20px;
          }
          .scope-header {
            text-align: center;
            margin-bottom: 40px;
          }
          .scope-header :global(.ant-space) {
            justify-content: center;
            width: 100%;
          }
          .decorative-accents {
            display: none;
          }
          .highlight-stats {
            justify-content: center;
            text-align: center;
            gap: 20px !important;
          }
          .cta-space {
            justify-content: center;
            width: 100%;
          }
        }

        @media (max-width: 576px) {
          .highlight-stats {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 10% 20%, rgba(255,193,7,0.03) 0%, transparent 40%),
          radial-gradient(circle at 90% 80%, rgba(26,32,44,0.02) 0%, transparent 40%)
        `,
        pointerEvents: 'none',
      }} />

      {/* Top accent bar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: `linear-gradient(90deg, transparent 0%, ${accentGold} 50%, transparent 100%)`,
      }} />

      <div className="scope-container">
        <Row gutter={[48, 40]} align="middle">
          {/* LEFT SIDE: Image & Title */}
          <Col xs={24} lg={10}>
            <div className="scope-header" style={{ marginBottom: '40px' }}>
              <Space align="center" style={{ marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '2px', background: accentGold }} />
                <Text style={{
                  color: brandDark,
                  fontWeight: 700,
                  letterSpacing: '2px',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                }}>
                  About The Field
                </Text>
              </Space>

              <Title style={{
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 800,
                color: brandDark,
                margin: 0,
                lineHeight: 1.2,
              }}>
                Nursing, Paramedical <br />
                <span style={{ color: accentGold }}>And Its Scope</span>
              </Title>
            </div>

            <div style={{ position: 'relative', maxWidth: '100%' }}>
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
                borderRadius: '4px'
              }}>
                <img
                  src="/scope.png"
                  alt="Sri Dhanvantri Scope"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                />
              </div>

              {/* Decorative elements - hidden on mobile via class */}
              <div className="decorative-accents">
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '-20px',
                  width: '40px',
                  height: '120px',
                  background: accentGold,
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  boxShadow: '0 5px 20px rgba(255,193,7,0.3)',
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '-15px',
                  width: '80px',
                  height: '80px',
                  background: brandDark,
                  zIndex: -1,
                }} />
              </div>
            </div>
          </Col>

          {/* RIGHT SIDE: Content */}
          <Col xs={24} lg={14}>
            <div style={{ width: '100%' }}>
              <Paragraph style={{
                color: '#444',
                fontSize: '16px',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}>
                The <strong style={{ color: brandDark }}>Paramedical and Nursing</strong> professions are the compassionate pillars of the modern health care ecosystem. They represent the vital link between complex medical science and <span style={{ color: accentGold, fontWeight: 600 }}>patient-centered care</span>.
              </Paragraph>

              <Paragraph style={{
                color: '#444',
                fontSize: '16px',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}>
                Our training center provides the expertise required for patient recovery, emergency response, diagnostic procedures, and hospital operational management.
              </Paragraph>

              {/* Highlight box */}
              <div style={{
                background: brandDark,
                padding: '24px',
                marginBottom: '24px',
                position: 'relative',
                borderLeft: `4px solid ${accentGold}`,
              }}>
                <Paragraph style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '15px',
                  lineHeight: '1.7',
                  margin: 0,
                  fontStyle: 'italic',
                }}>
                  "A career in Nursing or Paramedical Sciences is not just challenging; it is exceptionally creative and rewarding."
                </Paragraph>
              </div>

              {/* CTA Buttons */}
              <Space size="middle" wrap className="cta-space" style={{ marginBottom: '40px' }}>
                <Button
                  type="primary"
                  size="large"
                  style={{
                    background: accentGold,
                    borderColor: accentGold,
                    color: brandDark,
                    fontWeight: 700,
                    borderRadius: 0,
                    boxShadow: '0 8px 25px rgba(255,193,7,0.3)',
                  }}
                >
                  Explore Careers
                </Button>

                <Button
                  type="default"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  style={{
                    borderColor: brandDark,
                    color: brandDark,
                    fontWeight: 600,
                    borderRadius: 0,
                  }}
                >
                  Learn More
                </Button>
              </Space>

              {/* Key highlights Stats */}
              <div className="highlight-stats" style={{
                display: 'flex',
                gap: '32px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(0,0,0,0.08)',
              }}>
                {[
                  { label: 'Opportunities', val: 'Global' },
                  { label: 'Specializations', val: 'Multi' },
                  { label: 'Demand', val: 'High' }
                ].map((stat, i) => (
                  <div key={i}>
                    <Text style={{
                      display: 'block',
                      color: accentGold,
                      fontSize: '24px',
                      fontWeight: 800,
                      lineHeight: 1,
                    }}>
                      {stat.val}
                    </Text>
                    <Text style={{
                      color: '#666',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}>
                      {stat.label}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default DhanvantriScope;