'use client';

import React, { useState } from 'react';
import { Row, Col, Typography, Button, Space } from 'antd';
import { ArrowRightOutlined, ClockCircleOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

interface Course {
  id: string;
  name: string;
  type: string;
  duration: string;
  seats: string;
  img: string;
}

const CourseGrid = () => {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);

  const brandDark = '#1a202c';
  const accentGold = '#ffc107';

  const courses = [
    { id: 'nursing', name: 'Health Assistant (Nursing)', type: 'Diploma', duration: '02 years', seats: '50', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800' },
    { id: 'medical-lab', name: 'Medical Lab Technician', type: 'Diploma', duration: '02 years', seats: '40', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_M7FVGyH-o-W4ePwgI6TRCWnfw8kNEXgBWKUp8LrWEOmh6LaLjStSuE&s'},
    { id: 'operation-theatre', name: 'Operation Theatre Technician', type: 'Diploma', duration: '02 years', seats: '30', img: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800' },
    { id: 'physiotherapy', name: 'Physiotherapy', type: 'Diploma', duration: '02 years', seats: '40', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFMUI8eR7nlNdD7bK6qaLYYKSPvK7Igjwjp9aootz4NbJbKZFy0rmrc0&s' },
    { id: 'x-ray', name: 'X-Ray Technician', type: 'Diploma', duration: '02 years', seats: '30', img: 'https://images.unsplash.com/photo-1599045118108-bf9954418b76?auto=format&fit=crop&q=80&w=800' },
    { id: 'dental', name: 'Dental Technician', type: 'Diploma', duration: '02 years', seats: '20', img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800' },
    { id: 'eye', name: 'Eye Technician', type: 'Diploma', duration: '02 years', seats: '20', img: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800' },
  ];

  const displayedCourses = showAll ? courses : courses.slice(0, 6);

  const CourseCard = ({ course, index }: { course: Course; index: number }) => (
    <div
      onClick={() => router.push(`/courses/${course.id}`)}
      className="course-card"
      style={{
        position: 'relative',
        height: '420px',
        width: '100%',
        backgroundColor: brandDark,
        backgroundImage: `url(${course.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '30px',
        transition: 'all 0.4s ease',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
      }}
    >
      <div className="card-gradient" style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(26,32,44,0.95) 0%, rgba(26,32,44,0.4) 50%, rgba(26,32,44,0.1) 100%)',
        zIndex: 1,
        transition: 'all 0.4s ease',
      }} />

      <div className="gold-overlay" style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(255, 193, 7, 0.9)',
        zIndex: 2,
        opacity: 0,
        transition: 'all 0.4s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
        <ArrowRightOutlined style={{ fontSize: '40px', color: brandDark, marginBottom: '16px' }} />
        <Text style={{ color: brandDark, fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>
          View Details
        </Text>
      </div>

      <div className="top-accent" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: accentGold,
        zIndex: 3,
        transform: 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.4s ease',
      }} />

      <div style={{
        position: 'absolute',
        top: '10px',
        left: '20px',
        zIndex: 3,
        fontSize: '48px',
        fontWeight: 800,
        color: 'rgba(255,255,255,0.1)',
        lineHeight: 1,
      }}>
        0{index + 1}
      </div>

      <div className="content-box" style={{ position: 'relative', zIndex: 3 }}>
        <div className="gold-line" style={{
          width: '40px',
          height: '3px',
          background: accentGold,
          marginBottom: '16px',
          transition: 'width 0.3s ease',
        }} />

        <Title level={3} style={{
          color: '#fff',
          fontSize: '20px',
          fontWeight: 700,
          margin: '0 0 8px 0',
          textTransform: 'uppercase',
          lineHeight: 1.3,
        }}>
          {course.name}
        </Title>

        <div style={{
          display: 'flex',
          gap: '15px',
          paddingTop: '12px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          <Space style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px' }}>
            <ClockCircleOutlined style={{ color: accentGold }} /> {course.duration}
          </Space>
          <Space style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px' }}>
            <UserOutlined style={{ color: accentGold }} /> {course.seats} Seats
          </Space>
        </div>
      </div>
    </div>
  );

  return (
    <section style={{ background: '#fff', padding: '60px 0' }}>
      <style jsx global>{`
        .course-card:hover { transform: translateY(-8px); }
        .course-card:hover .gold-overlay { opacity: 1; }
        .course-card:hover .top-accent { transform: scaleX(1); }
        .course-card:hover .gold-line { width: 60px; }
        
        @media (max-width: 768px) {
          .course-card { height: 350px !important; padding: 20px !important; }
          .section-padding { padding: 0 20px !important; }
          section { padding: 20px 0 !important; }
        }
        @media (max-width: 576px) {
          section { padding: 10px 0 !important; }
        }
      `}</style>

      <div className="section-padding" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ marginBottom: '40px' }}>
          <Space align="center" style={{ marginBottom: '12px' }}>
            <div style={{ width: '30px', height: '2px', background: accentGold }} />
            <Text strong style={{ color: brandDark, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '12px' }}>
              Our Programs
            </Text>
          </Space>
          <Title level={2} style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, margin: 0 }}>
            Specialized <span style={{ color: accentGold }}>Medical</span> Courses
          </Title>
        </div>

        <Row gutter={[24, 24]}>
          {displayedCourses.map((course, index) => (
            <Col xs={24} sm={12} lg={8} key={course.id}>
              <CourseCard course={course} index={index} />
            </Col>
          ))}
        </Row>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Button
            size="large"
            onClick={() => setShowAll(!showAll)}
            style={{
              background: accentGold,
              border: 'none',
              color: brandDark,
              fontWeight: 700,
              height: '50px',
              padding: '0 40px',
              borderRadius: 0,
              boxShadow: '0 8px 20px rgba(255,193,7,0.3)'
            }}
          >
            {showAll ? 'Show Less' : 'View All Courses'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;