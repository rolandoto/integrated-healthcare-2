"use client"
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import PageHero from '../components/PageHero';
import { useState } from 'react';
import { LoadScript, GoogleMap, Marker, OverlayView } from "@react-google-maps/api";

const containerStyle = { width: "100%", height: "100%" };

const mapStyles = [
  { featureType: "all", elementType: "geometry", stylers: [{ color: "#f5f5f0" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9e8d5" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
  { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#e8f0eb" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#d4eadb" }] },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#e0ece4" }] },
];

const stores = [
  {
    id: 1,
    name: "Integrated Healthcare Group – Miami",
    subtitle: "Miami, FL 33126",
    address: "351 NW 42nd Ave. Suite 406, Miami, FL 33126",
    phone: "(786) 536-1701",
    hours: "Mon – Sat: 9:00 AM – 5:00 PM",
    rating: 4.9,
    reviews: 84,
    images: [
      "/home1.webp"
    ],
    lat: 25.7750,
    lng: -80.2381,
  },
  {
    id: 2,
    name: "Integrated Healthcare Group – Coral Gables",
    subtitle: "Miami, FL 33155",
    address: "1890 SW 57th Ave Suite 106, Miami, FL 33155",
    phone: "(786) 536-1701",
    hours: "Mon – Sat: 9:00 AM – 5:00 PM",
    rating: 4.9,
    reviews: 72,
    images: [
      "/home.webp"
    ],
    lat: 25.7455,
    lng: -80.3026,
  },
  {
    id: 3,
    name: "Integrated Healthcare Group – Hialeah",
    subtitle: "Hialeah, FL 33012",
    address: "900 West 49th Street, Ste 512, Hialeah, FL 33012",
    phone: "(786) 536-1701",
    hours: "Mon – Sat: 9:00 AM – 5:00 PM",
    rating: 4.8,
    reviews: 58,
     images: [
      "/home2.webp"
    ],
    lat: 25.8358,
    lng: -80.2989,
  },
];

const center = { lat: 25.7935, lng: -80.2781 };

interface Props {
  title: string;
  name: string;
  address: string;
  image: string;
}
type Store = typeof stores[number];

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


  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [savedStores, setSavedStores] = useState<number[]>([]);

  const handleSelect = (store: Store) => {
    if (selectedStore?.id === store.id) {
      setSelectedStore(null);
    } else {
      setSelectedStore(store);
      setImgIndex(0);
    }
  };

  const toggleSave = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedStores((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedStore) return;
    setImgIndex((i) => (i + 1) % selectedStore.images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedStore) return;
    setImgIndex((i) => (i - 1 + selectedStore.images.length) % selectedStore.images.length);
  };


  return (
    <>
      <PageHero
        title="Our Locations"
        description="Conveniently located throughout Miami-Dade County"
      />

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

 <div className="flex flex-col lg:flex-row h-auto lg:h-screen font-sans">

      {/* ── LEFT PANEL ── */}
      <div className="w-full lg:w-[42%] overflow-y-auto bg-white border-r border-gray-100">
        <div className="p-8">
          <div className="mb-8 pb-6 border-b border-gray-100">
            <p className="text-xs tracking-widest uppercase text-[#00a878] font-medium mb-1">Find a location</p>
            <h2 className="text-3xl font-serif text-gray-900 mb-2">{stores.length} Clinics near you</h2>
            <p className="text-sm text-gray-500">Select a location to view details and get directions.</p>
          </div>

          <div className="space-y-3">
            {stores.map((store, index) => (
              <div
                key={store.id}
                onClick={() => handleSelect(store)}
                className={`group relative cursor-pointer rounded-xl border transition-all duration-200 overflow-hidden ${
                  selectedStore?.id === store.id
                    ? "border-[#00a878] shadow-lg shadow-green-50"
                    : "border-gray-200 hover:border-[#00a878] hover:shadow-md"
                }`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-200 ${
                  selectedStore?.id === store.id ? "bg-[#00a878]" : "bg-transparent group-hover:bg-[#00a878]"
                }`} />

                <div className="p-5 pl-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        selectedStore?.id === store.id
                          ? "bg-[#00a878] text-white"
                          : "bg-gray-100 text-gray-500 group-hover:bg-[#00a878] group-hover:text-white"
                      }`}>
                        {index + 1}
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 font-serif">{store.name}</h3>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span className="font-medium text-gray-700">{store.rating}</span>
                      <span className="text-gray-400">({store.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-sm text-gray-500 mb-2 ml-10">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#00a878]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>{store.address}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 ml-10">
                    <svg className="w-4 h-4 flex-shrink-0 text-[#00a878]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>{store.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-[#0a4a30] rounded-xl">
            <p className="text-xs tracking-widest uppercase text-[#7ecfb0] mb-1">Need help?</p>
            <p className="text-white font-serif text-lg mb-3">Call us directly</p>
            <a href="tel:7865361701" className="inline-flex items-center gap-2 bg-[#00a878] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#008f65] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 6V3z"/>
              </svg>
              (786) 536-1701
            </a>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[58%] h-[500px] lg:h-screen sticky top-0 relative">
        <LoadScript googleMapsApiKey="AIzaSyB5gsEN5HLPh4Q9RdCImZZVR71A-cXkY2Y">
          <GoogleMap
         
            mapContainerStyle={containerStyle}
            center={selectedStore ? { lat: selectedStore.lat, lng: selectedStore.lng } : center}
            zoom={selectedStore ? 14 : 11.5}
            options={{ styles: mapStyles, disableDefaultUI: true, zoomControl: true, fullscreenControl: true }}
            onClick={() => setSelectedStore(null)}
          >
            {stores.map((store) => (
              <Marker
                key={store.id}
                position={{ lat: store.lat, lng: store.lng }}
                onClick={() => handleSelect(store)}
                icon={{
                  url:
                    selectedStore?.id === store.id
                      ? ""
                      : "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
                          <svg width="36" height="46" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0C8 0 0 8 0 18c0 13 18 28 18 28s18-15 18-28C36 8 28 0 18 0z" fill="#00a878"/>
                            <circle cx="18" cy="17" r="8" fill="white"/>
                            <circle cx="18" cy="17" r="4" fill="#0a4a30"/>
                          </svg>`),
                }}
              />
            ))}

            {selectedStore && (
              <OverlayView
                position={{ lat: selectedStore.lat, lng: selectedStore.lng }}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                getPixelPositionOffset={(w, h) => ({ x: -(w / 2), y: -(h + 60) })}
              >
                <div
                  style={{
                    position: "relative",
                    width: "300px",
                    borderRadius: "16px",
                    overflow: "visible",
                    background: "#fff",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.22)",
                    fontFamily: "sans-serif",
                    cursor: "default",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Card inner (clip image) */}
                  <div style={{ borderRadius: "16px", overflow: "hidden" }}>

                    {/* Image carousel */}
                    <div style={{ position: "relative", height: "180px", overflow: "hidden", background: "#e0ece4" }}>
                      <img
                        src={selectedStore.images[imgIndex]}
                        alt={selectedStore.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />

                      {/* Save button */}
                      <button
                        onClick={(e) => toggleSave(selectedStore.id, e)}
                        style={{
                          position: "absolute", top: "10px", right: "46px",
                          width: "32px", height: "32px", borderRadius: "50%",
                          background: "rgba(255,255,255,0.92)", border: "none",
                          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24"
                          fill={savedStores.includes(selectedStore.id) ? "#e11d48" : "none"}
                          stroke={savedStores.includes(selectedStore.id) ? "#e11d48" : "#333"}
                          strokeWidth="2">
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                        </svg>
                      </button>

                      {/* Close button */}
                      <button
                        onClick={() => setSelectedStore(null)}
                        style={{
                          position: "absolute", top: "10px", right: "10px",
                          width: "32px", height: "32px", borderRadius: "50%",
                          background: "rgba(255,255,255,0.92)", border: "none",
                          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5">
                          <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                      </button>

                      {/* Prev arrow */}
                      {imgIndex > 0 && (
                        <button onClick={prevImg} style={{
                          position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)",
                          width: "28px", height: "28px", borderRadius: "50%",
                          background: "rgba(255,255,255,0.92)", border: "none", cursor: "pointer",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                        }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5">
                            <path d="M15 18l-6-6 6-6"/>
                          </svg>
                        </button>
                      )}

                      {/* Next arrow */}
                      {imgIndex < selectedStore.images.length - 1 && (
                        <button onClick={nextImg} style={{
                          position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)",
                          width: "28px", height: "28px", borderRadius: "50%",
                          background: "rgba(255,255,255,0.92)", border: "none", cursor: "pointer",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                        }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5">
                            <path d="M9 18l6-6-6-6"/>
                          </svg>
                        </button>
                      )}

                      {/* Dots */}
                      <div style={{ position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "5px" }}>
                        {selectedStore.images.map((_, i) => (
                          <div key={i} style={{
                            width: i === imgIndex ? "8px" : "6px",
                            height: i === imgIndex ? "8px" : "6px",
                            borderRadius: "50%",
                            background: i === imgIndex ? "#fff" : "rgba(255,255,255,0.5)",
                            transition: "all 0.2s",
                          }} />
                        ))}
                      </div>
                    </div>

                    {/* Info */}
                    <div style={{ padding: "14px 16px 6px", background: "#fff" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                        <div style={{ flex: 1, paddingRight: "8px" }}>
                          <p style={{ margin: 0, fontWeight: "700", fontSize: "15px", color: "#111", lineHeight: 1.3 }}>{selectedStore.name}</p>
                          <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#888" }}>{selectedStore.subtitle}</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "3px", flexShrink: 0 }}>
                          <svg width="13" height="13" viewBox="0 0 20 20" fill="#f59e0b">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          <span style={{ fontSize: "13px", fontWeight: "600", color: "#111" }}>{selectedStore.rating}</span>
                          <span style={{ fontSize: "12px", color: "#aaa" }}>({selectedStore.reviews})</span>
                        </div>
                      </div>
                      <p style={{ margin: "4px 0 2px", fontSize: "12px", color: "#555" }}>📍 {selectedStore.address}</p>
                      <p style={{ margin: "2px 0", fontSize: "12px", color: "#555" }}>🕐 {selectedStore.hours}</p>
                    </div>

                    {/* Actions */}
                    <div style={{ display: "flex", gap: "8px", padding: "10px 16px 14px", background: "#fff" }}>
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${selectedStore.lat},${selectedStore.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1, background: "#0a4a30", color: "#fff",
                          borderRadius: "10px", padding: "10px 0",
                          fontSize: "12px", fontWeight: "700", textAlign: "center",
                          cursor: "pointer", textDecoration: "none", display: "block",
                        }}
                      >
                        Get Directions
                      </a>
                      <a
                        href={`tel:${selectedStore.phone}`}
                        style={{
                          flex: 1, background: "#fff", color: "#0a4a30",
                          border: "2px solid #00a878", borderRadius: "10px", padding: "10px 0",
                          fontSize: "12px", fontWeight: "700", textAlign: "center",
                          cursor: "pointer", textDecoration: "none", display: "block",
                        }}
                      >
                        Call Now
                      </a>
                    </div>
                  </div>

                  {/* Pointer triangle */}
                  <div style={{
                    position: "absolute", bottom: "-10px", left: "50%", transform: "translateX(-50%)",
                    width: 0, height: 0,
                    borderLeft: "10px solid transparent",
                    borderRight: "10px solid transparent",
                    borderTop: "10px solid #fff",
                    filter: "drop-shadow(0 3px 3px rgba(0,0,0,0.1))",
                  }} />
                </div>
              </OverlayView>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>

    </>
  );
}
