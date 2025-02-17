import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | StudyWeek</title>
        <meta name="description" content="Privacy policy for StudyWeek. We do not collect or store any personal data." />
      </Head>

      <div style={{ maxWidth: "800px", margin: "auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Privacy Policy</h1>
        <p><strong>Last updated: February 17, 2025</strong></p>

        <p>StudyWeek does <strong>not</strong> collect, store, or share any personal data. The app operates entirely on-device and does not use analytics, tracking, or third-party services that process user data.</p>

        <h2>1. Information We Collect</h2>
        <p>We do not collect or process any personal information.</p>

        <h2>2. Third-Party Services</h2>
        <p>Our app does not use third-party analytics, tracking, or advertising services.</p>

        <h2>3. Security</h2>
        <p>Since StudyWeek does not collect any data, there are no security risks related to user data storage or transmission.</p>

        <h2>4. Changes to this Policy</h2>
        <p>We may update this Privacy Policy if needed. If we make changes, we will post the updated policy on our website.</p>

        <h2>5. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, you can contact us at:</p>
        <ul>
          <li>📧 <a href="mailto:your-email@example.com">your-email@example.com</a></li>
          <li>🌍 <a href="https://www.meritonaliu.ch" target="_blank" rel="noopener noreferrer">www.meritonaliu.ch</a></li>
        </ul>
      </div>
    </>
  );
}
