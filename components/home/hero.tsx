"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Button, Carousel, Modal, Typography, Tag, Divider } from 'antd';

const { Title: AntTitle, Paragraph } = Typography;

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselRef, setCarouselRef] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const brandOrange = '#ffc107'; 
  const brandNavy = '#0d1b2a';

  const slides = [
    {
      image: '/hero_img1.jpeg',
      title: 'SRI DHANVANTRI',
      highlight: 'Healthcare and Training Institute',
      description: 'Our College bridges high school and university, offering a two-year curriculum preparing students for higher education. It emphasizes academic excellence and holistic development.',
      tagline: 'Pathway to University Success'
    },
    {
      image:'/hero_img2.jpeg',
      title: 'ADVANCED',
      highlight: 'PARAMEDICAL SCIENCES',
      description: 'Master the art of diagnostics and clinical support. Our paramedical programs are designed with state-of-the-art simulation labs to give you hands-on experience.',
      tagline: 'Leading the Future of Care'
    },
    {
      image: '/hero_img3_1.jpeg',
      title: 'NURSING &',
      highlight: 'PATIENT CARE',
      description: 'Join a profession dedicated to humanity. Our nursing institute provides a compassionate yet rigorous training environment for global healthcare challenges.',
      tagline: 'Compassion Meets Excellence'
    }
  ];

  const nextSlide = useCallback(() => carouselRef?.next(), [carouselRef]);

  useEffect(() => {
    const handleNext = () => {
        if(!isModalOpen) nextSlide();
    }
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isModalOpen]);

  return (
    <>
      <style jsx global>{`
        .hero-outer-wrapper {
          padding-top: 80px; 
          background: #fff;
        }

        .hero-container { 
          width: 100%; 
          height: 75vh; 
          position: relative; 
          overflow: hidden; 
          background: #fff;
        }

        .hero-carousel, .slick-list, .slick-track, .slick-slide, .slick-slide > div { 
          height: 75vh !important; 
        }
        
        .orange-slant {
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 50%; 
          background: ${brandOrange};
          clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%);
          z-index: 5;
        }

        .hero-content {
          position: absolute;
          top: 50%; right: 4%; 
          transform: translateY(-50%);
          z-index: 10; 
          width: 38%; 
          color: #1a1a1a;
          text-align: center;
        }

        .hero-title-group h1 {
          font-size: clamp(28px, 4vw, 52px);
          font-weight: 900;
          line-height: 1.1;
          margin: 0;
          color: #000;
        }

        .hero-description-desktop {
          margin-top: 20px;
          font-size: 16px;
          line-height: 1.6;
          color: #1a1a1a;
          font-weight: 500;
        }

        .read-more-btn {
          display: none !important;
        }

        .slide-image {
          width: 55%;
          height: 100%;
          object-fit: cover;
          object-position: left center;
          display: block;
          position: absolute;
          left: 0;
          top: 0;
        }

        /* --- UPDATED MOBILE VIEW --- */
        @media (max-width: 1024px) {
          .hero-outer-wrapper { padding-top: 60px; }

          .hero-container, .hero-carousel, .slick-list, .slick-track, .slick-slide, .slick-slide > div { 
            height: 200px !important; 
          }
          
          .orange-slant { 
            /* 1. REDUCED width to give left image more space */
            width: 50% !important; 
            /* 2. PUSHED the start point to 22% for extra image width */
            clip-path: polygon(12% 0, 100% 0, 100% 100%, 0 100%) !important; 
            z-index: 5;
          }
          
          .hero-content {
            /* 3. MATCHED content width to smaller slant area */
            width: 46% !important;
            right: 2%;
            top: 50%;
            transform: translateY(-50%);
          }

          .hero-description-desktop { display: none; }

          .read-more-btn {
            display: inline-block !important;
            height: 30px !important;
            padding: 0 10px !important;
            font-size: 10px !important;
            margin-top: 6px !important;
            background: ${brandNavy} !important;
            color: #fff !important;
            font-weight: 700 !important;
            border: 1px solid #fff !important;
            border-radius: 4px !important;
          }

          .slide-image {
            width: 55% !important;
            height: 100% !important;
            object-fit: cover !important;
            object-position: left center !important;
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
          }
          
          .hero-title-group h1 { 
            font-size: 12px !important;
            margin-bottom: 2px !important;
            line-height: 1.1;
          }
        }
      `}</style>

      <div className="hero-outer-wrapper">
        <div className="hero-container">
          <Carousel
            ref={setCarouselRef}
            effect="fade"
            dots={false}
            beforeChange={(from, to) => setCurrentSlide(to)}
          >
            {slides.map((slide, index) => (
              <div key={index} style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img src={slide.image} className="slide-image" alt="Healthcare" />
                <div className="orange-slant" />
                <div className="hero-content">
                  <div className="hero-title-group">
                    <h1 style={{ textTransform: 'uppercase' }}>{slide.title}</h1>
                    <h1 style={{ color: brandNavy, fontSize: '15px', marginTop: '2px', fontWeight: 800 }}>{slide.highlight}</h1>
                  </div>
                  
                  <div className="hero-description-desktop">
                    {slide.description}
                  </div>

                  <Button className="read-more-btn" onClick={() => setIsModalOpen(true)}>
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <Modal open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null} centered>
        <div style={{ padding: '20px' }}>
          <AntTitle level={3}>{slides[currentSlide].title}</AntTitle>
          <Paragraph>{slides[currentSlide].description}</Paragraph>
        </div>
      </Modal>
    </>
  );
};

export default HeroSection;