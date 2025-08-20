import React, { useState } from 'react';

// Komponen Tombol WhatsApp (tidak ada perubahan)
const WhatsAppButton = () => {
    return (
        <a href="https://wa.me/6285719409984"
           target="_blank"
           rel="noopener noreferrer"
           title="Hubungi kami via WhatsApp"
           className="fixed bottom-5 right-5 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl z-50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8" fill="currentColor">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.2-27.2l-6.9-4.1-72.3 19 19.3-70.4-4.5-7.2c-19.3-30.7-29.8-66.3-29.8-103.3 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
        </a>
    );
};


const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: '',
    nama: '',
    telepon: '',
    subjek: '',
    pesan: '',
  });

  // State terpusat untuk semua pesan error
  const [errors, setErrors] = useState({});
  
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  // Fungsi validasi yang dipanggil setiap kali input berubah
  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'nama':
        if (value.trim().length > 0 && value.trim().length <= 3) {
          error = 'Masukkan Nama Lengkap';
        }
        break;
      case 'email':
        if (value.length > 0) {
          if (!value.includes('@')) {
            error = 'Alamat email harus menyertakan tanda "@".';
          } else if (!value.endsWith('.com')) {
            error = 'Domain email harus diakhiri dengan ".com".';
          }
        }
        break;
      case 'telepon':
        if (value.length > 0) {
            if (!value.startsWith('08')) {
                error = 'Masukkan Nomor Telepon / WhatsApp Anda';
            } else if (value.length < 10) {
                error = 'Lengkapi Nomor Telepon Anda';
            }
        }
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Batasan khusus untuk input telepon
    if (name === 'telepon') {
        if (value && !/^[0-9]+$/.test(value)) return;
        if (value.length > 14) return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  // Versi LENGKAP dengan logika fetch
const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi akhir untuk memastikan tidak ada field yang kosong
    let formIsValid = true;
    const newErrors = {};
    Object.keys(formData).forEach(key => {
        if (!formData[key]) {
            formIsValid = false;
            newErrors[key] = 'Field ini tidak boleh kosong.';
        }
    });

    // Periksa juga error dari validasi real-time
    const hasExistingErrors = Object.values(errors).some(error => error !== '');
    if (hasExistingErrors || !formIsValid) {
        setErrors(prev => ({ ...prev, ...newErrors }));
        setMessage('Harap perbaiki semua error pada form sebelum mengirim.');
        setStatus('error');
        return;
    }

    setStatus('loading');
    setMessage('Mengirim pesan...');

    try {
        // INI BAGIAN PENTING: Mengirim data ke serverless function Anda
        const response = await fetch('/api/kirim-ke-slack', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Terjadi kesalahan saat mengirim.');
        }

        // Jika berhasil:
        setStatus('success');
        setMessage('Terima kasih! Pesan Anda telah terkirim.');
        setFormData({ email: '', nama: '', telepon: '', subjek: '', pesan: '' }); // Reset form
        setErrors({}); // Bersihkan error

    } catch (error) {
        // Jika gagal:
        setStatus('error');
        setMessage(error.message || 'Gagal mengirim pesan. Silakan coba lagi.');
    }
};

  return (
    <main className="bg-white font-sans">
      {/* ... (bagian header & info kontak tidak berubah) ... */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-60" aria-hidden="true"></div>
        <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl text-center mx-auto">
                <h1 className="text-4xl pb-2 md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
                    Hubungi Kami
                </h1>
                <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600">
                    Punya ide brilian atau pertanyaan tentang project? Tim kami siap berdiskusi dan membantu Anda mewujudkan visi digital Anda.
                </p>
            </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Informasi Kontak</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    Anda dapat menghubungi kami melalui detail di bawah ini atau langsung mengisi formulir di samping.
                </p>
                <div className="space-y-6">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <div className="ml-4">
                            <h4 className="font-semibold text-lg text-gray-900">Alamat Kantor</h4>
                            <p className="text-gray-600">Jl. Lenteng Agung Raya No.11a, Jakarta Selatan</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <div className="ml-4">
                            <h4 className="font-semibold text-lg text-gray-900">Email</h4>
                            <p className="text-gray-600">admin@baxdigitalindonesia.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* --- INPUT EMAIL DENGAN VALIDASI --- */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Alamat Email</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required 
                         className={`mt-1 block w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-blue-500'} focus:border-transparent transition`} 
                         placeholder="anda@gmail.com" />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* --- INPUT NAMA DENGAN VALIDASI --- */}
                <div>
                  <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <input type="text" name="nama" id="nama" value={formData.nama} onChange={handleChange} required 
                         className={`mt-1 block w-full px-4 py-3 border ${errors.nama ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errors.nama ? 'focus:ring-red-500' : 'focus:ring-blue-500'} focus:border-transparent transition`} 
                         placeholder="Agung Hendra Saputra" />
                  {errors.nama && <p className="text-red-500 text-sm mt-1">{errors.nama}</p>}
                </div>

                {/* --- INPUT TELEPON DENGAN VALIDASI --- */}
                <div>
                  <label htmlFor="telepon" className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon (WhatsApp)</label>
                  <input type="tel" name="telepon" id="telepon" value={formData.telepon} onChange={handleChange} required minLength="10" maxLength="14"
                         className={`mt-1 block w-full px-4 py-3 border ${errors.telepon ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errors.telepon ? 'focus:ring-red-500' : 'focus:ring-blue-500'} focus:border-transparent transition`} 
                         placeholder="Contoh: 081234567890" />
                  {errors.telepon && <p className="text-red-500 text-sm mt-1">{errors.telepon}</p>}
                </div>

                {/* --- INPUT SUBJEK DENGAN KETERANGAN --- */}
                <div>
                  <label htmlFor="subjek" className="block text-sm font-medium text-gray-700 mb-1">Subjek</label>
                  <p className="text-xs text-gray-500 mb-1">Isi untuk kami memahami kebutuhan anda</p>
                  <input type="text" name="subjek" id="subjek" value={formData.subjek} onChange={handleChange} required 
                         className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
                         placeholder="Contoh: Daftar Kelas Digital Marketing" />
                </div>

                <div>
                  <label htmlFor="pesan" className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                  <textarea id="pesan" name="pesan" rows="4" value={formData.pesan} onChange={handleChange} required 
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
                            placeholder="Tuliskan pesan Anda di sini..."></textarea>
                </div>

                <div>
                  <button type="submit" disabled={status === 'loading'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-md font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:scale-100">
                    {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
                  </button>
                </div>
                {message && (
                    <p className={`text-center text-sm ${status === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                        {message}
                    </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ... (bagian Peta & WhatsAppButton tidak berubah) ... */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.509889240439!2d106.8322703153442!3d-6.326880995420311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69edc1a3842a5d%3A0xe545e853315a67c5!2sJl.%20Lenteng%20Agung%20Raya%20No.11a%2C%20RT.3%2FRW.2%2C%20Srengseng%20Sawah%2C%20Kec.%20Jagakarsa%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012640!5e0!3m2!1sen!2sid!4v1663332198765!5m2!1sen!2sid" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
};

export default ContactUs;