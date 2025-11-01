import React from 'react';

const PricingPage: React.FC = () => {
  return (
    <section className="pricing-page" id="pricing">
      <div className="container">
        <h1>Simple, Transparent Pricing</h1>
        <p className="subtitle">Start free. Upgrade when you're ready.</p>

        <div className="pricing-grid">
          {/* Free Tier */}
          <div className="price-card free">
            <h3>Free</h3>
            <div className="price">₹0 <span>/month</span></div>
            <ul>
              <li>3 Resume uploads</li>
              <li>2 Interview sessions</li>
              <li>10 Job matches</li>
              <li>Basic ATS analysis</li>
            </ul>
            <button className="cta-button outline">Current Plan</button>
          </div>

          {/* Premium Tier */}
          <div className="price-card premium">
            <div className="popular">Most Popular</div>
            <h3>Premium</h3>
            <div className="price">₹799 <span>/month</span></div>
            <ul>
              <li><strong>Unlimited</strong> uploads</li>
              <li><strong>Unlimited</strong> interviews</li>
              <li><strong>Unlimited</strong> job matches</li>
              <li>Advanced ATS + LinkedIn optimization</li>
              <li>Priority support</li>
              <li>Export to PDF/Word</li>
            </ul>
            <button className="cta-button" onClick={() => alert('Redirect to Stripe')}>
              Upgrade Now
            </button>
          </div>
        </div>

        <div className="guarantee">
          <p>7-day money-back guarantee • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;