"use client";

import React from 'react';
import { Row, Col, Typography, Button, Space, ConfigProvider, Statistic, Divider } from 'antd';
import { ArrowRightOutlined, GlobalOutlined, ThunderboltOutlined, TrophyOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const AboutUsPage = () => {
  const brandDark = '#1a202c';
  const accentGold = '#ffc107';

  return (
    <ConfigProvider theme={{ token: { colorPrimary: accentGold, borderRadius: 0 } }}>
      <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingTop: '80px' }}>
        
        {/* --- 1. THE "ULTRA-MODERN" SPLIT HERO --- */}
        <div style={{ background: brandDark, overflow: 'hidden', position: 'relative' }}>
          <Row align="middle" style={{ minHeight: '70vh' }}>
            <Col xs={24} lg={12} style={{ padding: '60px clamp(20px, 8%, 80px)', zIndex: 2 }}>
              <div style={{ borderLeft: `3px solid ${accentGold}`, paddingLeft: '24px' }}>
                <Text style={{ color: accentGold, letterSpacing: '4px', fontWeight: 800, fontSize: '12px', display: 'block', marginBottom: '16px' }}>
                  SINCE 2024
                </Text>
                <Title level={1} style={{ color: '#fff', fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 900, lineHeight: 1, margin: 0 }}>
                  Engineering <br />
                  <span style={{ color: accentGold }}>Humanity.</span>
                </Title>
              </div>
              <Paragraph style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', marginTop: '30px', maxWidth: '480px', lineHeight: 1.8 }}>
                Sri Dhanvantri isn't just a training center. It's a high-precision ecosystem where technology meets the heart of healthcare.
              </Paragraph>
              <Button size="large" icon={<ArrowRightOutlined />} style={{ height: '54px', padding: '0 40px', background: accentGold, color: brandDark, border: 'none', fontWeight: 800, marginTop: '20px' }}>
                START YOUR JOURNEY
              </Button>
            </Col>
            <Col xs={0} lg={12} style={{ height: '70vh', position: 'relative' }}>
              {/* This creates a sharp diagonal cut unique to your theme */}
              <div style={{ 
                position: 'absolute', inset: 0, background: `url('https://images.unsplash.com/photo-1576091160550-2173bdb999ef?q=80&w=2070&auto=format&fit=crop')`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)' 
              }} />
              <div style={{ position: 'absolute', bottom: '40px', left: '10%', background: accentGold, padding: '30px', width: '200px' }}>
                 <Statistic title={<span style={{color: brandDark, fontWeight: 700}}>SUCCESS</span>} value={100} suffix="%" valueStyle={{fontWeight: 900}} />
              </div>
            </Col>
          </Row>
        </div>

        {/* --- 2. THE "NUMBERS" STRIP --- */}
        <div style={{ background: '#f8f9fa', padding: '40px 0', borderBottom: '1px solid #eee' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
            <Row gutter={[40, 40]} justify="space-between">
              {[
                { label: "Expert Mentors", val: "15+" },
                { label: "Modern Labs", val: "04" },
                { label: "Student Intake", val: "250+" },
                { label: "Partners", val: "10+" }
              ].map((s, i) => (
                <Col key={i}>
                  <Space direction="vertical" size={0}>
                    <Text style={{ fontSize: '32px', fontWeight: 900, color: brandDark }}>{s.val}</Text>
                    <Text style={{ fontSize: '11px', fontWeight: 700, color: '#718096', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</Text>
                  </Space>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* --- 3. DYNAMIC MISSION/VISION GRID --- */}
        <div style={{ padding: '80px 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
            <Row gutter={[60, 60]} align="stretch">
              <Col xs={24} lg={12}>
                <Title level={2} style={{ fontWeight: 900, marginBottom: '40px' }}>Our Philosophy</Title>
                <Space direction="vertical" size={40}>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ fontSize: '24px', color: accentGold }}><ThunderboltOutlined /></div>
                    <div>
                      <Title level={4} style={{ margin: 0 }}>The Mission</Title>
                      <Paragraph type="secondary">To disrupt traditional vocational education with 100% immersive clinical exposure.</Paragraph>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ fontSize: '24px', color: accentGold }}><GlobalOutlined /></div>
                    <div>
                      <Title level={4} style={{ margin: 0 }}>The Vision</Title>
                      <Paragraph type="secondary">Building a legacy where our technicians are the first choice for hospitals worldwide.</Paragraph>
                    </div>
                  </div>
                </Space>
              </Col>
              <Col xs={24} lg={12}>
                <div style={{ background: brandDark, padding: '40px', height: '100%', position: 'relative' }}>
                  <TrophyOutlined style={{ fontSize: '80px', color: 'rgba(255,193,7,0.1)', position: 'absolute', top: '20px', right: '20px' }} />
                  <Title level={3} style={{ color: '#fff', marginBottom: '20px' }}>Excellence Verified</Title>
                  <Paragraph style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px' }}>
                    Every student at Sri Dhanvantri undergoes rigorous assessment cycles that mirror the ISO 9001:2015 
                    standards, ensuring that by the time you graduate, you aren't just certified—you are capable.
                  </Paragraph>
                  <Divider style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                  <Text style={{ color: accentGold, fontWeight: 700 }}>ISO 9001:2015 ACCREDITED</Text>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* --- 4. THE "DARK CALL" FOOTER --- */}
        <div style={{ background: brandDark, padding: '80px 0', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
            <Title level={2} style={{ color: '#fff', fontWeight: 900 }}>Ready to join the elite?</Title>
            <Paragraph style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>
              Applications for the inaugural 2026-27 batches are being reviewed. Secure your seat today.
            </Paragraph>
            <Button type="primary" size="large" style={{ height: '50px', background: accentGold, color: brandDark, border: 'none', fontWeight: 800, padding: '0 50px' }}>
              APPLY NOW
            </Button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .ant-statistic-title { margin-bottom: 4px !important; }
        @media (max-width: 768px) {
          .ant-row { text-align: center !important; }
          .ant-space { justify-content: center; }
          div[style*="clipPath"] { display: none; }
        }
      `}</style>
    </ConfigProvider>
  );
};

export default AboutUsPage;