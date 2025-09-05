const faqs = [
  { q: 'How do I reset my password?', a: 'Go to Profile Settings > Change Password.' },
  { q: 'How do I contact support?', a: 'Email support@crewjah.com or use the Contact page.' },
  { q: 'How do I track my progress?', a: 'Visit the Progress Tracker page after logging in.' },
];

const Help = () => (
  <div className="edu-page edu-help">
    <h1>Help & Support</h1>
    <div className="edu-faq-list">
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqs.map((f, i) => (
          <li key={i} className="edu-faq-item">
            <b>{f.q}</b>
            <div>{f.a}</div>
          </li>
        ))}
      </ul>
    </div>
    <div className="edu-help-contact">
      <h2>Need more help?</h2>
      <p>Contact our support team at <a href="mailto:support@crewjah.com">support@crewjah.com</a> or use the <a href="/contact">Contact</a> page.</p>
    </div>
  </div>
);

export default Help;
