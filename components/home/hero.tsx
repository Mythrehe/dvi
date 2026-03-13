import React, { useState, useEffect, useCallback } from 'react';
import { Button, Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CSSProperties } from 'react';

interface CarouselRef {
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselRef, setCarouselRef] = useState<CarouselRef | null>(null);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&h=1080&fit=crop',
      title: 'Dhanvanthiri',
      highlight: 'Pharmacy',
      subtitle: 'And Its Scope.',
      description: 'Excellence in pharmaceutical education and research'
    },
    {
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1920&h=1080&fit=crop',
      title: 'Discover',
      highlight: 'Innovation',
      subtitle: 'In Research.',
      description: 'State-of-the-art laboratories and facilities'
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=1080&fit=crop',
      title: 'Shape Your',
      highlight: 'Future',
      subtitle: 'With Us.',
      description: 'Join the leaders in pharmaceutical sciences'
    }
  ];

  const nextSlide = useCallback(() => {
    carouselRef?.next();
  }, [carouselRef]);

  const prevSlide = useCallback(() => {
    carouselRef?.prev();
  }, [carouselRef]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const styles: { [key: string]: CSSProperties } = {
    heroContainer: {
      width: '100%',
      height: '100vh',
      position: 'relative',
      overflow: 'hidden',
    },
    carousel: {
      width: '100%',
      height: '100%',
    },
    slide: {
      width: '100%',
      height: '100vh',
      position: 'relative',
      overflow: 'hidden',
    },
    slideImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, rgba(26,32,44,0.85) 0%, rgba(45,55,72,0.7) 50%, rgba(26,32,44,0.6) 100%)',
      zIndex: 1,
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '100px',
      transform: 'translateY(-50%)',
      zIndex: 2,
      maxWidth: '700px',
    },
    yellowShape: {
      position: 'absolute',
      left: '-100px',
      top: '50%',
      transform: 'translateY(-50%) skewX(-15deg)',
      width: '400px',
      height: '500px',
      background: 'rgba(255,193,7,0.9)',
      zIndex: 1,
      animation: 'slideInLeft 1s ease-out',
    },
    titleContainer: {
      position: 'relative',
      zIndex: 2,
      marginLeft: '40px',
    },
    title: {
      fontSize: '72px',
      fontWeight: '800',
      color: '#fff',
      lineHeight: '1.1',
      margin: '0 0 10px 0',
      textShadow: '0 4px 20px rgba(0,0,0,0.3)',
      animation: 'fadeInUp 0.8s ease-out 0.3s both',
    },
    highlight: {
      fontSize: '72px',
      fontWeight: '800',
      color: '#ffc107',
      lineHeight: '1.1',
      margin: '0 0 10px 0',
      textShadow: '0 4px 20px rgba(255,193,7,0.3)',
      animation: 'fadeInUp 0.8s ease-out 0.5s both',
    },
    subtitle: {
      fontSize: '72px',
      fontWeight: '800',
      color: '#fff',
      lineHeight: '1.1',
      margin: '0 0 30px 0',
      textShadow: '0 4px 20px rgba(0,0,0,0.3)',
      animation: 'fadeInUp 0.8s ease-out 0.7s both',
    },
    dot: {
      color: '#ffc107',
      fontSize: '80px',
      lineHeight: '0',
      marginLeft: '10px',
    },
    description: {
      fontSize: '18px',
      color: 'rgba(255,255,255,0.9)',
      marginBottom: '40px',
      maxWidth: '500px',
      lineHeight: '1.6',
      animation: 'fadeInUp 0.8s ease-out 0.9s both',
    },
    ctaButton: {
      background: '#ffc107',
      color: '#1a202c',
      border: 'none',
      borderRadius: '0',
      padding: '20px 50px',
      fontSize: '14px',
      fontWeight: '700',
      cursor: 'pointer',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      animation: 'fadeInUp 0.8s ease-out 1.1s both',
      boxShadow: '0 10px 30px rgba(255,193,7,0.3)',
    },
    navButtons: {
      position: 'absolute',
      right: '60px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    navButton: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      border: '2px solid rgba(255,255,255,0.3)',
      background: 'rgba(255,255,255,0.1)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      fontSize: '20px',
    },
    indicators: {
      position: 'absolute',
      bottom: '60px',
      left: '140px',
      zIndex: 10,
      display: 'flex',
      gap: '15px',
    },
    indicator: {
      width: '50px',
      height: '4px',
      background: 'rgba(255,255,255,0.3)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      borderRadius: '2px',
    },
    indicatorActive: {
      width: '50px',
      height: '4px',
      background: '#ffc107',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      borderRadius: '2px',
      boxShadow: '0 0 10px rgba(255,193,7,0.5)',
    },
    slideNumber: {
      position: 'absolute',
      bottom: '60px',
      right: '60px',
      zIndex: 10,
      color: '#fff',
      fontSize: '16px',
      fontWeight: '600',
      letterSpacing: '2px',
    },
    currentNum: {
      fontSize: '48px',
      fontWeight: '800',
      color: '#ffc107',
    },
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateY(-50%) skewX(-15deg) translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) skewX(-15deg) translateX(0);
          }
        }
        .hero-carousel .slick-slide {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .hero-carousel .slick-active {
          opacity: 1;
        }
        .hero-carousel .slick-slide > div {
          height: 100vh;
        }
      `}</style>

      <div style={styles.heroContainer}>
        <Carousel
          ref={setCarouselRef}
          className="hero-carousel"
          style={styles.carousel}
          autoplay={false}
          effect="fade"
          beforeChange={(from, to) => setCurrentSlide(to)}
          dots={false}
        >
          {slides.map((slide, index) => (
            <div key={index}>
              <div style={styles.slide}>
                <img src={slide.image} alt={slide.title} style={styles.slideImage} />
                <div style={styles.overlay}></div>

                <div style={styles.yellowShape}></div>

                <div style={styles.content}>
                  <div style={styles.titleContainer}>
                    <h1 style={styles.title}>{slide.title}</h1>
                    <h1 style={styles.highlight}>{slide.highlight}</h1>
                    <h1 style={styles.subtitle}>
                      {slide.subtitle}
                      <span style={styles.dot}>.</span>
                    </h1>
                    <p style={styles.description}>{slide.description}</p>
                    <Button
                      style={styles.ctaButton}
                      onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.currentTarget.style.background = '#fff';
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(255,255,255,0.3)';
                      }}
                      onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.currentTarget.style.background = '#ffc107';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,193,7,0.3)';
                      }}
                    >
                      Discover More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Navigation Arrows */}
        <div style={styles.navButtons}>
          <button
            style={styles.navButton}
            onClick={prevSlide}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = '#ffc107';
              e.currentTarget.style.borderColor = '#ffc107';
              e.currentTarget.style.color = '#1a202c';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <LeftOutlined />
          </button>
          <button
            style={styles.navButton}
            onClick={nextSlide}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = '#ffc107';
              e.currentTarget.style.borderColor = '#ffc107';
              e.currentTarget.style.color = '#1a202c';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <RightOutlined />
          </button>
        </div>

        {/* Slide Indicators */}
        <div style={styles.indicators}>
          {slides.map((_, index) => (
            <div
              key={index}
              style={currentSlide === index ? styles.indicatorActive : styles.indicator}
              onClick={() => carouselRef?.goTo(index)}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div style={styles.slideNumber}>
          <span style={styles.currentNum}>0{currentSlide + 1}</span>
          <span style={{ color: 'rgba(255,255,255,0.5)', marginLeft: '10px' }}>/ 0{slides.length}</span>
        </div>
      </div>
    </>
  );
};

export default HeroSection;