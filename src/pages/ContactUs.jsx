import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

const ContactUs = () => {
  return (
    <main>
      <section className="bg-white pb-12 pt-20 md:pt-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">Hubungi Kami</h1>
          <p className="section-subtitle mt-6 max-w-3xl mx-auto">
            Punya pertanyaan atau ingin berdiskusi tentang proyek? Kami siap membantu.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Informasi Kontak</h2>
              <p className="text-gray-600 mb-6">
                Anda juga dapat menghubungi kami melalui detail kontak di bawah ini atau mengunjungi kantor kami.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-4 mt-1 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <div>
                    <h4 className="font-semibold">Alamat Kantor</h4>
                    <p>Jl. Lenteng Agung Raya No.11a Rt13/Rw08, Lenteng Agung, Jagakarsa, Jakarta Selatan, Indonesia</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-4 mt-1 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p>admin@baxdigitalindonesia.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                  <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Aderino Arya Nanda" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Alamat Email</label>
                  <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="anda@email.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subjek</label>
                  <input type="text" name="subject" id="subject" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Contoh: Penawaran Kerjasama" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan</label>
                  <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Tuliskan pesan Anda di sini..."></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
      <WhatsAppButton />
    </main>
  );
};

export default ContactUs;
