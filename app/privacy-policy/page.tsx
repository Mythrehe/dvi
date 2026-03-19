"use client";

import React from 'react';
import { Typography, Card, Space, Divider, ConfigProvider, Timeline } from 'antd';
import { 
  SafetyOutlined, 
  UserOutlined, 
  DatabaseOutlined, 
  EyeOutlined,
  LockOutlined,
  MailOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const PrivacyPolicyPage = () => {
  const brandDark = '#1a202c';
  const accentGold = '#ffc107';

  const lastUpdated = "March 17, 2026";

  return (
    <ConfigProvider theme={{ token: { colorPrimary: accentGold } }}>
      <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingTop: '80px', marginTop:'-80px' }}>
        
        {/* --- HERO SECTION --- */}
        <div style={{ 
          position: 'relative',
          background: brandDark,
          padding: '60px 0 100px',
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
                Legal Information
              </Text>
              <div style={{ width: '30px', height: '2px', background: accentGold }} />
            </Space>
            
            <div style={{ fontSize: '48px', color: accentGold, marginBottom: '16px' }}>
              <SafetyOutlined />
            </div>
            
            <Title level={1} style={{ 
              color: '#fff', 
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800, 
              margin: 0,
              lineHeight: 1.2
            }}>
              Privacy <span style={{ color: accentGold }}>Policy</span>
            </Title>
            
            <Paragraph style={{ 
              color: 'rgba(255,255,255,0.8)', 
              fontSize: '16px',
              marginTop: '15px', 
              maxWidth: '650px', 
              margin: '15px auto 0', 
              lineHeight: 1.6
            }}>
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </Paragraph>
            
            <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>
              Last updated: {lastUpdated}
            </Text>
          </div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px' }}>
          
          {/* Introduction */}
          <Card bordered={false} style={{ marginBottom: '24px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
            <Title level={3} style={{ color: brandDark, marginBottom: '16px' }}>
              <Space><UserOutlined /> Introduction</Space>
            </Title>
            <Paragraph style={{ fontSize: '15px', lineHeight: '1.7', color: '#4a5568' }}>
              Sri Dhanvantri Healthcare Training Institute ("we," "our," or "us") is committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our educational services.
            </Paragraph>
            <Paragraph style={{ fontSize: '15px', lineHeight: '1.7', color: '#4a5568' }}>
              By using our website and services, you consent to the collection and use of information in accordance with this policy.
            </Paragraph>
          </Card>

          {/* Information We Collect */}
          <Card bordered={false} style={{ marginBottom: '24px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
            <Title level={3} style={{ color: brandDark, marginBottom: '16px' }}>
              <Space><DatabaseOutlined /> Information We Collect</Space>
            </Title>
            
            <div style={{ marginBottom: '20px' }}>
              <Title level={5} style={{ color: accentGold, marginBottom: '8px' }}>Personal Information</Title>
              <Paragraph style={{ fontSize: '15px', lineHeight: '1.7', color: '#4a5568', margin: 0 }}>
                Name, email address, phone number, date of birth, address, educational background, and other contact details you provide during registration or inquiry.
              </Paragraph>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <Title level={5} style={{ color: accentGold, marginBottom: '8px' }}>Academic Information</Title>
              <Paragraph style={{ fontSize: '15px', lineHeight: '1.7', color: '#4a5568', margin: 0 }}>
                Course enrollment details, academic records, attendance, assessment results, and progress reports.
              </Paragraph>
            </div>

            <div>
              <Title level={5} style={{ color: accentGold, marginBottom: '8px' }}>Technical Information</Title>
              <Paragraph style={{ fontSize: '15px', lineHeight: '1.7', color: '#4a5568', margin: 0 }}>
                IP address, browser type, device information, access times, and pages viewed to improve our services and website functionality.
              </Paragraph>
            </div>
          </Card>

          {/* How We Use Your Information */}
          <Card bordered={false} style={{ marginBottom: '24px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
            <Title level={3} style={{ color: brandDark, marginBottom: '16px' }}>
              <Space><EyeOutlined /> How We Use Your Information</Space>
            </Title>
            
            <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '15px', lineHeight: '1.7' }}>
              <li style={{ marginBottom: '8px' }}>To process applications and enrollments in our educational programs</li>
              <li style={{ marginBottom: '8px' }}>To provide educational services and academic support</li>
              <li style={{ marginBottom: '8px' }}>To communicate important updates and administrative information</li>
              <li style={{ marginBottom: '8px' }}>To maintain academic records and generate certificates</li>
              <li style={{ marginBottom: '8px' }}>To improve our website and educational offerings</li>
              <li style={{ marginBottom: '8px' }}>To comply with legal and regulatory requirements</li>
              <li>To ensure campus safety and security</li>
            </ul>
          </Card>

          {/* Data Protection */}
          <Card bordered={false} style={{ marginBottom: '24px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
            <Title level={3} style={{ color: brandDark, marginBottom: '16px' }}>
              <Space><LockOutlined /> Data Protection & Security</Space>
            </Title>
            <Paragraph style={{ fontSize: '15px', lineHeight: '1.7', color: '#4a5568' }}>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. These include:
            </Paragraph>
            <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '15px', lineHeight: '1.7' }}>
              <li style={{ marginBottom: '8px' }}>Secure servers and encrypted data transmission</li>
              <li style={{ marginBottom: '8px' }}>Restricted access to personal information</li>
              <li style={{ marginBottom: '8px' }}>Regular security audits and updates</li>
              <li>Staff training on data protection practices</li>
            </ul>
            <Paragraph style={{ fontSize: '15px', lineHeight: '1.7', color: '#4a5568', marginTop: '16px' }}>
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </Paragraph>
          </Card>

          {/* Your Rights */}
          <Card bordered={false} style={{ marginBottom: '24px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
            <Title level={3} style={{ color: brandDark, marginBottom: '16px' }}>
              Your Rights
            </Title>
            <Paragraph style={{ fontSize: '15px', lineHeight: '1.7', color: '#4a5568' }}>
              You have the right to:
            </Paragraph>
            <ul style={{ paddingLeft: '20px', color: '#4a5568', fontSize: '15px', lineHeight: '1.7' }}>
              <li style={{ marginBottom: '8px' }}>Access and obtain a copy of your personal information</li>
              <li style={{ marginBottom: '8px' }}>Request correction of inaccurate information</li>
              <li style={{ marginBottom: '8px' }}>Request deletion of your personal information (subject to legal requirements)</li>
              <li style={{ marginBottom: '8px' }}>Object to processing of your information</li>
              <li>Request data portability</li>
            </ul>
            <Paragraph style={{ fontSize: '15px', lineHeight: '1.7', color: '#4a5568', marginTop: '16px' }}>
              To exercise these rights, please contact us using the information below.
            </Paragraph>
          </Card>

          {/* Contact Information */}
          <Card bordered={false} style={{ marginBottom: '24px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
            <Title level={3} style={{ color: brandDark, marginBottom: '16px' }}>
              <Space><MailOutlined /> Contact Us</Space>
            </Title>
            <Paragraph style={{ fontSize: '15px', lineHeight: '1.7', color: '#4a5568' }}>
              If you have any questions about this Privacy Policy or want to exercise your rights, please contact us:
            </Paragraph>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginTop: '16px' }}>
              <Paragraph style={{ margin: 0, fontSize: '15px', lineHeight: '1.7', color: '#4a5568' }}>
                <strong>Sri Dhanvantri Healthcare Training Institute</strong><br />
                Dharmapuri, Tamil Nadu, India<br />
                Email: karthigayanc54@gmail.com<br />
                Phone: +91-9629146563
              </Paragraph>
            </div>
          </Card>

          {/* Policy Updates */}
          <Card bordered={false} style={{ borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
            <Title level={3} style={{ color: brandDark, marginBottom: '16px' }}>
              Policy Updates
            </Title>
            <Paragraph style={{ fontSize: '15px', lineHeight: '1.7', color: '#4a5568' }}>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy 
              on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically 
              for any changes.
            </Paragraph>
          </Card>

        </div>
      </div>
    </ConfigProvider>
  );
};

export default PrivacyPolicyPage;
