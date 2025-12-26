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

          <section>
              <h2>Product Launch: Mcenvios Express (2024)</h2>
                  <p>Led the successful launch of the “Mcenvios Express” product by developing the implementation plan, conducting market research, overseeing testing and bug identification, creating process flowcharts, designing training materials, and managing user training. Addressed post-launch issues and compiled user feedback to enhance platform functionality.</p>
          </section>

          <section>
              <h2>WhatsApp Bot Development for Multi-Company Use (2024)</h2>
                  <p>Managed the development of a customizable WhatsApp bot to enhance customer outreach across multiple companies. Gathered requirements, led a cross-functional team, and oversaw technical development and testing. Resulted in streamlined communication, improved lead generation, and personalized engagement.</p>
          </section>

          <section>
              <h2>Technical Ticketing System Management (Ongoing)</h2>
              <p>Oversaw the company’s technical ticketing system, managing priorities and ensuring timely resolution of over 50 upgrades and bug fixes. Collaborated with cross-functional teams to enhance system performance and reliability, reducing downtime and improving user experience.</p>
          </section>

          <section>
              <h2>Process Automation for Mcartera Web Platforms (2023)</h2>
              <p>Led the automation of manual workflows and reporting systems based on Google Sheets for Mcartera. Designed and executed a comprehensive automation strategy, improving operational efficiency and allowing the team to focus on higher-value tasks.</p>
          </section>

          <section>
              <h2>AML Compliance Project (2023-2024)</h2>
              <p>Directed the Anti-Money Laundering (AML) project to ensure Mcenvios platform compliance with Banxico regulations. Coordinated between Compliance and Software Development teams, enhancing both regulatory alignment and operational workflows.</p>
          </section>

          <section>
              <h2>FX Franchise Platform Development and Monetization (2024)</h2>
              <p>Spearheaded the development of a platform to enhance operational tracking and compliance for exchange centers. Defined requirements, led platform development, and integrated AML tools, resulting in cost reduction and a new revenue stream through platform subscriptions to other businesses.</p>
          </section>

          <section>
              <h2>Monterrey Office Management & Cash Flow Operations (Ongoing)</h2>
              <p>Managed daily operations and cash logistics at the Monterrey office, overseeing weekly transactions nearing 1 million USD. Ensured accuracy, security, and efficient financial operations through strategic coordination and planning.</p>
          </section>

          <section>
              <h2>Regulatory Reporting for CNBV (Ongoing)</h2>
              <p>Provided consistent support to the Compliance team by generating and submitting regulatory reports to CNBV, avoiding regulatory fines exceeding $100,000 and reinforcing a strong compliance culture.</p>
          </section>

          <section>
              <h2>Advanced Google Sheets for Real-Time Data Analysis (2023)</h2>
              <p>Designed and maintained advanced Google Sheets tools that integrate multiple data sources with automated workflows. Enabled real-time decision-making, reduced manual input, and improved operational efficiency.</p>
          </section>

          <section>
              <h2>Expense Tracking & Forecasting System (2023)</h2>
              <p>Developed a real-time system for tracking expenses and generating financial forecasts. Enhanced planning capabilities across the organization through monthly and annual financial projections.</p>
          </section>

          <section>
              <h2>Revenue Behavior and Statistical Projections (2023)</h2>
              <p>Created detailed spreadsheets to analyze revenue trends and assess the probability of achieving financial targets using statistical models. Enabled data-driven forecasting across business units.</p>
          </section>

          <section>
              <h2>Strategic Engagements with Key Financial Institutions (2023–2024)</h2>
              <p>Negotiated and collaborated with executives from leading financial institutions including Mastercard, Currency Exchange International, Felixpago, and Transfermate to drive strategic partnerships and innovation.</p>
          </section>

          <section>
              <h2>2024 Corporate Strategy Planning (2023)</h2>
              <p>Contributed to the development of the company’s 2024 strategy by defining key objectives and assigning critical tasks across departments to ensure alignment with the company’s mission.</p>
          </section>

          <section>
              <h2>Shareholder Presentations (2023–2024)</h2>
              <p>Delivered structured results presentations (monthly, quarterly, annual) to shareholders covering Operations, Accounting & Finance, and Business Development, driving transparency and stakeholder confidence.</p>
          </section>

          <section>
              <h2>SOFIPO Account Creation Process Implementation (2023)</h2>
              <p>Implemented and documented the customer account creation process at the SOFIPO. Developed a comprehensive guide, document checklist, and KPI-based tracking file to improve commercial department oversight.</p>
          </section>

          <section>
              <h2>Product & Service Documentation (2023)</h2>
              <p>Documented all company products and services with commercial names, descriptions, platform availability, and customer segmentation to support marketing and sales strategies.</p>
          </section>

          <section>
              <h2>Cybersecurity Implementation & Training (2023)</h2>
              <p>Strengthened company cybersecurity by deploying Two-Factor Authentication (2FA), installing antivirus solutions, and creating educational materials to raise awareness and prevent cyber threats.</p>
          </section>

          <section>
              <h2>Operational Support & Infrastructure Development (2023–2024)</h2>
              <p>Led key administrative initiatives including equipment inventory management, account creation, and development of organizational charts. Created standardized documents (KYA, KYC, NDA) and automated commission tracking tools using Google Sheets.</p>
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
