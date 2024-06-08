import React, { useEffect } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content" data-aos="fade-right">
          <h1>Welcome to Our NGO</h1>
          <p>We are dedicated to providing employment, basic facilities, and food for the poor. Your support can make a difference.</p>
          <button>Donate Now</button>
        </div>
        <div className="hero-image" data-aos="fade-left">
          <img src="https://source.unsplash.com/random/600x400?help" alt="Help" />
        </div>
      </section>

      <section className="impact">
        <h2 data-aos="fade-up">Our Impact</h2>
        <div className="impact-cards">
          <div className="card" data-aos="zoom-in">
            <img src="https://source.unsplash.com/random/300x200?people" alt="People" />
            <h3>Family Like Care</h3>
            <p>Recreating family-like environments for children with stable caregivers and social relationships.</p>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-delay="200">
            <img src="https://source.unsplash.com/random/300x200?community" alt="Community" />
            <h3>Family Strengthening</h3>
            <p>Empowering families and communities to care for their children and prevent abandonment.</p>
          </div>
          <div className="card" data-aos="zoom-in" data-aos-delay="400">
            <img src="https://source.unsplash.com/random/300x200?education" alt="Education" />
            <h3>Education & Skilling</h3>
            <p>Providing quality education and vocational training to youth for self-reliance.</p>
          </div>
        </div>
      </section>

      <section className="donate">
        <h2 data-aos="fade-up">Ways to Donate</h2>
        <p data-aos="fade-up">Your donation can bring about transformational changes in the lives of underprivileged families and children.</p>
        <button data-aos="fade-up">Donate Now</button>
      </section>
    </div>
  );
};

export default Home;
