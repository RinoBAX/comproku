import React, { useState } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: '',
    nama: '',
    telepon: '',
    subjek: '',
    pesan: '',
  });

  const [errors, setErrors] = useState({});
  
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

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

const handleSubmit = async (e) => {
    e.preventDefault();

    let formIsValid = true;
    const newErrors = {};
    Object.keys(formData).forEach(key => {
        if (!formData[key]) {
            formIsValid = false;
            newErrors[key] = 'Field ini tidak boleh kosong.';
        }
    });

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

        setStatus('success');
        setMessage('Terima kasih! Pesan Anda telah terkirim.');
        setFormData({ email: '', nama: '', telepon: '', subjek: '', pesan: '' });
        setErrors({});

    } catch (error) {
        setStatus('error');
        setMessage(error.message || 'Gagal mengirim pesan. Silakan coba lagi.');
    }
};

  return (
    <main className="bg-white font-sans">
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
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Alamat Email</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required 
                         className={`mt-1 block w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-blue-500'} focus:border-transparent transition`} 
                         placeholder="anda@gmail.com" />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <input type="text" name="nama" id="nama" value={formData.nama} onChange={handleChange} required 
                         className={`mt-1 block w-full px-4 py-3 border ${errors.nama ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errors.nama ? 'focus:ring-red-500' : 'focus:ring-blue-500'} focus:border-transparent transition`} 
                         placeholder="Agung Hendra Saputra" />
                  {errors.nama && <p className="text-red-500 text-sm mt-1">{errors.nama}</p>}
                </div>

                <div>
                  <label htmlFor="telepon" className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon (WhatsApp)</label>
                  <input type="tel" name="telepon" id="telepon" value={formData.telepon} onChange={handleChange} required minLength="10" maxLength="14"
                         className={`mt-1 block w-full px-4 py-3 border ${errors.telepon ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errors.telepon ? 'focus:ring-red-500' : 'focus:ring-blue-500'} focus:border-transparent transition`} 
                         placeholder="Contoh: 081234567890" />
                  {errors.telepon && <p className="text-red-500 text-sm mt-1">{errors.telepon}</p>}
                </div>

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