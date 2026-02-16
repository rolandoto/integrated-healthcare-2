import { Users, Award, Heart, Target } from 'lucide-react';

export default function OurTeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Our Team
            </h1>
            <p className="text-xl leading-relaxed">
              Meet our dedicated team of board-certified psychiatrists, psychiatric nurse practitioners, and licensed therapists who are committed to your mental wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-primary-50 rounded-2xl p-8">
                <Users className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-primary-700 mb-4">
                  Expert Professionals
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our team consists of board-certified psychiatrists and psychiatric nurse practitioners with extensive experience in treating a wide range of mental health conditions.
                </p>
              </div>

              <div className="bg-accent-50 rounded-2xl p-8">
                <Heart className="w-12 h-12 text-accent-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-primary-700 mb-4">
                  Compassionate Care
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every member of our team is dedicated to providing empathetic, patient-centered care that respects your unique journey and individual needs.
                </p>
              </div>

              <div className="bg-primary-50 rounded-2xl p-8">
                <Award className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-primary-700 mb-4">
                  Evidence-Based Treatment
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We utilize the latest clinical research and best practices to ensure you receive the most effective, up-to-date treatment available.
                </p>
              </div>

              <div className="bg-accent-50 rounded-2xl p-8">
                <Target className="w-12 h-12 text-accent-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-primary-700 mb-4">
                  Personalized Approach
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We understand that every patient is unique. Our team works collaboratively to create customized treatment plans tailored to your specific needs and goals.
                </p>
              </div>
            </div>

            {/* Team Philosophy */}
            <div className="bg-gradient-to-br from-primary-700 to-primary-500 text-white rounded-2xl p-10">
              <h2 className="font-display text-3xl font-bold mb-6">
                Our Commitment to You
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                At Integrated Health Care Group Psychiatry, our team is united by a shared commitment to excellence, compassion, and integrity. We believe that mental health care should be accessible, respectful, and effective for everyone.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Our clinicians bring diverse backgrounds and specialties, allowing us to provide comprehensive care for a wide range of mental health conditions. From depression and anxiety to complex psychiatric disorders, we have the expertise and experience to help you achieve lasting wellness.
              </p>
              <p className="text-lg leading-relaxed">
                When you choose Integrated Health Care Group, you're not just getting a provider—you're gaining a partner in your healing journey. We're here to listen, support, and empower you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-primary-700 mb-6">
            Ready to Meet Your Care Team?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Schedule a consultation today and take the first step toward better mental health with our dedicated professionals.
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
