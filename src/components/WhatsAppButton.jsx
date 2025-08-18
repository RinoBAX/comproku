import React from 'react';
//update

const WhatsAppButton = () => {
  const phoneNumber = "6285719409984"; 
  const message = "Halo, saya tertarik dengan layanan dari Bax Digital Indonesia. Bisakah saya mendapatkan informasi lebih lanjut?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Hubungi kami di WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="32"
        height="32"
        fill="white"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .4c37.9 0 74.3 14.8 101.6 42.2 27.2 27.2 42.2 63.7 42.2 101.6s-15 74.3-42.2 101.6c-27.2 27.2-63.7 42.2-101.6 42.2-37.9 0-74.3-14.8-101.6-42.2-27.2-27.2-42.2-63.7-42.2-101.6s15-74.3 42.2-101.6c27.2-27.2 63.7-42.2 101.6-42.2zM188.4 153.2c-2.4-4.8-10.7-5.2-14.3-5.2-3.3 0-7.2 1.2-11 4-3.8 2.8-13.1 12.8-13.1 31.1 0 18.2 13.4 36 15.3 38.5 1.9 2.5 26.2 41.9 63.8 56.2 37.6 14.3 37.6 9.5 44.4 8.8 6.8-.7 21.4-8.8 24.4-17.3 3-8.5 3-15.8 2.1-17.3-1-1.5-3.8-2.5-8-4.2-4.2-1.7-24.9-12.3-28.8-13.6-3.9-1.3-6.8-2.1-9.5 2.1-2.7 4.2-10.9 13.6-13.4 16.3-2.5 2.7-5 3-9.2 1.3s-18.1-6.7-34.5-21.3c-12.8-11.4-21.4-25.5-23.8-29.8z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
