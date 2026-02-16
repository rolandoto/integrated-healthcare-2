import { CheckCircle, FileText, Phone } from 'lucide-react';

export default function InsurancePage() {
  const insuranceProviders = [
    'Aetna',
    'Blue Cross Blue Shield',
    'Cigna',
    'United Healthcare',
    'Humana',
    'Medicare',
    'Medicaid',
    'AvMed',
    'Oscar Health',
    'And many more...'
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Insurance & Payment Options
            </h1>
            <p className="text-xl">
              We accept most major insurance plans and offer flexible payment options
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-primary-50 rounded-2xl p-10 mb-12">
              <h2 className="font-display text-3xl font-bold text-primary-700 mb-6">
                Accepted Insurance Plans
              </h2>
              <p className="text-gray-700 mb-6">
                We work with most major insurance providers to make quality mental health care accessible and affordable. Below is a list of insurance plans we commonly accept:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {insuranceProviders.map((provider, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                    <span className="font-semibold text-gray-800">{provider}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <FileText className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-primary-700 mb-4">
                  Verify Your Coverage
                </h3>
                <p className="text-gray-700 mb-4">
                  Not sure if your insurance is accepted? Contact our office and we'll help you verify your coverage and understand your benefits.
                </p>
                <a
                  href="/contact"
                  className="text-primary-600 font-semibold hover:text-primary-700"
                >
                  Contact Us →
                </a>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <Phone className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-primary-700 mb-4">
                  Self-Pay Options
                </h3>
                <p className="text-gray-700 mb-4">
                  We also offer competitive self-pay rates for patients without insurance or those who prefer to pay out-of-pocket.
                </p>
                <a
                  href="tel:+17865361701"
                  className="text-primary-600 font-semibold hover:text-primary-700"
                >
                  Call for Pricing →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            Questions About Insurance or Payment?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our billing team is here to help. Contact us today to discuss your insurance coverage and payment options.
          </p>
          <a
            href="tel:+17865361701"
            className="bg-white text-primary-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 inline-block"
          >
            Call (786) 536-1701
          </a>
        </div>
      </section>
    </>
  );
}
