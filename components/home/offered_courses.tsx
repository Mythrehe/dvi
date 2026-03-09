'use client';

import React from 'react';
import { Row, Col, Typography, ConfigProvider } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const { Title } = Typography;

interface Course {
  id: string;
  name: string;
  type: string;
  duration: string;
  seats: string;
  img: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseGrid = () => {
  const router = useRouter();

  // Integrated high-resolution medical stock images from Unsplash
  const courses = [
    { id: 'nursing', name: 'Health Assistant (Nursing)', type: 'Diploma', duration: '02 years', seats: '50', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800' },
    { id: 'lab-tech', name: 'Medical Lab Technician', type: 'Diploma', duration: '02 years', seats: '40', img: '/labs.jpg' },
    { id: 'ot-tech', name: 'Operation Theatre Technician', type: 'Diploma', duration: '02 years', seats: '30', img: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800' },
    { id: 'physio', name: 'Physiotherapy', type: 'Diploma', duration: '02 years', seats: '40', img: '/physio.png' },
    { id: 'xray', name: 'X-Ray Technician', type: 'Diploma', duration: '02 years', seats: '30', img: 'https://images.unsplash.com/photo-1599045118108-bf9954418b76?auto=format&fit=crop&q=80&w=800' },
    { id: 'dental', name: 'Dental Technician', type: 'Diploma', duration: '02 years', seats: '20', img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800' },
    { id: 'eye', name: 'Eye Technician', type: 'Diploma', duration: '02 years', seats: '20', img: '/eye.jpg' },
  ];

  const brandOrange = '#ffa800'; // Your specific brand orange

  const CourseCard: React.FC<CourseCardProps> = ({ course }) => (
    <div 
      onClick={() => router.push(`/courses/${course.id}`)}
      style={{
        position: 'relative',
        height: '480px',
        width: '100%',
        backgroundColor: '#222', // Minimal fallback if img fails
        backgroundImage: `url(${course.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '35px 25px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      className="course-card-container"
    >
      {/* Dynamic Static Overlay: Deepens shadow for text legibility */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%)',
        zIndex: 1
      }} />

      {/* Brand Orange Transparent Hover Overlay */}
      <div className="hover-overlay" style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(255, 168, 0, 0.75)', // Transparent brand orange shade
        zIndex: 2,
        opacity: 0,
        transition: 'all 0.4s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <ArrowRightOutlined style={{ fontSize: '48px', color: '#fff' }} />
      </div>

      {/* Arrow Button in Right Corner */}
      <div 
        onClick={(e) => {
          e.stopPropagation();
          router.push(`/courses/${course.id}`);
        }}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          backgroundColor: 'rgba(255, 168, 0, 0.9)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 4,
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
        }}
        className="arrow-button"
      >
        <ArrowRightOutlined style={{ fontSize: '20px', color: '#fff' }} />
      </div>

      {/* Card Content: Stays visible above overlays */}
      <div style={{ position: 'relative', zIndex: 3 }}>
        <div style={{ width: '40px', height: '3px', background: brandOrange, marginBottom: '15px' }} />
        <Title level={3} style={{ color: '#fff', fontSize: '24px', fontWeight: 800, margin: '0 0 10px 0', textTransform: 'uppercase' }}>
          {course.name} <br />
          <span style={{ fontSize: '18px', fontWeight: 600 }}>({course.type})</span>
        </Title>
        <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', fontWeight: 500 }}>
          <div style={{ marginBottom: '5px' }}>Duration of course : {course.duration}</div>
          <div>Number of seats : {course.seats}</div>
        </div>
      </div>

      <style jsx>{`
        .course-card-container:hover .hover-overlay {
          opacity: 1;
        }
        .course-card-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        .arrow-button:hover {
          background-color: rgba(255, 168, 0, 1) !important;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );

  return (
    <ConfigProvider theme={{ token: { borderRadius: 0 } }}>
      <section style={{ padding: '100px 0', background: '#fcfcfc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <Title style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 800, color: '#1a1a1a', margin: 0 }}>
              Specialized <span style={{ color: brandOrange }}>Medical</span> Courses
            </Title>
          </div>

          {/* Row 1-3: 2 Cards per row */}
          <Row gutter={[40, 40]} justify="center" style={{ marginBottom: '20px' }}>
            {courses.slice(0, 6).map((course, index) => (
              <Col xs={24} sm={12} lg={10} key={index}>
                <CourseCard course={course} />
              </Col>
            ))}
          </Row>

          {/* Row 4: 1 Card - Centered with proper spacing */}
          <Row gutter={[40, 40]} justify="center" style={{ marginTop: '60px' }}>
            {courses.slice(6, 7).map((course, index) => (
              <Col xs={24} sm={12} lg={10} key={index}>
                <CourseCard course={course} />
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default CourseGrid;