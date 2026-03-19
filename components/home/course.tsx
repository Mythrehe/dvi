"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Typography, Button, Space, ConfigProvider, Col, Row } from 'antd';
import { 
  ArrowUpOutlined, MedicineBoxOutlined, ExperimentOutlined, 
  ScanOutlined, EyeOutlined, UserOutlined, ArrowRightOutlined, 
  HeartOutlined, DownOutlined 
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

interface Course {
  name: string;
  subtitle: string;
  duration: string;
  seats: string;
  icon: React.ReactNode;
}

const DhanvantriCourses = () => {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const brandDark = '#1a202c';
  const accentGold = '#ffc107';

  const courses = [
    { name: 'Health Assistant', subtitle: 'Nursing', duration: '02 years', seats: '50', icon: <UserOutlined /> },
    { name: 'Medical Lab', subtitle: 'Technician', duration: '02 years', seats: '40', icon: <ExperimentOutlined /> },
    { name: 'Operation Theatre', subtitle: 'Technician', duration: '02 years', seats: '30', icon: <MedicineBoxOutlined /> },
    { name: 'Physiotherapy', subtitle: 'Program', duration: '02 years', seats: '40', icon: <HeartOutlined /> },
    { name: 'X-Ray', subtitle: 'Technician', duration: '02 years', seats: '30', icon: <ScanOutlined /> },
    { name: 'Dental', subtitle: 'Technician', duration: '02 years', seats: '20', icon: <MedicineBoxOutlined /> },
    { name: 'Eye', subtitle: 'Technician', duration: '02 years', seats: '20', icon: <EyeOutlined /> },
  ];

  const displayedCourses = showAll ? courses : courses.slice(0, 6);
  const hasMoreCourses = courses.length > 6;

  const handleCourseClick = (courseName: string) => {
    const routeMap: { [key: string]: string } = {
      'Health Assistant': '/courses/nursing',
      'Medical Lab': '/courses/medical-lab',
      'Operation Theatre': '/courses/operation-theatre',
      'Physiotherapy': '/courses/physiotherapy',
      'X-Ray': '/courses/x-ray',
      'Dental': '/courses/dental',
      'Eye': '/courses/eye',
    };
    router.push(routeMap[courseName] || '/courses');
  };

  const CourseCard = ({ course, index }: { course: Course; index: number }) => (
    <div
      style={{
        background: hoveredCard === index ? accentGold : '#fff',
        height: '100%',
        padding: '24px 16px',
        textAlign: 'center',
        border: '1px solid rgba(26,32,44,0.08)',
        transition: 'all 0.3s ease',
        transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hoveredCard === index ? '0 15px 30px rgba(255,193,7,0.3)' : '0 4px 12px rgba(0,0,0,0.05)',
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '220px',
      }}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={() => handleCourseClick(course.name)}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: hoveredCard === index ? brandDark : accentGold }} />
      <div style={{ fontSize: '24px', width: '50px', height: '50px', margin: '0 auto 15px', background: hoveredCard === index ? brandDark : 'rgba(255,193,7,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: hoveredCard === index ? accentGold : brandDark }}>
        {course.icon}
      </div>
      <Title level={4} style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px', color: hoveredCard === index ? brandDark : '#1a1a1a' }}>{course.name}</Title>
      <Text style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: hoveredCard === index ? brandDark : '#666', marginBottom: '12px' }}>{course.subtitle}</Text>
      <div style={{ borderTop: `1px solid ${hoveredCard === index ? 'rgba(26,32,44,0.15)' : 'rgba(0,0,0,0.08)'}`, paddingTop: '10px', marginTop: 'auto' }}>
        <Space size="middle">
          <Text style={{ fontSize: '12px', color: hoveredCard === index ? brandDark : '#555' }}>{course.duration}</Text>
          <Text style={{ fontSize: '12px', fontWeight: 700, color: hoveredCard === index ? brandDark : '#555' }}>{course.seats} Seats</Text>
        </Space>
      </div>
    </div>
  );

  return (
    <ConfigProvider theme={{ token: { colorPrimary: accentGold, borderRadius: 0 } }}>
      <section className="programs-section" style={{ background: '#fff', overflow: 'hidden', paddingTop: '2px' }}>
        <style jsx>{`
          .programs-section {
            background: #fff;
            overflow: hidden;
            padding-top: 2px;
          }
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 30px;
          }
          @media (max-width: 768px) {
            .programs-section { padding-top: 10px !important; }
          }
          @media (max-width: 576px) {
            .stats-grid { grid-template-columns: 1fr; }
            .programs-section { padding-top: 5px !important; }
          }
        `}</style>
        
        <Row style={{ minHeight: '100vh' }}>
          {/* LEFT SIDE */}
          <Col xs={24} lg={11} xl={10} style={{ background: brandDark, padding: 'clamp(40px, 8vw, 80px) clamp(20px, 5vw, 60px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Space align="center" style={{ marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '3px', background: accentGold }} />
              <Text style={{ color: accentGold, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px' }}>Our Programs</Text>
            </Space>
            
            <Title style={{ color: '#fff', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
              Sri Dhanvantri <br /> <span style={{ color: accentGold }}>Health Care</span> <br /> Training Centre
            </Title>
            
            <Paragraph style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: '1.7', marginBottom: '40px', maxWidth: '500px' }}>
              Established to provide excellence in medical vocational education. Our institute trains qualified professionals through sophisticated laboratory facilities and experienced faculty.
            </Paragraph>

            <div className="stats-grid">
              {[
                { label: 'Diploma Courses', val: '07+' },
                { label: 'Annual Intake', val: '250+' },
                { label: 'Years Experience', val: '15+' },
                { label: 'Placement Support', val: '100%' }
              ].map((stat, i) => (
                <div key={i}>
                  <Text style={{ display: 'block', color: accentGold, fontSize: '32px', fontWeight: 800, lineHeight: 1 }}>{stat.val}</Text>
                  <Text style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', textTransform: 'uppercase' }}>{stat.label}</Text>
                </div>
              ))}
            </div>
          </Col>

          {/* RIGHT SIDE */}
          <Col xs={24} lg={13} xl={14} style={{ background: '#f8f9fa', padding: 'clamp(40px, 6vw, 60px) clamp(15px, 4vw, 50px)' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <Text style={{ color: brandDark, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', display: 'block' }}>Available Programs</Text>
              <Title level={3} style={{ marginTop: '8px', fontSize: '28px', fontWeight: 700 }}>Diploma Courses <span style={{ color: accentGold }}>2025-2026</span></Title>
            </div>

            <Row gutter={[16, 16]}>
              {displayedCourses.map((course, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                  <CourseCard course={course} index={index} />
                </Col>
              ))}
            </Row>

            {hasMoreCourses && (
              <div style={{ textAlign: 'center', marginTop: '32px' }}>
                <Button 
                  type="primary" 
                  size="large" 
                  onClick={() => setShowAll(!showAll)}
                  style={{ background: showAll ? brandDark : accentGold, color: showAll ? accentGold : brandDark, borderColor: showAll ? brandDark : accentGold, height: '48px', padding: '0 32px', fontWeight: 700 }}
                >
                  {showAll ? 'Show Less' : 'View All Courses'}
                </Button>
              </div>
            )}

            {/* Bottom Info Bar */}
            <div style={{ marginTop: '40px', padding: '24px', background: brandDark, borderLeft: `4px solid ${accentGold}`, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
              <div>
                <Text style={{ color: '#fff', fontSize: '15px', fontWeight: 600, display: 'block' }}>Admissions Open for 2025-2026</Text>
                <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>Limited seats available • Apply before June 30th</Text>
              </div>
              <Button ghost style={{ borderColor: accentGold, color: accentGold, borderRadius: 0, fontWeight: 700 }} onClick={() => router.push('/registration')}>Apply Now</Button>
            </div>
          </Col>
        </Row>

        <Button
          shape="circle"
          icon={<ArrowUpOutlined />}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 100, background: brandDark, color: accentGold, border: `2px solid ${accentGold}`, height: '50px', width: '50px' }}
        />
      </section>
    </ConfigProvider>
  );
};

export default DhanvantriCourses;