"use client";

import React from 'react';
import { Button, Row, Col, Card, Typography, List, Space, Tag, Divider, ConfigProvider } from 'antd';
import { 
  ArrowRightOutlined, 
  SafetyCertificateOutlined,
  GlobalOutlined,
  ThunderboltOutlined,
  HeartOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const NursingPage = () => {
  const careerPaths = [
    "Hospital Nursing Assistant", "Clinic Healthcare Assistant",
    "Long-term Care Facility Aide", "Home Health Care Provider",
    "Rehabilitation Center Assistant", "Emergency Room Support Staff",
    "Outpatient Care Coordinator", "Community Health Worker"
  ];

  const uniquePoints = [
    {
      title: "Smart-Ward Simulation",
      desc: "Train in a high-fidelity environment that mimics modern ICU setups.",
      icon: <ThunderboltOutlined style={{ color: '#ffc107' }} />
    },
    {
      title: "Holistic Care Protocol",
      desc: "Beyond medicine, we focus on psychological support and patient empathy.",
      icon: <HeartOutlined style={{ color: '#ffc107' }} />
    },
    {
      title: "Global Standards",
      desc: "Curriculum aligned with international healthcare assistant benchmarks.",
      icon: <GlobalOutlined style={{ color: '#ffc107' }} />
    }
  ];

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#ffc107' } }}>
      {/* Container with padding top to account for fixed header (usually 80px) */}
      <div style={{ backgroundColor: '#fcfcfc', minHeight: '100vh', paddingTop: '80px' }}>
        
        {/* HERO SECTION - NO OVERLAP */}
        <div style={{ 
          background: 'linear-gradient(135deg, #ffc107 0%, #f39c12 100%)', 
          padding: '80px 0', 
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
            <Tag color="#1a202c" style={{ marginBottom: '16px', borderRadius: '4px' }}>
              ACCREDITED PROGRAM
            </Tag>
            <Title level={1} style={{ 
              color: '#1a202c', 
              fontSize: 'clamp(24px, 6vw, 42px)', // Responsive text
              fontWeight: '800', 
              marginBottom: '16px' 
            }}>
              Diploma in Health Assistant (Nursing)
            </Title>
            <Paragraph style={{ color: '#2d3748', fontSize: '18px', maxWidth: '750px', margin: '0 auto' }}>
              Master the art of clinical support and patient advocacy in our industry-leading nursing program.
            </Paragraph>
          </div>
        </div>

        {/* CONTENT SECTION - POSITIVE MARGIN ENSURES NO TOUCHING */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '40px auto', // Changed from -50px to +40px to separate from Hero
          padding: '0 20px' 
        }}>
          <Row gutter={[24, 24]}>
            
            {/* LEFT CARD - Detailed Info */}
            <Col xs={24} lg={15}>
              <Card 
                variant="borderless" 
                style={{ 
                  borderRadius: '16px', 
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  height: '100%' 
                }}
              >
                <Title level={3} style={{ borderLeft: '4px solid #ffc107', paddingLeft: '15px' }}>
                  The Dhanvantri Edge
                </Title>
                
                <div style={{ marginTop: '30px' }}>
                  {uniquePoints.map((point, i) => (
                    <div key={i} style={{ marginBottom: '24px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                      <div style={{ 
                        background: '#1a202c', 
                        padding: '12px', 
                        borderRadius: '12px',
                        display: 'flex',
                        flexShrink: 0
                      }}>
                        {point.icon}
                      </div>
                      <div>
                        <Title level={5} style={{ margin: 0, fontSize: '16px' }}>{point.title}</Title>
                        <Text type="secondary" style={{ fontSize: '14px' }}>{point.desc}</Text>
                      </div>
                    </div>
                  ))}
                </div>

                <Divider />
                <Title level={4}>Professional Accreditation</Title>
                <Space wrap>
                  <Tag icon={<SafetyCertificateOutlined />} color="gold">ISO 9001:2015</Tag>
                  <Tag icon={<GlobalOutlined />} color="blue">Global Standards</Tag>
                </Space>
              </Card>
            </Col>

            {/* RIGHT COLUMN - Stacked Cards */}
            <Col xs={24} lg={9}>
              <Space direction="vertical" size={24} style={{ width: '100%' }}>
                
                {/* ADMISSION CARD */}
                <Card 
                  variant="borderless" 
                  style={{ 
                    borderRadius: '16px', 
                    background: '#1a202c', 
                    textAlign: 'center',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)' 
                  }}
                >
                  <Title level={4} style={{ color: '#ffc107', margin: 0 }}>Admission Open</Title>
                  <Text style={{ color: '#a0aec0' }}>Batch 2026-27 is filling fast!</Text>
                  <Button 
                    type="primary" 
                    block 
                    size="large" 
                    icon={<ArrowRightOutlined />}
                    style={{ 
                      marginTop: '24px', 
                      height: '50px', 
                      background: '#ffc107', 
                      color: '#1a202c',
                      fontWeight: '700',
                      border: 'none'
                    }}
                  >
                    APPLY NOW
                  </Button>
                </Card>

                {/* CAREER CARD */}
                <Card 
                  title={<span style={{ fontWeight: 700 }}>Career Opportunities</span>} 
                  variant="borderless" 
                  style={{ borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                >
                  <List
                    dataSource={careerPaths}
                    renderItem={item => (
                      <List.Item style={{ border: 'none', padding: '8px 0' }}>
                        <Space>
                          <div style={{ width: '6px', height: '6px', background: '#ffc107', borderRadius: '50%' }} />
                          <Text style={{ fontSize: '14px' }}>{item}</Text>
                        </Space>
                      </List.Item>
                    )}
                  />
                </Card>

              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default NursingPage;