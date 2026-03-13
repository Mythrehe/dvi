'use client';

import React, { useState } from 'react';
import { Typography, Button, Space, ConfigProvider, Col, Row } from 'antd';
import { ArrowUpOutlined, MedicineBoxOutlined, ExperimentOutlined, ScanOutlined, EyeOutlined, UserOutlined, ArrowRightOutlined, HeartOutlined, DownOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

interface Course {
  name: string;
  subtitle: string;
  duration: string;
  seats: string;
  icon: React.ReactNode;
}

const DhanvantriCourses = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const courses = [
    {
      name: 'Health Assistant',
      subtitle: 'Nursing',
      duration: '02 years',
      seats: '50',
      icon: <UserOutlined style={{ fontSize: '24px' }} />
    },
    {
      name: 'Medical Lab',
      subtitle: 'Technician',
      duration: '02 years',
      seats: '40',
      icon: <ExperimentOutlined style={{ fontSize: '24px' }} />
    },
    {
      name: 'Operation Theatre',
      subtitle: 'Technician',
      duration: '02 years',
      seats: '30',
      icon: <MedicineBoxOutlined style={{ fontSize: '24px' }} />
    },
    {
      name: 'Physiotherapy',
      subtitle: 'Program',
      duration: '02 years',
      seats: '40',
      icon: <HeartOutlined style={{ fontSize: '24px' }} />
    },
    {
      name: 'X-Ray',
      subtitle: 'Technician',
      duration: '02 years',
      seats: '30',
      icon: <ScanOutlined style={{ fontSize: '24px' }} />
    },
    {
      name: 'Dental',
      subtitle: 'Technician',
      duration: '02 years',
      seats: '20',
      icon: <MedicineBoxOutlined style={{ fontSize: '24px' }} />
    },
    {
      name: 'Eye',
      subtitle: 'Technician',
      duration: '02 years',
      seats: '20',
      icon: <EyeOutlined style={{ fontSize: '24px' }} />
    },
  ];

  const brandDark = '#1a202c';
  const accentGold = '#ffc107';

  // Show 6 initially, or all if showAll is true
  const displayedCourses = showAll ? courses : courses.slice(0, 6);
  const hasMoreCourses = courses.length > 6;

  const CourseCard = ({ course, index }: { course: Course; index: number }) => (
    <div
      style={{
        background: hoveredCard === index ? accentGold : '#fff',
        height: '100%',
        padding: '20px 20px',
        textAlign: 'center',
        border: '1px solid rgba(26,32,44,0.08)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hoveredCard === index
          ? '0 20px 40px rgba(255,193,7,0.3)'
          : '0 4px 15px rgba(0,0,0,0.06)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: hoveredCard === index ? brandDark : accentGold,
        transition: 'all 0.3s ease',
      }} />

      {/* Icon */}
      <div style={{
        width: '60px',
        height: '60px',
        margin: '0 auto 15px',
        background: hoveredCard === index ? brandDark : 'rgba(255,193,7,0.1)',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: hoveredCard === index ? accentGold : brandDark,
        transition: 'all 0.3s ease',
        transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
      }}>
        {course.icon}
      </div>

      <Title level={4} style={{
        fontSize: '18px',
        fontWeight: 700,
        marginBottom: '4px',
        color: hoveredCard === index ? brandDark : '#1a1a1a',
        lineHeight: 1.3,
      }}>
        {course.name}
      </Title>

      <Text style={{
        display: 'block',
        fontSize: '14px',
        fontWeight: 600,
        color: hoveredCard === index ? brandDark : '#666',
        marginBottom: '15px',
        opacity: 0.8,
      }}>
        {course.subtitle}
      </Text>

      <div style={{
        borderTop: `1px solid ${hoveredCard === index ? 'rgba(26,32,44,0.15)' : 'rgba(0,0,0,0.08)'}`,
        paddingTop: '12px',
        marginTop: 'auto',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <Text style={{
            fontSize: '13px',
            color: hoveredCard === index ? brandDark : '#555',
            fontWeight: 500,
          }}>
            {course.duration}
          </Text>
          <Text style={{
            fontSize: '13px',
            color: hoveredCard === index ? brandDark : '#555',
            fontWeight: 700,
          }}>
            {course.seats} Seats
          </Text>
        </div>
      </div>

      {/* Hover arrow */}
      <div style={{
        position: 'absolute',
        bottom: '12px',
        right: '12px',
        opacity: hoveredCard === index ? 1 : 0,
        transform: hoveredCard === index ? 'translateX(0)' : 'translateX(-10px)',
        transition: 'all 0.3s ease',
      }}>
        <ArrowRightOutlined style={{ color: brandDark, fontSize: '16px' }} />
      </div>
    </div>
  );

  return (
    <ConfigProvider theme={{ token: { colorPrimary: accentGold, borderRadius: 0 } }}>
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        background: '#fff',
        overflow: 'hidden',
      }}>

        {/* Top gold bar */}
        <div style={{
          height: '5px',
          width: '100%',
          background: accentGold,
        }} />

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          minHeight: '100vh',
        }}>

          {/* LEFT COLUMN: 48% Width */}
          <div style={{
            flex: '0 0 48%',
            background: brandDark,
            padding: '80px 60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minWidth: '400px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Decorative skewed shape */}
            <div style={{
              position: 'absolute',
              top: '50%',
              right: '-200px',
              width: '500px',
              height: '700px',
              background: 'rgba(255,193,7,0.04)',
              transform: 'translateY(-50%) skewX(-20deg)',
              pointerEvents: 'none',
            }} />

            <Space align="center" style={{ marginBottom: '30px' }}>
              <div style={{
                width: '50px',
                height: '3px',
                background: accentGold,
              }} />
              <Text style={{
                color: accentGold,
                fontWeight: 700,
                letterSpacing: '3px',
                fontSize: '14px',
                textTransform: 'uppercase',
              }}>
                Our Programs
              </Text>
            </Space>

            <Title style={{
              color: '#fff',
              fontSize: 'clamp(40px, 4vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '30px',
            }}>
              Sri Dhanvantri <br />
              <span style={{ color: accentGold }}>Health Care</span> <br />
              Training Centre
            </Title>

            <Paragraph style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '16px',
              lineHeight: '1.8',
              marginBottom: '25px',
              maxWidth: '90%',
            }}>
              Established to provide excellence in medical vocational education. Our institute trains qualified professionals through sophisticated laboratory facilities and experienced faculty.
            </Paragraph>

            <Paragraph style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '15px',
              lineHeight: '1.7',
              marginBottom: '40px',
            }}>
              One of the top paramedical institutes in Dharmapuri with state-of-the-art digital library and modern equipment.
            </Paragraph>

            <div style={{
              borderLeft: `4px solid ${accentGold}`,
              paddingLeft: '25px',
              marginBottom: '50px',
            }}>
              <Paragraph style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '15px',
                fontStyle: 'italic',
                margin: 0,
                lineHeight: 1.6,
              }}>
                "Empowering students with practical skills and theoretical knowledge for a successful healthcare career."
              </Paragraph>
            </div>

            {/* Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '30px',
              paddingTop: '40px',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}>
              <div>
                <Text style={{
                  display: 'block',
                  color: accentGold,
                  fontSize: '36px',
                  fontWeight: 800,
                  lineHeight: 1,
                  marginBottom: '8px',
                }}>
                  07+
                </Text>
                <Text style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}>
                  Diploma Courses
                </Text>
              </div>
              <div>
                <Text style={{
                  display: 'block',
                  color: accentGold,
                  fontSize: '36px',
                  fontWeight: 800,
                  lineHeight: 1,
                  marginBottom: '8px',
                }}>
                  250+
                </Text>
                <Text style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}>
                  Annual Intake
                </Text>
              </div>
              <div>
                <Text style={{
                  display: 'block',
                  color: accentGold,
                  fontSize: '36px',
                  fontWeight: 800,
                  lineHeight: 1,
                  marginBottom: '8px',
                }}>
                  15+
                </Text>
                <Text style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}>
                  Years Experience
                </Text>
              </div>
              <div>
                <Text style={{
                  display: 'block',
                  color: accentGold,
                  fontSize: '36px',
                  fontWeight: 800,
                  lineHeight: 1,
                  marginBottom: '8px',
                }}>
                  100%
                </Text>
                <Text style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}>
                  Placement Support
                </Text>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 52% Width - Full coverage with 3x3 grid */}
          <div style={{
            flex: '1 1 52%',
            padding: '60px 50px',
            background: '#f8f9fa',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            {/* Section Header */}
            <div style={{ marginBottom: '40px', textAlign: 'center' }}>
              <Text style={{
                color: brandDark,
                fontWeight: 700,
                letterSpacing: '3px',
                fontSize: '13px',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '10px',
              }}>
                Available Programs
              </Text>
              <Title level={3} style={{
                margin: 0,
                fontSize: '28px',
                fontWeight: 700,
                color: brandDark,
              }}>
                Diploma Courses <span style={{ color: accentGold }}>2025-2026</span>
              </Title>
            </div>

            {/* Row 1: 3 Cards - Full width */}
            <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
              {displayedCourses.slice(0, 3).map((course, index) => (
                <Col span={8} key={index}>
                  <CourseCard course={course} index={index} />
                </Col>
              ))}
            </Row>

            {/* Row 2: 3 Cards - Full width */}
            <Row gutter={[24, 24]} style={{ marginBottom: hasMoreCourses && !showAll ? '0' : '24px' }}>
              {displayedCourses.slice(3, 6).map((course, index) => (
                <Col span={8} key={index}>
                  <CourseCard course={course} index={index + 3} />
                </Col>
              ))}
            </Row>

            {/* Row 3: 1 Card (only when showAll is true) */}
            {showAll && (
              <Row gutter={[24, 24]} justify="center" style={{ marginBottom: '24px' }}>
                <Col span={8}>
                  <CourseCard course={courses[6]} index={6} />
                </Col>
              </Row>
            )}

            {/* View More / Show Less Button */}
            {hasMoreCourses && (
              <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <Button
                  type="primary"
                  size="large"
                  icon={showAll ? <ArrowUpOutlined /> : <DownOutlined />}
                  onClick={() => setShowAll(!showAll)}
                  style={{
                    background: showAll ? brandDark : accentGold,
                    borderColor: showAll ? brandDark : accentGold,
                    color: showAll ? accentGold : brandDark,
                    fontWeight: 700,
                    height: '50px',
                    padding: '0 40px',
                    fontSize: '14px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    borderRadius: 0,
                    boxShadow: showAll
                      ? '0 10px 30px rgba(26,32,44,0.2)'
                      : '0 10px 30px rgba(255,193,7,0.3)',
                  }}
                  onMouseEnter={(e) => {
                    if (showAll) {
                      e.currentTarget.style.background = accentGold;
                      e.currentTarget.style.color = brandDark;
                      e.currentTarget.style.borderColor = accentGold;
                    } else {
                      e.currentTarget.style.background = brandDark;
                      e.currentTarget.style.color = accentGold;
                      e.currentTarget.style.borderColor = brandDark;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (showAll) {
                      e.currentTarget.style.background = brandDark;
                      e.currentTarget.style.color = accentGold;
                      e.currentTarget.style.borderColor = brandDark;
                    } else {
                      e.currentTarget.style.background = accentGold;
                      e.currentTarget.style.color = brandDark;
                      e.currentTarget.style.borderColor = accentGold;
                    }
                  }}
                >
                  {showAll ? 'Show Less' : 'View More Courses'}
                </Button>
              </div>
            )}

            {/* Bottom Info Bar */}
            <div style={{
              marginTop: '20px',
              padding: '25px 30px',
              background: brandDark,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '5px',
                height: '100%',
                background: accentGold,
              }} />
              <div>
                <Text style={{
                  color: '#fff',
                  fontSize: '16px',
                  fontWeight: 600,
                  display: 'block',
                  marginBottom: '4px',
                }}>
                  Admissions Open for 2025-2026
                </Text>
                <Text style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '13px',
                }}>
                  Limited seats available • Apply before June 30th
                </Text>
              </div>
              <Button
                type="primary"
                ghost
                style={{
                  borderColor: accentGold,
                  color: accentGold,
                  fontWeight: 700,
                  height: '45px',
                  padding: '0 25px',
                  fontSize: '13px',
                  borderRadius: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = accentGold;
                  e.currentTarget.style.color = brandDark;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = accentGold;
                }}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Button */}
        <Button
          shape="circle"
          icon={<ArrowUpOutlined style={{ color: accentGold, fontSize: '18px' }} />}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            zIndex: 100,
            background: brandDark,
            border: `2px solid ${accentGold}`,
            boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
          }}
        />
      </section>
    </ConfigProvider>
  );
};

export default DhanvantriCourses;