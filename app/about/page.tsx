"use client";

import React from 'react';
import { Row, Col, Typography, Card, Space, Divider, ConfigProvider, Timeline, Statistic } from 'antd';
import { 
  HistoryOutlined, 
  AimOutlined, 
  EyeOutlined, 
  TeamOutlined, 
  SafetyCertificateOutlined,
  CompassOutlined 
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const AboutUsPage = () => {
  const brandDark = '#1a202c';
  const accentGold = '#ffc107';

  const coreValues = [
    {
      title: "Clinical Excellence",
      desc: "Rigorous medical training exceeding industry standards.",
      icon: <SafetyCertificateOutlined />
    },
    {
      title: "Compassionate Care",
      desc: "Instilling the human touch essential for paramedical roles.",
      icon: <TeamOutlined />
    },
    {
      title: "Innovation",
      desc: "Modern simulation labs and digital learning resources.",
      icon: <AimOutlined />
    }
  ];

  return (
    <ConfigProvider theme={{ token: { colorPrimary: accentGold } }}>
      <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingTop: '80px',marginTop:'-80px'}}>
        
        {/* --- TIGHTENED HERO SECTION --- */}
        <div style={{ 
          position: 'relative',
          background: brandDark,
          padding: '60px 0 100px', // Reduced padding
          paddingTop: '100px',
          textAlign: 'center',
          color: '#fff',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(255,193,7,0.1) 0%, transparent 70%)',
            borderRadius: '50%', zIndex: 1
          }} />

          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 5 }}>
            <Space align="center" style={{ marginBottom: '12px' }}>
              <div style={{ width: '30px', height: '2px', background: accentGold }} />
              <Text style={{ color: accentGold, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px' }}>
                Since 2024
              </Text>
              <div style={{ width: '30px', height: '2px', background: accentGold }} />
            </Space>
            
            <Title level={1} style={{ 
              color: '#fff', 
              fontSize: 'clamp(28px, 4vw, 48px)', // Reduced size
              fontWeight: 800, 
              margin: 0,
              lineHeight: 1.2
            }}>
              Defining the Future of <br />
              <span style={{ color: accentGold }}>Healthcare Education</span>
            </Title>
            
            <Paragraph style={{ 
              color: 'rgba(255,255,255,0.8)', 
              fontSize: '16px', // Reduced size
              marginTop: '15px', 
              maxWidth: '650px', 
              margin: '15px auto 0', 
              lineHeight: 1.6
            }}>
              Sri Dhanvantri Healthcare Training Institute is a modern beacon of clinical learning, dedicated to crafting the medical heroes of tomorrow.
            </Paragraph>
          </div>
        </div>

        {/* --- COMPACT VISION & MISSION --- */}
        <div style={{ maxWidth: '1100px', margin: '-50px auto 40px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
          <Row gutter={[20, 20]}>
            <Col xs={24} md={12}>
              <Card 
                bordered={false} 
                style={{ borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)', height: '100%' }}
                bodyStyle={{ padding: '24px' }}
              >
                <div style={{ fontSize: '24px', color: accentGold, marginBottom: '12px' }}><EyeOutlined /></div>
                <Title level={4} style={{ marginBottom: '8px' }}>Our Vision</Title>
                <Paragraph style={{ fontSize: '14px', color: '#4a5568', lineHeight: '1.6', margin: 0 }}>
                  To establish a global benchmark in paramedical training where technology meets empathy, ensuring every graduate is a pioneer.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card 
                bordered={false} 
                style={{ borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)', height: '100%' }}
                bodyStyle={{ padding: '24px' }}
              >
                <div style={{ fontSize: '24px', color: accentGold, marginBottom: '12px' }}><CompassOutlined /></div>
                <Title level={4} style={{ marginBottom: '8px' }}>Our Mission</Title>
                <Paragraph style={{ fontSize: '14px', color: '#4a5568', lineHeight: '1.6', margin: 0 }}>
                  To provide an immersive, hands-on learning ecosystem that equips students with advanced technical skills and ethics.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>

        {/* --- STORY SECTION (Tighter Gaps) --- */}
        <div style={{ padding: '40px 0', backgroundColor: '#fcfcfc' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
            <Row gutter={[40, 40]} align="middle">
              <Col xs={24} lg={13}>
                <Title level={2} style={{ color: brandDark, fontWeight: 800, fontSize: '30px', marginBottom: '16px' }}>The Dhanvantri Story</Title>
                <Paragraph style={{ fontSize: '15px', lineHeight: '1.7', color: '#4a5568' }}>
                  Founded in 2024, Sri Dhanvantri Healthcare Training Institute was born from a vision to revolutionize vocational medical education in Dharmapuri.
                </Paragraph>
                <Paragraph style={{ fontSize: '15px', lineHeight: '1.7', color: '#4a5568', marginBottom: '24px' }}>
                  We provide a modern curriculum that prioritizes **Practical Competence**. Our facilities mirror real-world hospital environments for day-one excellence.
                </Paragraph>
                
                <div style={{ 
                  display: 'flex', gap: '20px', padding: '20px', background: '#fff', borderRadius: '12px', 
                  boxShadow: '0 4px 15px rgba(0,0,0,0.04)', flexWrap: 'wrap'
                }}>
                  <Statistic title="Intake" value={250} suffix="+" valueStyle={{ fontSize: '20px', fontWeight: 700 }} />
                  <Divider type="vertical" style={{ height: '40px' }} />
                  <Statistic title="Faculty" value={15} suffix="+" valueStyle={{ fontSize: '20px', fontWeight: 700 }} />
                  <Divider type="vertical" style={{ height: '40px' }} />
                  <Statistic title="Placement" value={100} suffix="%" valueStyle={{ fontSize: '20px', fontWeight: 700, color: '#52c41a' }} />
                </div>
              </Col>
              
              <Col xs={24} lg={11}>
                <Card bordered={false} style={{ background: brandDark, borderRadius: '16px' }} bodyStyle={{ padding: '24px' }}>
                  <Title level={5} style={{ color: accentGold, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <HistoryOutlined /> Journey Milestones
                  </Title>
                  <Timeline 
                    items={[
                      { color: accentGold, children: <span style={{color:'#fff', fontSize: '13px'}}>JAN 2024: Inauguration</span> },
                      { color: accentGold, children: <span style={{color:'#fff', fontSize: '13px'}}>MAR 2024: Labs Functional</span> },
                      { color: accentGold, children: <span style={{color:'#fff', fontSize: '13px'}}>JUN 2024: First Enrollment</span> },
                    ]}
                    style={{ marginLeft: '10px' }}
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        {/* --- CORE VALUES (Clean & Compact) --- */}
        <div style={{ padding: '60px 0', textAlign: 'center' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
            <Title level={3} style={{ fontWeight: 800 }}>Values That Define Us</Title>
            <Divider style={{ width: '40px', minWidth: '40px', margin: '12px auto 40px', background: accentGold, height: '3px' }} />
            
            <Row gutter={[24, 24]}>
              {coreValues.map((val, i) => (
                <Col xs={24} sm={8} key={i}>
                  <div style={{ padding: '10px' }}>
                    <div style={{ 
                      width: '56px', height: '56px', background: brandDark, 
                      color: accentGold, borderRadius: '50%', margin: '0 auto 16px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '24px'
                    }}>
                      {val.icon}
                    </div>
                    <Title level={5} style={{ fontSize: '16px', marginBottom: '8px' }}>{val.title}</Title>
                    <Text type="secondary" style={{ fontSize: '13px', lineHeight: '1.4' }}>{val.desc}</Text>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .ant-timeline-item-tail { border-inline-start: 1px dashed rgba(255,193,7,0.3) !important; }
        .ant-statistic-title { color: #718096 !important; font-weight: 700 !important; font-size: 10px !important; letter-spacing: 0.5px; margin-bottom: 2px !important; }
        .ant-timeline-item { padding-bottom: 15px !important; }
      `}</style>
    </ConfigProvider>
  );
};

export default AboutUsPage;