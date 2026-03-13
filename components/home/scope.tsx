'use client';

import React from 'react';
import { Row, Col, Typography, Button, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const DhanvantriScope = () => {
  const brandDark = '#1a202c';
  const accentGold = '#ffc107';

  return (
    <section style={{
      position: 'relative',
      background: '#fff',
      padding: '50px 0',
      overflow: 'hidden',
    }}>
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

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 40px',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Section Header */}


        <Row gutter={[48, 40]} align="middle">
          {/* LEFT SIDE: Image - TIGHTER ALIGNMENT */}
          <Col xs={24} lg={10}>
            <div style={{ marginBottom: '60px' }}>
              <Space align="center" style={{ marginBottom: '16px' }}>
                <div style={{
                  width: '40px',
                  height: '2px',
                  background: accentGold,
                }} />
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
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 800,
                color: brandDark,
                margin: 0,
                lineHeight: 1.2,
              }}>
                Nursing, Paramedical <br />
                <span style={{ color: accentGold }}>And Its Scope</span>
              </Title>
            </div>
            <div style={{
              position: 'relative',
              maxWidth: '100%',
            }}>
              {/* Main image container - Removed excessive margins */}
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
              }}>
                <img
                  src="/scope.png"
                  alt="Sri Dhanvantri Health Care Training Centre"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />

                {/* Subtle overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(26,32,44,0.08) 0%, transparent 50%)',
                  pointerEvents: 'none',
                }} />
              </div>

              {/* Gold bar - Moved closer to image */}
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

              {/* Dark accent - Smaller and closer */}
              <div style={{
                position: 'absolute',
                bottom: '-15px',
                right: '-15px',
                width: '80px',
                height: '80px',
                background: brandDark,
                zIndex: -1,
              }} />

              {/* Corner accent - Tighter */}
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                width: '30px',
                height: '30px',
                borderTop: `2px solid ${accentGold}`,
                borderRight: `2px solid ${accentGold}`,
              }} />
            </div>
          </Col>

          {/* RIGHT SIDE: Content - Better alignment */}
          <Col xs={24} lg={14}>
            <div style={{ paddingLeft: '0px' }}>
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
                Our training center provides the expertise required for patient recovery, emergency response, diagnostic procedures, and hospital operational management. The health care industry has made phenomenal strides globally, and paramedical sciences now stand as a crucial and independent vertical.
              </Paragraph>

              {/* Highlight box - Tighter */}
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
                  "A career in Nursing or Paramedical Sciences is not just challenging; it is exceptionally creative and rewarding. By choosing this path, you contribute directly to building a healthier and more resilient society."
                </Paragraph>

                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '16px',
                  fontSize: '48px',
                  color: accentGold,
                  opacity: 0.2,
                  fontFamily: 'serif',
                  lineHeight: 1,
                }}>
                  "
                </div>
              </div>

              <Paragraph style={{
                color: '#444',
                fontSize: '16px',
                lineHeight: '1.8',
                marginBottom: '32px',
              }}>
                Tremendous career opportunities are available globally, ranging from <strong>Community Clinics</strong> and specialized <strong>Hospital Nursing</strong> to laboratory analysis, surgical technology, and advanced physical therapy. The scope extends into academic research, vocational education, and health policy management.
              </Paragraph>

              {/* CTA Buttons */}
              <Space size="middle">
                <Button
                  type="primary"
                  size="large"
                  style={{
                    background: accentGold,
                    borderColor: accentGold,
                    color: brandDark,
                    fontWeight: 700,
                    height: '46px',
                    padding: '0 28px',
                    fontSize: '13px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    borderRadius: 0,
                    boxShadow: '0 8px 25px rgba(255,193,7,0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = brandDark;
                    e.currentTarget.style.color = accentGold;
                    e.currentTarget.style.borderColor = brandDark;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = accentGold;
                    e.currentTarget.style.color = brandDark;
                    e.currentTarget.style.borderColor = accentGold;
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
                    height: '46px',
                    padding: '0 28px',
                    fontSize: '13px',
                    borderRadius: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = brandDark;
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = brandDark;
                  }}
                >
                  Learn More
                </Button>
              </Space>

              {/* Key highlights - Tighter spacing */}
              <div style={{
                display: 'flex',
                gap: '32px',
                marginTop: '40px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(0,0,0,0.08)',
              }}>
                <div>
                  <Text style={{
                    display: 'block',
                    color: accentGold,
                    fontSize: '24px',
                    fontWeight: 800,
                    lineHeight: 1,
                  }}>
                    Global
                  </Text>
                  <Text style={{
                    color: '#666',
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}>
                    Opportunities
                  </Text>
                </div>
                <div>
                  <Text style={{
                    display: 'block',
                    color: accentGold,
                    fontSize: '24px',
                    fontWeight: 800,
                    lineHeight: 1,
                  }}>
                    Multi
                  </Text>
                  <Text style={{
                    color: '#666',
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}>
                    Specializations
                  </Text>
                </div>
                <div>
                  <Text style={{
                    display: 'block',
                    color: accentGold,
                    fontSize: '24px',
                    fontWeight: 800,
                    lineHeight: 1,
                  }}>
                    High
                  </Text>
                  <Text style={{
                    color: '#666',
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}>
                    Demand
                  </Text>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default DhanvantriScope;