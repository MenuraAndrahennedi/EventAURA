import React from 'react';
import MainHeader from '@/Components/Header/MainHeader';
import '../../css/terms.scss';

const TermsnPolicies = () => {
  return (
    <div className="page-wrapper d-flex flex-column min-vh-100">
      <header>
        <MainHeader />
      </header>

      <section className="terms-section">
        <div className="terms-header">
          <h1>Terms & Policies</h1>
          <p>
            Welcome to EventAura. Please read our Terms, Privacy Policies, Cookies Policy,
            License, and Registration guidelines carefully before using our platform.
          </p>
        </div>

        <div className="terms-body">
          <section>
            <h2>1. Terms of Use</h2>
            <p>
              By accessing or using EventAura, you agree to comply with these terms. Users
              are responsible for maintaining accurate information and following all
              applicable laws while using our services.
            </p>
          </section>

          <section>
            <h2>2. Privacy Policies</h2>
            <p>
              Your privacy is important to us. We collect and process personal data only
              for improving our services. We do not share or sell your data without your
              consent, unless required by law.
            </p>
          </section>

          <section>
            <h2>3. Cookies Policy</h2>
            <p>
              EventAura uses cookies to improve user experience, analyze traffic, and
              personalize content. You may disable cookies in your browser, but some
              features of the platform may not function properly.
            </p>
          </section>

          <section>
            <h2>4. License</h2>
            <p>
              All content, trademarks, and intellectual property on EventAura are owned by
              EventAura or respective licensors. You are granted a limited, non-transferable,
              and revocable license to use the platform for personal and non-commercial use.
            </p>
          </section>

          <section>
            <h2>5. Registrations</h2>
            <p>
              To access certain features, users may be required to register an account. You
              agree to provide accurate details and maintain the security of your account.
              EventAura reserves the right to suspend or terminate accounts that violate our
              terms.
            </p>
          </section>

          <section>
            <h2>6. Updates</h2>
            <p>
              We may revise these policies from time to time. Continued use of EventAura
              after updates constitutes acceptance of the revised policies.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default TermsnPolicies;
