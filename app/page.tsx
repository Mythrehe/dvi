// page.tsx
'use client';
import { useState, useEffect } from 'react';
import { usePageTitle } from './common';
import Hero from '@/components/home/hero';
import OfferedCourses from '@/components/home/offered_courses';
import Scope from '@/components/home/scope';
//import WhyCrestcode from '@/components/home/whyCrestcode';
//import FAQ from '@/components/home/faq';
import Course from '@/components/home/course';
//import ContactForm from '@/components/home/form';

export default function HomePage() {
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleShowServices = () => setShowServices(true);
    window.addEventListener('showServices', handleShowServices);
    return () => window.removeEventListener('showServices', handleShowServices);
  }, []);

  usePageTitle('Crestcode - high-performance technical consultancy');

  return (
    <div style={{ backgroundColor: '#F8FAFC' }}>
      <Hero />
      <Course />
      <Scope/>
      <OfferedCourses/>
      {/*<WhyCrestcode />
      <FAQ />*/}
    </div>
  );
}
