export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl">
              Your privacy and confidentiality are our top priorities
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Information We Collect</h2>
            <p>
              At Integrated Health Care Group, we collect personal information necessary to provide you with quality mental health services. This includes:
            </p>
            <ul>
              <li>Full name and contact information (phone, email, address)</li>
              <li>Insurance details and billing information</li>
              <li>Medical history and mental health records</li>
              <li>Communication preferences for appointment reminders and updates</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use your personal information exclusively for:
            </p>
            <ul>
              <li>Managing your appointments and providing psychiatric care</li>
              <li>Processing insurance claims and billing</li>
              <li>Sending time-sensitive reminders and follow-up communications</li>
              <li>Responding to your inquiries and providing customer support</li>
              <li>Complying with legal and regulatory requirements</li>
            </ul>

            <h2>HIPAA Compliance</h2>
            <p>
              We are fully compliant with the Health Insurance Portability and Accountability Act (HIPAA). Your protected health information (PHI) is handled with the strictest confidentiality and security measures.
            </p>

            <h2>Information Sharing</h2>
            <p>
              We do <strong>not</strong> sell, rent, or share your personal information with third-party marketers. Your data may only be shared with:
            </p>
            <ul>
              <li>HIPAA-compliant service providers who assist us in delivering healthcare services</li>
              <li>Insurance companies for claim processing</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. Our telemedicine platform and electronic health records are encrypted and regularly updated to maintain the highest security standards.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access and review your medical records</li>
              <li>Request corrections to your information</li>
              <li>Opt-out of non-essential communications</li>
              <li>Request restriction on certain uses of your information</li>
            </ul>

            <h2>SMS Messaging Privacy</h2>
            <p>
              If you opt-in to receive SMS messages, your mobile number is only used for appointment reminders and essential healthcare communications. You can opt-out at any time by replying STOP to any text message.
            </p>

            <h2>Cookies and Website Analytics</h2>
            <p>
              Our website uses cookies to analyze traffic and optimize your browsing experience. No personal health information is collected through cookies. By using our website, you consent to our use of cookies.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about our privacy practices or wish to exercise your privacy rights, please contact us:
            </p>
            <p>
              <strong>Phone:</strong> (786) 536-1701<br />
              <strong>Email:</strong> psychiatry@integratedhealthcare.group
            </p>

            <p className="text-sm text-gray-600 mt-8">
              Last Updated: January 2024
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
