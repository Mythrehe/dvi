'use client';

import React from 'react';
import { Typography, Button, Card, Space, ConfigProvider, Col, Row } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

interface Course {
  name: string;
  duration: string;
  seats: string;
}

const DhanvantriCourses = () => {
  const rowOne = [
    { name: 'Health Assistant (Nursing)', duration: '02 years', seats: '50' },
    { name: 'Medical Lab Technician', duration: '02 years', seats: '40' },
    { name: 'Operation Theatre Technician', duration: '02 years', seats: '30' },
    { name: 'Physiotherapy', duration: '02 years', seats: '40' },
  ];

  const rowTwo = [
    { name: 'X-Ray Technician', duration: '02 years', seats: '30' },
    { name: 'Dental Technician', duration: '02 years', seats: '20' },
    { name: 'Eye Technician', duration: '02 years', seats: '20' },
  ];

  const brandDark = '#050c16'; 
  const accentOrange = '#ffa800'; 
  const cardBg = '#f8f7f2';

  const CourseCard = ({ course }: { course: Course }) => (
    <Card 
      variant="borderless"
      style={{ 
        background: cardBg, 
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 0
      }}
      styles={{ body: { padding: '25px 10px' } }}
    >
      <Title level={4} style={{ fontSize: '18px', fontWeight: 800, marginBottom: '15px', color: '#1a1a1a', lineHeight: 1.3 }}>
        {course.name} <br />
        <span style={{ fontSize: '15px', fontWeight: 700 }}>(Diploma)</span>
      </Title>
      <Space direction="vertical" size={0}>
        <Text style={{ display: 'block', fontSize: '13px', color: '#555' }}>
          Duration of course : {course.duration}
        </Text>
        <Text style={{ display: 'block', fontSize: '13px', color: '#555' }}>
          Number of seats : {course.seats}
        </Text>
      </Space>
    </Card>
  );

  return (
    <ConfigProvider theme={{ token: { colorPrimary: accentOrange, borderRadius: 0 } }}>
      <section style={{ 
        display: 'flex', 
        flexWrap: 'wrap', // Allows stacking on mobile
        minHeight: '100vh',
        width: '100%',
        background: '#fff' 
      }}>
        
        {/* LEFT COLUMN: 40% Width */}
        <div style={{ 
          flex: '0 0 40%', 
          background: brandDark, 
          padding: '6% 5%',
          display: 'flex',
          flexDirection: 'column',
          minWidth: '350px' // Ensures it doesn't get too thin
        }}>
          <Space align="center" style={{ marginBottom: '30px' }}>
            <div style={{ width: '25px', height: '2px', background: accentOrange }} />
            <Text style={{ color: '#6d757d', fontWeight: 600, letterSpacing: '2px', fontSize: '13px' }}>
              WHAT WE DO
            </Text>
          </Space>

          <Title style={{ color: '#fff', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '30px' }}>
            Sri Dhanvantri <br />
            Health Care And <br />
            Training Centre <br />
          
          </Title>

          <Paragraph style={{ color: '#6d757d', fontSize: '17px', lineHeight: '1.8', marginBottom: '40px' }}>
            Sri Dhanvantri Health Care and Training Centre, was established to provide excellence in medical vocational education. Our institute is dedicated to training qualified professionals through sophisticated laboratory facilities.
          </Paragraph>

          <Button 
            type="primary" 
            style={{ 
              background: accentOrange, 
              borderColor: accentOrange, 
              color: '#fff',
              fontWeight: 700,
              height: '55px',
              width: '240px',
              fontSize: '15px'
            }}
          >
            DISCOVER MORE
          </Button>
        </div>

        {/* RIGHT COLUMN: 60% Width */}
        <div style={{ 
          flex: '0 0 60%', 
          padding: '5% 3%', 
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Paragraph style={{ color: '#666', fontSize: '15px', lineHeight: '1.8', marginBottom: '40px' }}>
            Our Training Centre is one of the top paramedical institutes in Dharmapuri with sophisticated laboratory facilities and a well-equipped digital library. Students are educated by the best, qualified and experienced teachers.
          </Paragraph>

          {/* Row 1: 4 Cards */}
          <Row gutter={[12, 12]} style={{ marginBottom: '34px' }}>
            {rowOne.map((course, index) => (
              <Col span={6} key={index}>
                <CourseCard course={course} />
              </Col>
            ))}
          </Row>

          {/* Row 2: 3 Cards */}
          <Row gutter={[12, 12]}>
            {rowTwo.map((course, index) => (
              <Col span={8} key={index}>
                <CourseCard course={course} />
              </Col>
            ))}
          </Row>
        </div>

        {/* Scroll Button */}
        <Button 
          shape="circle" 
          icon={<ArrowUpOutlined style={{ color: accentOrange }} />}
          style={{ position: 'fixed', bottom: '30px', right: '30px', width: '45px', height: '45px', zIndex: 10 }}
        />
      </section>

      {/* Basic Mobile Support */}
      <style jsx global>{`
        @media (max-width: 992px) {
          section { flex-direction: column; }
          div { flex: 0 0 100% !important; width: 100% !important; }
          .ant-col-6, .ant-col-8 { span: 24 !important; width: 100% !important; flex: 0 0 100% !important; max-width: 100% !important; }
        }
      `}</style>
    </ConfigProvider>
  );
};

export default DhanvantriCourses;