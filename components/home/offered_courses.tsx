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

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseGrid = () => {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);

  // Consistent brand colors with previous component
  const brandDark = '#1a202c';
  const accentGold = '#ffc107';

  const courses = [
    { id: 'nursing', name: 'Health Assistant (Nursing)', type: 'Diploma', duration: '02 years', seats: '50', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800' },
    { id: 'lab-tech', name: 'Medical Lab Technician', type: 'Diploma', duration: '02 years', seats: '40', img: '/labs.jpg' },
    { id: 'ot-tech', name: 'Operation Theatre Technician', type: 'Diploma', duration: '02 years', seats: '30', img: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800' },
    { id: 'physio', name: 'Physiotherapy', type: 'Diploma', duration: '02 years', seats: '40', img: '/physio.png' },
    { id: 'xray', name: 'X-Ray Technician', type: 'Diploma', duration: '02 years', seats: '30', img: 'https://images.unsplash.com/photo-1599045118108-bf9954418b76?auto=format&fit=crop&q=80&w=800' },
    { id: 'dental', name: 'Dental Technician', type: 'Diploma', duration: '02 years', seats: '20', img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800' },
    { id: 'eye', name: 'Eye Technician', type: 'Diploma', duration: '02 years', seats: '20', img: '/eye.jpg' },
  ];

  // Show 6 initially, or all if showAll is true
  const displayedCourses = showAll ? courses : courses.slice(0, 6);

  const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => (
    <div
      onClick={() => router.push(`/courses/${course.id}`)}
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
      className="course-card"
    >
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(26,32,44,0.95) 0%, rgba(26,32,44,0.4) 50%, rgba(26,32,44,0.1) 100%)',
        zIndex: 1,
        transition: 'all 0.4s ease',
      }} className="card-gradient" />

      {/* Gold hover overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(255, 193, 7, 0.85)',
        zIndex: 2,
        opacity: 0,
        transition: 'all 0.4s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }} className="gold-overlay">
        <ArrowRightOutlined style={{ fontSize: '40px', color: brandDark, marginBottom: '16px' }} />
        <Text style={{ color: brandDark, fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>
          View Details
        </Text>
      </div>

      {/* Top accent line */}
      <div style={{
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
      }} className="top-accent" />

      {/* Card number */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 3,
        fontSize: '48px',
        fontWeight: 800,
        color: 'rgba(255,255,255,0.1)',
        lineHeight: 1,
      }}>
        0{index + 1}
      </div>

      {/* Arrow button top right */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          router.push(`/courses/${course.id}`);
        }}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '48px',
          height: '48px',
          backgroundColor: accentGold,
          borderRadius: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 4,
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        }}
        className="arrow-btn"
      >
        <ArrowRightOutlined style={{ fontSize: '18px', color: brandDark, fontWeight: 'bold' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3 }}>
        {/* Gold line accent */}
        <div style={{
          width: '40px',
          height: '3px',
          background: accentGold,
          marginBottom: '16px',
          transition: 'width 0.3s ease',
        }} className="gold-line" />

        <Title level={3} style={{
          color: '#fff',
          fontSize: '22px',
          fontWeight: 700,
          margin: '0 0 8px 0',
          textTransform: 'uppercase',
          lineHeight: 1.3,
          letterSpacing: '0.5px',
        }}>
          {course.name}
        </Title>

        <Text style={{
          color: accentGold,
          fontSize: '14px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          display: 'block',
          marginBottom: '16px',
        }}>
          {course.type}
        </Text>

        {/* Meta info */}
        <div style={{
          display: 'flex',
          gap: '20px',
          paddingTop: '16px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ClockCircleOutlined style={{ color: accentGold, fontSize: '14px' }} />
            <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', margin: 0 }}>
              {course.duration}
            </Text>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <UserOutlined style={{ color: accentGold, fontSize: '14px' }} />
            <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', margin: 0 }}>
              {course.seats} Seats
            </Text>
          </div>
        </div>
      </div>

      <style jsx>{`
        .course-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }
        .course-card:hover .gold-overlay {
          opacity: 1;
        }
        .course-card:hover .card-gradient {
          opacity: 0;
        }
        .course-card:hover .top-accent {
          transform: scaleX(1);
        }
        .course-card:hover .gold-line {
          width: 60px;
        }
        .course-card:hover .arrow-btn {
          background-color: ${brandDark};
        }
        .course-card:hover .arrow-btn :global(.anticon) {
          color: ${accentGold} !important;
        }
        .arrow-btn:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );

  return (
    <section style={{
      position: 'relative',
      background: '#fff',
      padding: '40px 0',
      overflow: 'hidden',
    }}>
      {/* Background pattern - consistent with previous */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 90% 10%, rgba(255,193,7,0.03) 0%, transparent 40%),
          radial-gradient(circle at 10% 90%, rgba(26,32,44,0.02) 0%, transparent 40%)
        `,
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 40px',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* Section Header - Consistent with previous component */}
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
              Our Programs
            </Text>
          </Space>

          <Title style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800,
            color: brandDark,
            margin: 0,
            lineHeight: 1.2,
          }}>
            Specialized <span style={{ color: accentGold }}>Medical</span> Courses
          </Title>
        </div>

        {/* Course Grid - 3 columns on large screens */}
        <Row gutter={[30, 30]}>
          {displayedCourses.map((course, index) => (
            <Col xs={24} sm={12} lg={8} key={course.id}>
              <CourseCard course={course} index={index} />
            </Col>
          ))}
        </Row>

        {/* Bottom CTA - Toggle between View All and Show Less */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
          paddingTop: '40px',
          borderTop: '1px solid rgba(0,0,0,0.08)',
        }}>
          <Button
            type="primary"
            size="large"
            icon={<ArrowRightOutlined rotate={showAll ? 90 : 0} />}
            onClick={() => setShowAll(!showAll)}
            style={{
              background: accentGold,
              borderColor: accentGold,
              color: brandDark,
              fontWeight: 700,
              height: '50px',
              padding: '0 40px',
              fontSize: '14px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              borderRadius: 0,
              boxShadow: '0 10px 30px rgba(255,193,7,0.3)',
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
            {showAll ? 'Show Less' : 'View All Courses'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;