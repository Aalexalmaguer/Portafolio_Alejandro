import React from 'react';
import { Link } from 'react-router-dom';

const Certifications = () => {
  return (
    <>
      {/* HERO */}
      <section className="hero text-center py-5 border-bottom">
          <div className="container">
              <h1>Certifications & Courses</h1>
              <p className="lead">Lifelong learning through curated global programs.</p>
          </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="container py-5">
          <div className="row g-4">
          <div className="col-md-6">
              <h2>McKinsey Forward Program, McKinsey (2024)</h2>
              <p>Completed a six-month program focused on leadership, communication, and problem-solving in digital environments.</p>
              <a href="https://www.credly.com/badges/4b41cae8-1b0c-4a58-8e8b-41e00e7e9b18/linked_in_profile" target="_blank" rel="noopener noreferrer">
          <img src="/images/McKinsey.png" alt="McKinsey Forward Badge" className="img-fluid my-2" width="150" height="150" />
              </a>
          </div>
          <div className="col-md-6">
              <h2>Product Management Career, Coderhouse (2025)</h2>
              <p>Product lifecycle, UX, agile. <strong>Real case training.</strong></p>
              <img src="/images/carrera producto.png" className="img-fluid" alt="Product Certificate" />
          </div>
          <div className="col-md-6">
              <h2>Power BI Course, Coderhouse (2024)</h2>
              <p>Data visualization, dashboard creation with Microsoft tools.</p>
              <img src="https://coder-ui-static-content.coderhouse.com/certificates/754666f4-309e-4bb2-8a44-ab4cb241764c.png" className="img-fluid" alt="Power BI Certificate" />
          </div>
          <div className="col-md-6">
              <h2>Project Management Certificate, Google (2024)</h2>
              <p><a href="https://www.credly.com/badges/426953d9-b4c9-417b-a670-5b4fa5c63598/linked_in_profile" target="_blank">Credly Certificate ↗</a></p>
          </div>

          <div className="col-md-6">
              <h2>Cardano Blockchain Certified Associate (CBCA) Course, Cardano Foundation (2024)</h2>
              <p>Smart contracts, architecture and decentralization.</p>
              <img src="/images/cardano_certificate.jpg" className="img-fluid" alt="Cardano Certificate" />
          </div>

          <div className="col-md-6">
              <h2>English Proficiency Certificate (140, C1), Duolingo (2024)</h2>
              <p><a href="https://certs.duolingo.com/2ba04327b3285ea2884ac8a1670db86f" target="_blank">Verify Certificate ↗</a></p>
          </div>

          <div className="col-md-6">
              <h2>AI & Prompt Engineering Course, Coderhouse (2024)</h2>
              <p>Engineering effective prompts for AI tools.</p>
              <img src="/images/Certificado_IA.png" className="img-fluid" alt="IA Certificate" />
          </div>

          <div className="col-md-6">
              <h2>FinTech: Finance Industry Transformation and Regulation Specialization, The Hong Kong University of Science and Technology (2023)</h2>
              <p><a href="https://www.coursera.org/account/accomplishments/specialization/LAMNHK2XGZM4" target="_blank">View Specialization ↗</a></p>
          </div>

          <div className="col-md-6">
              <h2>Principles of Information Security, ESET Latin America (2023)</h2>
              <p>Threat modeling and cyber hygiene.</p>
          </div>

          <div className="col-md-6">
              <h2>Advanced Valuation and Strategy – M&A, Private Equity, and Venture Capital, Erasmus University Rotterdam (2023)</h2>
              <p><a href="https://www.coursera.org/account/accomplishments/verify/AT8GQP5ZQJVK" target="_blank">View Certificate ↗</a></p>
          </div>

          <div className="col-md-6">
              <h2>Figure 3 – Investment Strategy Advisor, Mexican Association of Stock Market Intermediaries (AMIB) (2023)</h2>
              <p><a href="https://www.credly.com/badges/060476f9-aab1-4996-b86c-383cecdf50bf/linked_in_profile" target="_blank">AMIB Badge ↗</a></p>
          </div>

          <div className="col-md-6">
              <h2>Bloomberg ESG Certificate, Bloomberg (2022)</h2>
              <p><a href="https://portal.bloombergforeducation.com/certificates/8nzqMQLfMSobkrnBJvcNDhcM" target="_blank">View Certificate ↗</a></p>
          </div>

          <div className="col-md-6">
              <h2>Bloomberg Market Concepts (BMC) Certification, Bloomberg (2022)</h2>
              <p><a href="https://portal.bloombergforeducation.com/certificates/ThFvWQnoQLRsi3UUtPcX87Bt" target="_blank">BMC Certificate ↗</a></p>
          </div>
          </div>

          {/* Navigation */}
          <div className="text-center mt-5">
              <Link to="/" className="btn btn-dark">← Back to Home</Link>
          </div>
      </main>
    </>
  );
};

export default Certifications;
