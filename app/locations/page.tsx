import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import Image from 'next/image';


interface Props {
  title: string;
  name: string;
  address: string;
  image: string;
}

 function OfficeSection({ title, name, address, image }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-12 py-28 border-t border-black/10">
      <h2 className="text-[56px] font-serif text-center mb-16">
        {title}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* Left */}
        <div className="space-y-10 text-lg text-black/80 leading-relaxed">
          <div className="space-y-5">
            <p><strong>Main Phone:</strong> (786) 536-1701</p>
            <p><strong>WhatsApp:</strong> (786) 893-4315</p>
            <p><strong>Fax:</strong> (305) 847-2447</p>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-3">
              {name}
            </h3>
            <p>{address}</p>
          </div>

          <div>
            <h4 className="text-2xl font-serif mb-3">Hours</h4>
            <p>Open today 09:00 am – 05:00 pm</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+17865361701"
              className="inline-flex items-center gap-2 rounded-full bg-[#f1e3cc] px-7 py-3 text-base font-semibold text-black transition hover:bg-[#e6d5bb]"
            >
              <Phone className="h-5 w-5" />
              Call (786) 536-1701
            </a>
            <a
              href="https://wa.me/17868934315"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3 text-base font-semibold text-white transition hover:bg-green-700"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp +1 (786) 893-4315
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="relative w-full h-[520px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}


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
                  <p>Monday - Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
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

              <div className="mt-8 border-t border-white/30 pt-6">
                <p className="font-semibold text-lg mb-3">Our Main Locations:</p>
                <ul className="space-y-2 text-base md:text-lg">
                  <li>Hialeah: 900 West 49th Street, Ste 512, Hialeah, FL 33012</li>
                  <li>Coral Gables: 1890 SW 57th Ave, Suite 106, Miami, FL 33155</li>
                  <li>Miami: 351 NW 42 Ave, Suite 406, Miami, FL 33126</li>
                </ul>
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
       <main>
      <OfficeSection
        title="Hialeah Office Location"
        name="Integrated Healthcare Group – Hialeah"
        address="900 West 49th Street, ste 512 Hialeah, Florida 33012, United States"
        image="/home2.webp"
      />

      <OfficeSection
        title="Coral Gables Office Location"
        name="Integrated Healthcare Group – Coral Gables"
        address="1890 SW 57th Ave Suite 106 Miami, FL, 33155"
        image="/home.webp"
      />

      <OfficeSection
        title="Miami Office Location"
        name="Integrated Healthcare Group – Miami"
        address="351 NW 42 Ave. Suite 406. Miami, FL 33126"
        image="/home1.webp"
      />
    </main>
    </>
  );
}
