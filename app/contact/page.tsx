'use client';

import { useState } from 'react';
import { Phone, Mail, Printer, MessageSquare, Instagram, Music2 } from 'lucide-react';
import PageHero from '../components/PageHero';



export const stores = [
  {
    id: 1,
    name: "Hands of gold massage",
    address: "Hotel sonata, Cl 44A #71 - 63, Laureles - Estadio, Medellín, Laureles",
    lat: 6.25027,
    lng: -75.59069,
    open: "24/7",
    phone: "+57 322 60 65 069",
    email: "handsofgoldmassagemed@gmail.com",
    services: ["Masajes", "Spa", "Relajación"],
    features: ["WiFi", "Parking", "Accesible"],
  },
  {
    id: 2,
    name: "Hands of gold massage",
    address: "Carrera 43B Cll. 10 – 38 El Poblado, Medellín, Colombia",
    lat: 6.21092,
    lng: -75.57069,
    open: "24/7",
    phone: "+57 322 60 65 069",
    email: "handsofgoldmassagemed@gmail.com",
    services: ["Masajes", "Spa", "Relajación"],
    features: ["WiFi", "Parking", "Accesible"],
  }
];

const mapStyles = [
  {
    featureType: "all",
    elementType: "geometry",
    stylers: [{ color: "green" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#c9e6f2" }]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }]
  },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }]
  },
];


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    smsConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);


   const [selectedStore, setSelectedStore] = useState<any>(stores[0]);
  const [hoveredStore, setHoveredStore] = useState<number | null>(null);
 
 const center = {
  lat: 6.2442,
  lng: -75.5812,
};


 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Validar consentimiento SMS
  if (!formData.smsConsent) {
    alert("You must agree to receive SMS messages before submitting the form.");
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        smsConsent: formData.smsConsent,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Thank you for contacting us! We will be in touch soon.");
      setFormData({ name: "", email: "", phone: "", smsConsent: false });
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error sending form:", error);
    alert("Error sending message.");
  }

  setIsSubmitting(false);
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <>
      <PageHero
        title="CONTACT US!"
        description="Please complete the form below with details about your consultation request, mental health concerns, insurance information, or any questions you may have. Our team is here to support you every step of the way."
        compact
      />

      {/* Contact Info and Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="font-display text-3xl font-bold text-primary-700 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Main Phone:</p>
                      <a href="tel:+17865361701" className="text-primary-600 hover:text-primary-700">
                        (786) 536-1701
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageSquare className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp:</p>
                      <a href="https://wa.me/17868934315" className="text-primary-600 hover:text-primary-700">
                        (786) 893-4315
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Printer className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Fax:</p>
                      <p className="text-gray-700">(305) 847-2447</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Email:</p>
                      <a href="mailto:psychiatry@integratedhealthcare.group" className="text-primary-600 hover:text-primary-700 break-all">
                        psychiatry@integratedhealthcare.group
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Music2 className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">TikTok:</p>
                      <a href="https://www.tiktok.com/@integratedhcg" target="_blank" rel="noreferrer" className="text-primary-600 hover:text-primary-700">
                        @integratedhcg
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Instagram className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Instagram:</p>
                      <a href="https://www.instagram.com/integrated_psych/?hl=en" target="_blank" rel="noreferrer" className="text-primary-600 hover:text-primary-700">
                        @integrated_psych
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="font-display text-2xl font-bold text-primary-700 mb-4">
                  Office Hours
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="font-semibold">Monday - Saturday:</div>
                  <div>09:00 am – 05:00 pm</div>
                  <div className="font-semibold">Sunday:</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      name="smsConsent"
                      checked={formData.smsConsent}
                      onChange={handleChange}
                      className="mt-1 mr-3 w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-700">
                      By checking this box, I consent to receive text messages related to consultation requests, mental health concerns, and insurance information from Integrated Health Care Group. You can reply "STOP" at any time to opt-out. Message and data rates may apply.
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={!formData.smsConsent || isSubmitting}
                  className="w-full bg-primary-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-600 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center text-primary-700 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-xl text-primary-700 mb-3">
                What is the experience of your psychiatrists?
              </h3>
              <p className="text-gray-700">
                All of our psychiatrists are board-certified and have extensive experience in providing mental health services. They have received specialized training in various areas of psychiatry and are committed to providing high-quality care to our patients.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-xl text-primary-700 mb-3">
                What conditions do you treat?
              </h3>
              <p className="text-gray-700">
                Integrated Health Care Group provides treatment for a range of mental health conditions, including depression, anxiety, bipolar disorder, schizophrenia, and personality disorders.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-xl text-primary-700 mb-3">
                What is the cost of treatment?
              </h3>
              <p className="text-gray-700">
                The cost of treatment varies depending on the type of service provided and your insurance coverage. We offer competitive rates and accept most major insurance plans. Please contact us to learn more about our fees and payment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}
