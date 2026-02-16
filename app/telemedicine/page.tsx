import { Video, Shield, Clock, Globe } from 'lucide-react';

export default function TelemedicinePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              TeleMedicine Services
            </h1>
            <p className="text-xl leading-relaxed">
              Quality mental health care from the comfort and privacy of your own home
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold text-primary-700 mb-4">
                Accessible Mental Health Care
              </h2>
              <p className="text-xl text-gray-700">
                Accessing quality mental health care should never be limited by geography or circumstance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-primary-50 rounded-2xl p-8">
                <Video className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-primary-700 mb-4">
                  Virtual Sessions
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Schedule secure video sessions with licensed psychiatrists and therapists from anywhere. No travel required—just log in and connect.
                </p>
              </div>

              <div className="bg-primary-50 rounded-2xl p-8">
                <Shield className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-primary-700 mb-4">
                  HIPAA-Compliant
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our telemedicine platform is fully encrypted and HIPAA-compliant, ensuring your privacy and confidentiality at all times.
                </p>
              </div>

              <div className="bg-primary-50 rounded-2xl p-8">
                <Clock className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-primary-700 mb-4">
                  Flexible Scheduling
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Choose appointment times that work with your schedule. We offer flexible options to accommodate your lifestyle and commitments.
                </p>
              </div>

              <div className="bg-primary-50 rounded-2xl p-8">
                <Globe className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-primary-700 mb-4">
                  Same Quality of Care
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Whether in-person or virtual, you receive the same high-quality, compassionate psychiatric care from our experienced team.
                </p>
              </div>
            </div>

            {/* Services Available */}
            <div className="bg-gradient-to-br from-primary-700 to-primary-500 text-white rounded-2xl p-10">
              <h2 className="font-display text-3xl font-bold mb-6">
                Services Available via Telemedicine
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2" />
                      <span>Individual Therapy Sessions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2" />
                      <span>Medication Management</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2" />
                      <span>Psychiatric Evaluations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2" />
                      <span>Follow-up Consultations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2" />
                      <span>Couples Counseling</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2" />
                      <span>Family Therapy</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2" />
                      <span>Crisis Intervention</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2" />
                      <span>Ongoing Support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-primary-700 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Schedule your first telemedicine appointment today and experience quality mental health care from wherever you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17865361701"
              className="bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-600 transition-all hover:scale-105"
            >
              Call (786) 536-1701
            </a>
            <a
              href="/contact"
              className="bg-white text-primary-700 border-2 border-primary-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-50 transition-all hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
