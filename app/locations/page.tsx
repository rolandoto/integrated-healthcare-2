import { MapPin, Clock, Phone } from 'lucide-react';

export default function LocationsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Our Locations
            </h1>
            <p className="text-xl">
              Conveniently located throughout Miami-Dade County
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold text-primary-700 mb-4">
                Visit Us in Person
              </h2>
              <p className="text-xl text-gray-700">
                We have multiple locations across Miami-Dade County to serve you better
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-primary-50 rounded-2xl p-8">
                <MapPin className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-primary-700 mb-4">
                  Multiple Locations
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  With offices throughout Miami-Dade County, finding quality psychiatric care near you has never been easier. Contact us to find the location most convenient for you.
                </p>
              </div>

              <div className="bg-primary-50 rounded-2xl p-8">
                <Clock className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-primary-700 mb-4">
                  Flexible Hours
                </h3>
                <div className="text-gray-700">
                  <p className="font-semibold mb-2">Office Hours:</p>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-700 to-primary-500 text-white rounded-2xl p-10">
              <h2 className="font-display text-3xl font-bold mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Main Phone:</p>
                    <a href="tel:+17865361701" className="text-xl hover:underline">
                      (786) 536-1701
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">WhatsApp:</p>
                    <a href="https://wa.me/17868934315" className="text-xl hover:underline">
                      (786) 893-4315
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Fax:</p>
                    <p className="text-xl">(305) 847-2447</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-primary-700 mb-6">
            Ready to Visit Us?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Call us today to schedule an appointment at the location nearest you.
          </p>
          <a
            href="tel:+17865361701"
            className="bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-600 transition-all hover:scale-105 inline-block"
          >
            Book an Appointment
          </a>
        </div>
      </section>
    </>
  );
}
