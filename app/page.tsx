'use client';

import Link from 'next/link';
import { Phone, Heart, Users, Award } from 'lucide-react';
import Image from 'next/image';





function ContactPage() {
  return (
    <div className="min-h-screen bg-[#e2d5c6] flex items-center justify-center px-10 py-20">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT — FORM */}
        <div>
          <h2 className="text-3xl font-serif mb-10 tracking-wide">
            CONTACT US
          </h2>

          <div className="space-y-8">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-black/50 bg-transparent px-6 py-4 text-lg outline-none"
            />

            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-black/50 bg-transparent px-6 py-4 text-lg outline-none"
            />

            <textarea
              rows={6}
              placeholder="Please fill out the form below, and a member of our team will get back to you promptly."
              className="w-full border border-black/50 bg-transparent px-6 py-4 text-lg outline-none resize-none"
            />

            <button className="w-full bg-black text-white py-5 text-lg tracking-wider hover:bg-neutral-800 transition">
              Send
            </button>

            <p className="text-sm text-black/70 leading-relaxed text-center mt-6">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
          </div>
        </div>

        {/* RIGHT — INFO */}
        <div className="text-black space-y-10">
          <div>
            <h3 className="text-3xl font-serif mb-4">
              Better yet, see us in person!
            </h3>

            <div className="space-y-3 text-lg">
              <p><strong>Main Phone:</strong> (786) 536-1701</p>
              <p><strong>WhatsApp:</strong> (786) 893-4315</p>
              <p><strong>Fax:</strong> (305) 847-2447</p>
            </div>
          </div>

          <div>
            <p className="text-xl font-serif">
              We welcome you to visit any of our locations!
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-serif mb-4">Hours</h4>
            <ul className="space-y-2 text-lg">
              <li><strong>Mon</strong> 09:00 am – 05:00 pm</li>
              <li><strong>Tue</strong> 09:00 am – 05:00 pm</li>
              <li><strong>Wed</strong> 09:00 am – 05:00 pm</li>
              <li><strong>Thu</strong> 09:00 am – 05:00 pm</li>
              <li><strong>Fri</strong> 09:00 am – 05:00 pm</li>
              <li><strong>Sat</strong> 09:00 am – 12:00 pm</li>
              <li><strong>Sun</strong> Closed</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
}


