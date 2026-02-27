const WHATSAPP_NUMBER = "17868934315";
const WHATSAPP_MESSAGE = "Hi welcome";

export default function WhatsAppFloatButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-[#20ba5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true" fill="currentColor">
        <path d="M19.11 17.21c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.6.13-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.15-1.34-.79-.71-1.32-1.58-1.47-1.85-.16-.27-.02-.42.11-.56.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.47.07-.72.34-.24.27-.94.92-.94 2.25 0 1.34.96 2.63 1.09 2.81.13.18 1.88 2.88 4.56 4.04.64.27 1.15.43 1.54.55.65.2 1.24.17 1.7.1.52-.08 1.58-.65 1.8-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.31Z" />
        <path d="M16.03 3.2c-6.97 0-12.63 5.66-12.63 12.63 0 2.23.58 4.41 1.69 6.34L3.2 28.8l6.8-1.85a12.57 12.57 0 0 0 6.03 1.54h.01c6.97 0 12.63-5.66 12.63-12.63S22.99 3.2 16.03 3.2Zm0 22.96h-.01c-1.86 0-3.69-.5-5.29-1.46l-.38-.22-4.03 1.1 1.08-3.93-.25-.4a10.3 10.3 0 0 1-1.58-5.47c0-5.71 4.64-10.35 10.36-10.35 2.77 0 5.38 1.08 7.34 3.03a10.3 10.3 0 0 1 3.02 7.34c0 5.71-4.64 10.36-10.35 10.36Z" />
      </svg>
    </a>
  );
}
