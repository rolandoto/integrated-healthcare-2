'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceItem {
  title: string;
  shortDescription: string;
  fullDescription: string;
}

const services: ServiceItem[] = [
  {
    title: 'Depression & Anxiety',
    shortDescription: 'Depression, fear, and anxiety are some of the most common—and often most distressing—emotions we can face in life. These feelings can affect our motivation, relationships, work, and even our sense of identity. At Integrated Health Care, we offer personalized treatment plans combining therapy, medication management, and holistic support.',
    fullDescription: 'Depression, fear, and anxiety are some of the most common—and often most distressing—emotions we can face in life. These feelings can affect our motivation, relationships, work, and even our sense of identity. At Integrated Health Care, we offer personalized treatment plans combining therapy, medication management, and holistic support to help you restore the joy, energy, and clarity you deserve. Our goal is not just symptom relief, but lasting transformation.',
  },
  {
    title: 'Trauma & PTSD',
    shortDescription: "Surviving a traumatic experience can leave lasting emotional wounds. Feelings of hopelessness, fear, and panic often persist long after the event is over. Whether you're dealing with childhood trauma, combat-related PTSD, or loss-related grief, we provide trauma-informed care with safety, understanding, and empowerment.",
    fullDescription: "Surviving a traumatic experience can leave lasting emotional wounds. Feelings of hopelessness, fear, and panic often persist long after the event is over. Whether you're dealing with childhood trauma, combat-related PTSD, or loss-related grief, we provide trauma-informed care that meets you with safety, understanding, and empowerment. Our team uses evidence-based interventions to guide you gently through the healing process—at your own pace.",
  },
  {
    title: 'Bipolar Disorder',
    shortDescription: 'Living with Bipolar Disorder presents unique challenges—intense mood swings, energy shifts, and disruptions to daily life. At Integrated Health Care, we offer compassionate, structured care to help you stabilize your mood, identify early warning signs, and improve your quality of life.',
    fullDescription: 'Living with Bipolar Disorder presents unique challenges—intense mood swings, energy shifts, and disruptions to daily life. At Integrated Health Care, we offer compassionate, structured care to help you stabilize your mood, identify early warning signs, and improve your quality of life. Treatment may include medication management, individual therapy, and family support, all customized to fit your unique diagnosis and lifestyle.',
  },
  {
    title: 'Dementia',
    shortDescription: "A dementia diagnosis affects not only the individual, but their entire family. Memory loss, confusion, and behavioral changes can be overwhelming—but you don't have to face them alone.",
    fullDescription: "A dementia diagnosis affects not only the individual, but their entire family. Memory loss, confusion, and behavioral changes can be overwhelming—but you don't have to face them alone. We provide patient-focused care for individuals with dementia, as well as education and guidance for caregivers, so you can navigate this journey with dignity, knowledge, and compassionate support.",
  },
  {
    title: 'Schizophrenia',
    shortDescription: 'Schizophrenia requires specialized care and a long-term support system. Our dedicated psychiatric team works closely with patients and their families to manage symptoms, enhance functionality, and maintain stability. We emphasize:',
    fullDescription: 'Schizophrenia requires specialized care and a long-term support system. Our dedicated psychiatric team works closely with patients and their families to manage symptoms, enhance functionality, and maintain stability. We emphasize: Accurate diagnosis and medication monitoring, Cognitive and behavioral therapy, Education for both patients and caregivers, Crisis planning and relapse prevention. Our approach is comprehensive, respectful, and empowering, focusing on long-term well-being and integration into the community.',
  },
  {
    title: 'Telemedicine / Tele-Psychiatry',
    shortDescription: "Accessing quality mental health care should never be limited by geography or circumstance. Through our secure telemedicine platform, you can schedule virtual sessions with licensed professionals from the comfort and privacy of your own home.",
    fullDescription: "Accessing quality mental health care should never be limited by geography or circumstance. Through our secure telemedicine platform, you can schedule virtual sessions with licensed professionals from the comfort and privacy of your own home. Whether it's therapy, medication consultations, or couples counseling, we offer flexible, HIPAA-compliant services designed for modern living—without compromising the quality of care.",
  },
];

function ServiceCard({ service }: { service: ServiceItem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-8">
        <h3 className="font-display text-2xl font-bold text-primary-700 mb-4">
          {service.title}
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isExpanded ? service.fullDescription : service.shortDescription}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-primary-500 hover:text-primary-600 font-semibold transition-colors"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="ml-1 w-5 h-5" />
            </>
          ) : (
            <>
              Show More <ChevronDown className="ml-1 w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-2xl font-light italic mb-4">
              Specialized Care. Compassionate Approach. Personalized Healing.
            </p>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              At Integrated Health Care Group Psychiatry, we offer a full spectrum of mental health services designed to support individuals and families through every stage of life.
            </p>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-4">
              Whether you are navigating anxiety, depression, trauma, or chronic mental health conditions, our team of experienced psychiatrists, nurse practitioners, and therapists are here to walk with you—every step of the way.
            </p>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-4">
              Our mission is to deliver clinically effective, culturally sensitive, and deeply compassionate care. We believe mental health is health, and we are committed to helping our patients achieve lasting wellness, balance, and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center mb-12 text-primary-700">
            Our Areas of Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your consultation and take the first step toward better mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17865361701"
              className="bg-white text-primary-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105"
            >
              Call (786) 536-1701
            </a>
            <a
              href="/contact"
              className="bg-accent-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent-600 transition-all hover:scale-105"
            >
              Contact Us Online
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
