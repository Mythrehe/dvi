"use client";

import React from 'react';
import { Button, Row, Col, Card, Typography, List, Space, Tag, Divider, ConfigProvider } from 'antd';
import { useRouter } from 'next/navigation';
import { 
  ArrowRightOutlined, 
  SafetyCertificateOutlined,
  GlobalOutlined,
  ThunderboltOutlined,
  MedicineBoxOutlined,
  ExperimentOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const MedicalLabPage = () => {
  const router = useRouter();
  const careerPaths = [
    "Medical Lab Technologist", "Pathology Technician",
    "Clinical Biochemistry Asst.", "Microbiology Technician",
    "Hematology Specialist", "Blood Bank Technician",
    "Molecular Biology Lab Asst.", "Diagnostic Center Manager"
  ];

  const uniquePoints = [
    {
      title: "Advanced Bio-Labs",
      desc: "Train in sophisticated clinical laboratories with modern diagnostic tools.",
      icon: <ExperimentOutlined style={{ color: '#ffc107', fontSize: '24px' }} />
    },
    {
      title: "Diagnostic Mastery",
      desc: "Learn comprehensive testing procedures across Pathology & Biochemistry.",
      icon: <ThunderboltOutlined style={{ color: '#ffc107', fontSize: '24px' }} />
    },
    {
      title: "Clinical Accuracy",
      desc: "Emphasis on precision, quality control, and laboratory safety standards.",
      icon: <GlobalOutlined style={{ color: '#ffc107', fontSize: '24px' }} />
    }
  ];

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#ffc107' } }}>
      <div style={{ backgroundColor: '#fcfcfc', minHeight: '100vh', paddingTop: '80px',marginTop:'-80px' }}>
        
        {/* HERO SECTION */}
        <div className="hero-section" style={{ 
          background: 'linear-gradient(135deg, #ffc107 0%, #f39c12 100%)', 
          padding: 'clamp(40px, 8vw, 80px) 0', 
          textAlign: 'center',
          paddingTop: '100px',
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
            <Tag color="#1a202c" style={{ marginBottom: '16px', borderRadius: '4px', fontWeight: 'bold' }}>
              ACCREDITED PROGRAM
            </Tag>
            <Title level={1} className="hero-title" style={{ 
              color: '#1a202c', 
              fontSize: 'clamp(28px, 5vw, 42px)', 
              fontWeight: '800', 
              marginBottom: '16px',
              lineHeight: 1.2
            }}>
              Diploma in Medical Laboratory Technician
            </Title>
            <Paragraph className="hero-description" style={{ 
              color: '#2d3748', 
              fontSize: 'clamp(16px, 2vw, 18px)', 
              maxWidth: '750px', 
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Master the science of diagnostics and play a critical role in disease detection and patient treatment planning.
            </Paragraph>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="content-section" style={{ 
          maxWidth: '1200px', 
          margin: '40px auto', 
          padding: '0 20px' 
        }}>
          <Row gutter={[32, 32]} align="stretch">
            
            {/* LEFT CARD - Detailed Info */}
            <Col xs={24} lg={15}>
              <Card 
                className="feature-card"
                bordered={false} 
                style={{ 
                  borderRadius: '16px', 
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  height: '100%',
                  padding: 'clamp(10px, 3vw, 24px)'
                }}
              >
                <Title level={3} className="feature-title" style={{ borderLeft: '5px solid #ffc107', paddingLeft: '15px', marginBottom: '32px' }}>
                  The Dhanvantri Edge
                </Title>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  {uniquePoints.map((point, i) => (
                    <div key={i} className="feature-point" style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '20px'
                    }}>
                      <div className="feature-icon" style={{ 
                        background: '#1a202c', 
                        padding: '14px', 
                        borderRadius: '14px',
                        display: 'flex',
                        flexShrink: 0
                      }}>
                        {point.icon}
                      </div>
                      <div>
                        <Title level={5} style={{ margin: '0 0 8px 0', fontSize: '18px' }}>{point.title}</Title>
                        <Text type="secondary" style={{ fontSize: '15px', lineHeight: 1.6 }}>{point.desc}</Text>
                      </div>
                    </div>
                  ))}
                </div>

                <Divider style={{ margin: '40px 0' }} />
                
                <Title level={4} style={{ marginBottom: '20px' }}>Professional Accreditation</Title>
                <Space wrap size="middle">
                  <Tag icon={<SafetyCertificateOutlined />} color="gold" style={{ padding: '4px 12px', fontSize: '13px' }}>ISO 9001:2015</Tag>
                  <Tag icon={<GlobalOutlined />} color="blue" style={{ padding: '4px 12px', fontSize: '13px' }}>Global Standards</Tag>
                </Space>
              </Card>
            </Col>

            {/* RIGHT COLUMN - Admission & Careers */}
            <Col xs={24} lg={9}>
              <Space direction="vertical" size={32} style={{ width: '100%' }}>
                
                {/* ADMISSION CARD */}
                <Card 
                  className="admission-card"
                  bordered={false} 
                  style={{ 
                    borderRadius: '16px', 
                    background: '#1a202c', 
                    textAlign: 'center',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    padding: '20px 10px'
                  }}
                >
                  <Title level={4} style={{ color: '#ffc107', margin: 0, fontSize: '22px' }}>
                    Admission Open
                  </Title>
                  <Text style={{ color: '#a0aec0', display: 'block', margin: '8px 0 24px' }}>
                    Batch 2026-27 is filling fast!
                  </Text>
                  <Button 
                    type="primary" 
                    block 
                    size="large" 
                    icon={<ArrowRightOutlined />}
                    onClick={() => router.push('/registration')}
                    style={{ 
                      height: '54px', 
                      background: '#ffc107', 
                      color: '#1a202c',
                      fontWeight: '800',
                      border: 'none',
                      fontSize: '16px'
                    }}
                  >
                    APPLY NOW
                  </Button>
                </Card>

                {/* CAREER CARD */}
                <Card 
                  title={<span style={{ fontWeight: 800, color: '#1a202c' }}>Career Opportunities</span>} 
                  bordered={false} 
                  style={{ borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                >
                  <List
                    dataSource={careerPaths}
                    renderItem={item => (
                      <List.Item style={{ border: 'none', padding: '10px 0' }}>
                        <Space align="start">
                          <div style={{ width: '8px', height: '8px', background: '#ffc107', borderRadius: '50%', marginTop: '6px' }} />
                          <Text style={{ fontSize: '15px', fontWeight: '500' }}>{item}</Text>
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

      <style jsx>{`
        @media (max-width: 991px) {
          .content-section { margin-top: 24px !important; }
        }
        @media (max-width: 768px) {
          .hero-section { padding: 40px 20px !important; }
          .feature-point { flex-direction: row !important; text-align: left !important; }
        }
        @media (max-width: 576px) {
          .feature-point { flex-direction: column !important; align-items: center !important; text-align: center !important; }
          .feature-icon { margin-bottom: 0 !important; }
          .feature-title { font-size: 20px !important; }
        }
      `}</style>
    </ConfigProvider>
  );
};

export default MedicalLabPage;