export default function Home() {
   const images = [
    "/home.webp",
    "/home1.webp",
    "/home2.webp",
  ];
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://img1.wsimg.com/isteam/videos/V8Jxg8Q')] bg-cover bg-center" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            There is a better life <br />just a click away
          </h1>
          <a
            href="tel:+17865361701"
            className="inline-flex items-center bg-white text-primary-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <Phone className="w-5 h-5 mr-2" />
            Book Now
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-6 text-primary-700">
              At Integrated Health Care Group We Focus on Treating The Whole Person, Not Just The Diagnosis
            </h2>
            <div className="space-y-12">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="font-display text-3xl font-bold mb-4 text-primary-700">Our Medical Practice</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Integrated Health Care Group Psychiatry, we are more than just a mental health clinic — we are a compassionate, patient-centered practice focused on helping individuals and families live healthier, more fulfilling lives. With locations throughout Miami-Dade County, our mission is to deliver high-quality, evidence-based psychiatric care in a warm, welcoming, and inclusive environment.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We specialize in treating a wide range of mental health conditions, from depression and anxiety to complex psychiatric disorders like bipolar disorder, PTSD, and schizophrenia. Our team includes board-certified psychiatrists, psychiatric nurse practitioners, and licensed therapists who work collaboratively to provide personalized, holistic care tailored to each patient's needs.
                </p>
                
                <div className="bg-white p-6 rounded-xl">
                  <p className="font-bold text-primary-700 mb-3">Our Core Values:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Heart className="w-5 h-5 text-accent-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Compassion:</strong> We treat every patient with empathy, dignity, and respect.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-accent-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Collaboration:</strong> We partner with you in your healing journey, valuing your voice in all treatment decisions.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Award className="w-5 h-5 text-accent-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Excellence:</strong> We are committed to clinical excellence and continuous improvement in the services we offer.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Phone className="w-5 h-5 text-accent-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Accessibility:</strong> We offer flexible scheduling, telepsychiatry, and multiple office locations to meet you where you are.
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <Link
                    href="/our-team"
                    className="inline-block bg-primary-500 text-white px-6 py-3 rounded-full hover:bg-primary-600 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="bg-primary-50 p-8 rounded-2xl">
                <h3 className="font-display text-3xl font-bold mb-4 text-primary-700">Our Treatment Focus</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Integrated Health Care Group Psychiatry, our treatment focus is simple: <strong>you.</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We are deeply committed to providing patient-centered, evidence-based care that promotes emotional well-being, mental clarity, and long-term healing. Every individual is unique, and so is every treatment plan. Our focus is not only on addressing symptoms, but on understanding the root causes of distress and guiding each patient toward lasting wellness.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our approach combines medical expertise, therapeutic techniques, and emotional support to help patients navigate the complexities of mental health with confidence.
                </p>
                
                <div className="bg-white p-6 rounded-xl">
                  <p className="font-bold text-primary-700 mb-3">We treat a wide range of conditions, including:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mr-3" />
                        Depression and Anxiety
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mr-3" />
                        Bipolar Disorder
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mr-3" />
                        PTSD and Trauma
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mr-3" />
                        ADHD
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mr-3" />
                        Schizophrenia
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mr-3" />
                        Dementia and Cognitive Decline
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mr-3" />
                        Adjustment Disorders
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mr-3" />
                        Behavioral and Mood Challenges
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link
                    href="/services"
                    className="inline-block bg-primary-500 text-white px-6 py-3 rounded-full hover:bg-primary-600 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="bg-accent-50 p-8 rounded-2xl">
                <h3 className="font-display text-3xl font-bold mb-4 text-primary-700">Our Patient Promise</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Integrated Health Care Group Psychiatry, we promise to treat you with the compassion, respect, and clinical excellence you deserve. Your mental health matters — and so does your experience with us.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We understand that seeking care is a courageous step. That's why we're committed to creating a safe, judgment-free space where your voice is heard and your concerns are taken seriously. From your very first visit, we will work alongside you to understand your goals, build trust, and create a personalized care plan that supports your well-being.
                </p>
                
                <div className="bg-white p-6 rounded-xl">
                  <p className="font-bold text-primary-700 mb-3">Our Promise to You:</p>
                  <ul className="space-y-3">
                    <li>
                      <strong className="text-primary-700">Listen first.</strong> Every patient has a story — and we're here to listen with empathy and without judgment.
                    </li>
                    <li>
                      <strong className="text-primary-700">Provide evidence-based care.</strong> Our team relies on the latest clinical research and best practices to guide treatment.
                    </li>
                    <li>
                      <strong className="text-primary-700">Treat you with dignity and compassion.</strong> We honor your individuality, your identity, and your path to healing.
                    </li>
                    <li>
                      <strong className="text-primary-700">Empower you.</strong> You're not just a patient — you're a partner in your care. We'll make sure you feel informed, supported, and in control.
                    </li>
                    <li>
                      <strong className="text-primary-700">Protect your privacy.</strong> Your information is always handled with strict confidentiality and in accordance with HIPAA guidelines.
                    </li>
                    <li>
                      <strong className="text-primary-700">Foster inclusivity.</strong> We proudly serve patients from all backgrounds, cultures, and walks of life.
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-block bg-accent-500 text-white px-6 py-3 rounded-full hover:bg-accent-600 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold mb-6">Better yet, see us in person!</h2>
            <div className="space-y-4 mb-8">
              <p className="text-xl">
                <strong>Main Phone:</strong> <a href="tel:+17865361701" className="hover:underline">(786) 536-1701</a>
              </p>
              <p className="text-xl">
                <strong>WhatsApp:</strong> <a href="https://wa.me/17868934315" className="hover:underline">(786) 893-4315</a>
              </p>
              <p className="text-xl">
                <strong>Fax:</strong> (305) 847-2447
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Hours</h3>
              <div className="grid grid-cols-2 gap-4 text-left max-w-md mx-auto">
                <div>Mon - Fri:</div>
                <div>09:00 am – 05:00 pm</div>
                <div>Sat - Sun:</div>
                <div>Closed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactPage/>
        <section className="w-full h-[420px] grid grid-cols-3 overflow-hidden">
      {images.map((src, index) => (
        <div key={index} className="relative w-full h-full">
          <Image
            src={src}
            alt="Location"
            fill
            className="object-cover"
            priority
          />
        </div>
      ))}
    </section>

    
    </>
  );
}
