import React from 'react';
import { Link } from 'react-router-dom';

const ProfessionalAchievements = () => {
  return (
    <>
      {/* HERO */}
      <section className="hero text-center py-5 border-bottom">
          <div className="container">
              <h1>Professional Achievements</h1>
              <p className="lead">Real-world impact and leadership across fintech projects.</p>
          </div>
      </section>

      {/* MAIN */}
      <main className="container py-5">
          <section>
              <p>Alejandro has led and delivered impactful projects in fintech, driving digital transformation, regulatory compliance, and operational efficiency. His work includes launching innovative products like Mcenvios Express, automating financial and AML processes, developing a scalable FX compliance platform, and implementing real-time financial tracking systems. He has collaborated with major financial institutions and contributed to strategic planning, cybersecurity, and executive reporting—consistently improving performance, compliance, and revenue generation.</p>
          </section>

          {/* --- 2025 HIGH IMPACT ACHIEVEMENTS --- */}

          <section>
              <h2>"Bridgepay" White-Label Platform Commercialization (2025)</h2>
              <p>Transformed an internal money transmission system into "Bridgepay," a scalable white-label solution. Successfully expanded market reach by powering operations for 5% of all Money Transmitters in Mexico, duplicating comprehensive operational, financial, and compliance functionalities for external institutions.</p>
          </section>

          <section>
              <h2>"Dotadores No Financieros" Cash Logistics Platform (2025)</h2>
              <p>Led the development of a product connecting cash providers with liquidity seekers, diversifying revenue for Money Transmitters. Captured ~2% of the Mexican market by integrating robust compliance filters to ensure secure, regulatory-compliant cash operations.</p>
          </section>

          <section>
              <h2>Foreign Exchange Franchise Optimization Platform (2024-2025)</h2>
              <p>Developed a platform to optimize operational tracking and compliance for exchange centers, integrating real-time AML screening. Eliminated external vendor costs and created a new subscription-based revenue stream by commercializing the solution to other centers.</p>
          </section>

          <section>
              <h2>Regulatory Reporting & Compliance Support (2023-2025)</h2>
              <p>Supported compliance teams by automating and generating regulatory reports for the CNBV. Ensured timely submissions and compliance accuracy, saving the company over $100,000 in potential fines and reinforcing a strong regulatory culture.</p>
          </section>

          <section>
              <h2>Development Team Migration & Infrastructure Management (2025)</h2>
              <p>Orchestrated the strategic migration of software operations from an external vendor to an in-house team. Managed infrastructure transfer and technical documentation, securing intellectual property and establishing a robust framework for future scalability.</p>
          </section>

          <section>
              <h2>BETA Platform Compliance & AML Enhancements (2025)</h2>
              <p>Led cross-functional teams to implement automated regulatory reporting, real-time blacklist screening, and transaction monitoring on the BETA platform. Significantly enhanced the institution's compliance posture and operational integrity with added security features like 2FA.</p>
          </section>

          <section>
              <h2>BETA Platform Financial Reporting Digitalization (2025)</h2>
              <p>Directed the centralization and automation of financial reporting within the BETA platform, eliminating manual Excel dependencies. Ensured real-time data accuracy and enabled a fully digital, error-resistant reporting ecosystem.</p>
          </section>

           {/* --- PREVIOUS ACHIEVEMENTS --- */}

          <section>
              <h2>Product Launch: Mcenvios Express (2024)</h2>
                  <p>Led the successful launch of “Mcenvios Express” by developing the implementation plan, conducting market research, and overseeing testing. Addressed post-launch issues and compiled user feedback to enhance platform functionality and user experience.</p>
          </section>

          <section>
              <h2>WhatsApp Bot Development for Multi-Company Use (2024)</h2>
                  <p>Managed the development of a customizable WhatsApp bot to enhance customer outreach. Gathered multi-company requirements and led technical development, resulting in streamlined communication and improved lead generation efficiency.</p>
          </section>

          <section>
              <h2>Technical Ticketing System Management (Ongoing)</h2>
              <p>Oversaw the company’s technical ticketing system, resolving over 200 upgrades and bug fixes. Collaborated with cross-functional teams to enhance system performance, reducing downtime and improving user experience.</p>
          </section>

          <section>
              <h2>Process Automation for Mcartera Web Platforms (2023)</h2>
              <p>Led the automation of manual workflows and reporting systems for Mcartera. Designed and executed a comprehensive automation strategy that improved operational efficiency and allowed the team to focus on higher-value strategic tasks.</p>
          </section>

          <section>
              <h2>Monterrey Office Management & Cash Flow Operations (Ongoing)</h2>
              <p>Managed daily operations and cash logistics at the Monterrey office, overseeing weekly transactions nearing 1 million USD. Ensured accuracy, security, and efficient financial operations through strategic coordination.</p>
          </section>

          <section>
              <h2>Advanced Google Sheets for Real-Time Data Analysis (2023)</h2>
              <p>Designed advanced Google Sheets tools integrating multiple data sources via APIs and scripts. Enabled real-time decision-making, reduced manual input, and improved operational efficiency across the group.</p>
          </section>

          <section>
              <h2>Expense Tracking & Forecasting System (2023)</h2>
              <p>Developed a real-time system for tracking expenses and generating financial forecasts. Enhanced planning capabilities across the organization through accurate monthly and annual financial projections.</p>
          </section>

          <section>
              <h2>Strategic Engagements with Key Financial Institutions (2023–2024)</h2>
              <p>Negotiated and collaborated with executives from leading financial institutions including Mastercard, Currency Exchange International, and Felixpago to drive strategic partnerships and innovation.</p>
          </section>

          <section>
              <h2>Cybersecurity Implementation & Training (2024)</h2>
              <p>Strengthened company cybersecurity by deploying Two-Factor Authentication (2FA), installing antivirus solutions, and creating educational materials to raise awareness and prevent cyber threats.</p>
          </section>

          <section>
              <h2>SOFIPO Account Creation Process Implementation (2024)</h2>
              <p>Implemented and documented the customer account creation process at the SOFIPO. Developed a comprehensive guide, document checklist, and KPI-based tracking file to improve commercial department oversight.</p>
          </section>

          {/* Back button */}
          <div className="text-center mt-5">
              <Link to="/" className="btn btn-dark">← Back to Home</Link>
          </div>
      </main>
    </>
  );
};

export default ProfessionalAchievements;