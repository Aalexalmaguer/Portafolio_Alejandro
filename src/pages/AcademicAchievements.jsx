import React from 'react';
import { Link } from 'react-router-dom';

const AcademicAchievements = () => {
  return (
    <>
      {/* HERO */}
      <section className="hero text-center py-5 border-bottom">
        <div className="container">
          <h1>Academic Achievements</h1>
          <p className="lead">Highlights from my university journey and competitions.</p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="container py-5">
        <section>
          <p>From 2019 to 2023, I pursued a Bachelor's degree in Finance at Tecnológico de Monterrey, one of the most prestigious universities in Latin America. During my studies, I specialized through minors in Hedge Fund Management, Alternative Investments, and Family Business Consulting. This academic path allowed me to build a strong foundation in financial theory and practice, while gaining in-depth knowledge of sophisticated investment strategies and advisory approaches tailored to family enterprises. My time at Tec de Monterrey was marked by academic rigor, hands-on learning, and a commitment to innovation and leadership in the financial field.</p>
        </section>

        <section>
          <h2>Creation of an Investment Portfolio for a Basic SIEFORE 70-74, InverCap (National Winner) (2023)</h2>
          <p>This project involved creating an investment portfolio for InverCap clients born between 1970 and 1974, utilizing the Black-Litterman optimization model along with expected macroeconomic assumptions to determine the weighting of each asset class. We established both passive and active management for domestic and international equities, justifying all the assets selected for the latter. It's important to note that the portfolio adhered to the standards set by CONSAR.</p>
        </section>

        <section>
          <h2>Social Impact Project, Fitch Ratings ESG (National Finalists) (2023)</h2>
          <p>We proposed Agranelo, a social initiative aimed at improving access to balanced, nutritious food in underserved communities within the metropolitan area of Nuevo León. We validated the project’s feasibility through detailed cash flow modeling, calculating key financial metrics such as IRR, Immediate Profitability Rate, Payback Period, and NPV. Additionally, we developed base, pessimistic, and optimistic scenarios, and evaluated the project's performance under a debt-financing structure.</p>
        </section>

        <section>
          <h2>Participation in the Applied Financial Markets Laboratory "Blue Lamb" (2023)</h2>
          <p>The Applied Financial Markets Laboratory, created by Professors Rodrigo Fenton and Javier Elizondo, provides a space to learn and reinforce capital markets topics. To earn the participation certificate, I pitched the company Synopsys Inc., where I presented and defended the following elements in front of professors and peers:</p>
          <ul>
            <li>Business model description</li>
            <li>Company segments</li>
            <li>Semiconductor industry ecosystem</li>
            <li>Investment thesis (Catalysts)</li>
            <li>Valuation using the FCF method</li>
            <li>Relative valuation</li>
            <li>Final valuation</li>
          </ul>
        </section>

        <section>
          <h2>Creation of a Structured Note, VECTOR (National Finalist) (2022)</h2>
          <p>My team and I developed a structured note, an alternative investment instrument that guarantees the client's initial investment over a term of 2 years. This was achieved by investing in a 2-year Mexican Zero-Coupon Bond and allocating the remaining funds to a derivative strategy known as the “Synthetic Iron Condor,” with the underlying asset being the "IDB INDEXAMERICA 50 STABILITY EXCESS RETURN INDEX" from our training partner VECTOR.</p>
        </section>

        <section>
          <h2>Financing Proposal, FEMSA (National Winner) (2021)</h2>
          <p>After analyzing FEMSA's capital structure, we proposed issuing debt and repurchasing a specific number of shares to reduce the WACC and enhance shareholder value without impacting the company's rating on a hedge basis.</p>
        </section>

        {/* Navigation */}
        <section className="text-center mt-5">
          <Link to="/" className="btn btn-dark">← Back to Home</Link>
        </section>
      </main>
    </>
  );
};

export default AcademicAchievements;
