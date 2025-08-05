import React from 'react';

const servicesData = [
  {
    icon: '💻',
    title: 'Jasa Pembuatan Web/App',
    description: 'Kami membangun solusi digital kustom, mulai dari website berbasis CMS yang mudah dikelola hingga aplikasi full-stack yang kompleks sesuai kebutuhan bisnis Anda.',
    tags: ['CMS', 'Full Development', 'UI/UX Design', 'Deployment']
  },
  {
    icon: '📢',
    title: 'Jasa Periklanan Digital',
    description: 'Tingkatkan visibilitas dan jangkauan bisnis Anda melalui strategi periklanan digital yang terukur, mencakup Google Ads, Social Media Ads, SEO, dan SEM.',
    tags: ['Ads', 'SEO', 'SEM', 'Social Media']
  },
  {
    icon: '🖥️📊',
    title: 'Kelas Digital Marketing',
    description: 'Program pelatihan intensif untuk Anda yang ingin menguasai dunia pemasaran digital, dari dasar hingga strategi tingkat lanjut yang diajar oleh praktisi ahli.',
    tags: ['Kurikulum Industri', 'Studi Kasus', 'Portfolio Project', 'Real-Project', 'Sertifikasi BAX DIGITAL']
  },
  {
    icon: '👨‍💻',
    title: 'Kelas Fullstack Developer',
    description: 'Menjadi seorang pengembang web handal dengan menguasai teknologi front-end dan back-end. Siap membangun aplikasi modern dari nol sampai tuntas.',
    tags: ['React', 'Node.js', 'Java', 'PHP', 'Portfolio Project', 'Real-Project', 'Sertifikasi BAX DIGITAL']
  },
  {
    icon: '📈',
    title: 'Pemasaran & Akuisisi Proyek',
    description: 'Divisi spesialis kami untuk eksekusi proyek lapangan berskala besar. Kami membantu klien mencapai target akuisisi dengan tim yang terlatih dan strategi terukur.',
    subItems: [
      'Registrasi Nasabah Perbankan',
      'Pendaftaran Merchant QRIS',
      'Pengajuan Kartu Kredit & KTA',
      'Registrasi Nasabah Saham/Trading',
      'Dan lain-lain'
    ]
  },
];

const Services = () => {
  return (
    <main>
      <section className="bg-white pt-20 md:pt-28 pb-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">Layanan Kami</h1>
          <p className="section-subtitle mt-6 max-w-3xl mx-auto">
            Solusi digital lengkap untuk mendukung pertumbuhan individu dan bisnis, dari pengembangan produk, pemasaran, edukasi, hingga eksekusi lapangan.
          </p>
        </div>
      </section>

      <section className="pt-8 pb-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {servicesData.map((service) => (
              <div key={service.title} className="card p-8 flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                
                {service.tags && (
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                )}

                {service.subItems && (
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    {service.subItems.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
