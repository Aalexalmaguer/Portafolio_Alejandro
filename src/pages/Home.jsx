import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
          <div className="container">
              <h1>Fintech & Blockchain Specialist</h1>
              <p className="lead">Building the future of finance through innovation and strategy.</p>
          </div>
      </section>

      {/* ABOUT */}
      <section className="container my-5 text-center">
          <h2>About Me</h2>
          <p className="lead">I’m a fintech and blockchain expert with experience in digital transformation, compliance, and product development. I blend technical mastery with strategic vision.</p>
      </section>

      {/* LINK CARDS */}
      <section className="cards-section container">
          <h2 className="text-center mb-4">Learn More About Me</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
              <div className="card h-100">
                  <div className="card-body">
                  <h5 className="card-title">Academic Achievements</h5>
                  <p className="card-text">Explore my academic journey and key awards.</p>
                  <Link to="/academic-achievements" className="btn btn-outline-dark">View</Link>
                  </div>
              </div>
          </div>
          <div className="col">
              <div className="card h-100">
              <div className="card-body">
                  <h5 className="card-title">Professional Achievements</h5>
                  <p className="card-text">Projects and roles that shaped my career.</p>
                  <Link to="/professional-achievements" className="btn btn-outline-dark">View</Link>
              </div>
          </div>
          </div>
          <div className="col">
              <div className="card h-100">
              <div className="card-body">
                  <h5 className="card-title">Certifications & Courses</h5>
                  <p className="card-text">Ongoing learning in tech, finance, and strategy.</p>
                  <Link to="/certifications" className="btn btn-outline-dark">View</Link>
          </div>
          </div>
          </div>
          <div className="col">
              <div className="card h-100">
              <div className="card-body">
                  <h5 className="card-title">Interests & Inspirations</h5>
                  <p className="card-text">Books, hobbies, and people that fuel my passion.</p>
                  <Link to="/interests" className="btn btn-outline-dark">View</Link>
          </div>
          </div>
          </div>
          </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-light py-5">
          <div className="container">
          <h2 className="text-center mb-4">Contact Me</h2>
          <form action="https://formspree.io/f/xgvydlvy" method="POST" className="mx-auto" style={{maxWidth: '600px'}}>
              <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="name" name="name" required />
              </div>
              <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" name="_replyto" required />
              </div>
              <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-dark w-100">Send Message</button>
          </form>
          </div>
      </section>
    </>
  );
};

export default Home;
