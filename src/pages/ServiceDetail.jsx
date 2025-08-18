import React from 'react';
import { useParams, Link } from 'react-router-dom';
//update
const servicesData = [
    {
        slug: 'jasa-pembuatan-web-app',
        icon: '💻',
        title: 'Jasa Pembuatan Web/App',
        description: 'Kami membangun solusi digital kustom, mulai dari website berbasis CMS yang mudah dikelola hingga aplikasi full-stack yang kompleks sesuai kebutuhan bisnis Anda.',
        tags: ['CMS', 'Full Development', 'UI/UX Design', 'Deployment'],
        details: 'Kami memahami bahwa setiap bisnis memiliki kebutuhan unik. Oleh karena itu, kami menawarkan pendekatan konsultatif untuk merancang dan membangun solusi digital yang tidak hanya fungsional tetapi juga memberikan pengalaman pengguna yang luar biasa. Proses kami meliputi tahap perencanaan, desain UI/UX, pengembangan, pengujian, hingga peluncuran dan pemeliharaan.'
    },
    {
        slug: 'jasa-periklanan-digital',
        icon: '📢',
        title: 'Jasa Periklanan Digital',
        description: 'Tingkatkan visibilitas dan jangkauan bisnis Anda melalui strategi periklanan digital yang terukur, mencakup Google Ads, Social Media Ads, SEO, dan SEM.',
        tags: ['Google Ads', 'Social Media Ads', 'SEO', 'SEM'],
        details: 'Di era digital, kehadiran online yang kuat adalah kunci. Tim kami akan membantu Anda merumuskan strategi periklanan yang efektif untuk menjangkau audiens yang tepat, meningkatkan konversi, dan mengoptimalkan anggaran pemasaran Anda. Kami menyediakan laporan transparan untuk memantau kinerja kampanye secara berkala.'
    },
    {
        slug: 'kelas-digital-marketing',
        icon: '🖥️📊',
        title: 'Kelas Digital Marketing',
        description: 'Program pelatihan intensif untuk Anda yang ingin menguasai dunia pemasaran digital, dari dasar hingga strategi tingkat lanjut yang diajar oleh praktisi ahli.',
        tags: ['Kurikulum Industri', 'Studi Kasus', 'Portfolio Project', 'Sertifikasi'],
        details: 'Kurikulum kami dirancang berdasarkan kebutuhan industri terkini. Anda akan belajar langsung dari para ahli melalui studi kasus nyata dan proyek portofolio. Di akhir program, Anda akan mendapatkan sertifikasi resmi dari BAX DIGITAL sebagai bukti kompetensi Anda di bidang pemasaran digital.'
    },
    {
        slug: 'kelas-fullstack-developer',
        icon: '👨‍💻',
        title: 'Kelas Fullstack Developer',
        description: 'Menjadi seorang pengembang web handal dengan menguasai teknologi front-end dan back-end. Siap membangun aplikasi modern dari nol sampai tuntas.',
        tags: ['React', 'Node.js', 'Database', 'API', 'Portfolio Project'],
        details: 'Program ini akan membekali Anda dengan keterampilan teknis yang paling dicari di industri. Anda akan belajar membangun aplikasi web yang responsif dan scalable menggunakan teknologi seperti React untuk front-end dan Node.js untuk back-end. Proyek akhir akan menjadi portofolio berharga untuk karir Anda.'
    },
    {
        slug: 'pemasaran-akuisisi-proyek',
        icon: '📈',
        title: 'Pemasaran & Akuisisi Proyek',
        description: 'Divisi spesialis kami untuk eksekusi proyek lapangan berskala besar. Kami membantu klien mencapai target akuisisi dengan tim yang terlatih dan strategi terukur.',
        subItems: [
          'Registrasi Nasabah Perbankan',
          'Pendaftaran Merchant QRIS',
          'Pengajuan Kartu Kredit & KTA',
          'Registrasi Nasabah Saham/Trading',
        ],
        details: 'Tim lapangan kami yang berpengalaman siap membantu bisnis Anda mencapai target akuisisi secara efisien. Dengan metodologi yang teruji dan pemahaman mendalam tentang pasar lokal, kami memastikan setiap proyek dijalankan dengan standar profesionalisme tertinggi untuk hasil yang optimal.'
    },
];

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold">404 - Layanan Tidak Ditemukan</h1>
        <p className="mt-4 text-lg text-gray-600">Maaf, layanan yang Anda cari tidak ada.</p>
        <Link to="/layanan" className="mt-8 inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700">
          Kembali ke Halaman Layanan
        </Link>
      </div>
    );
  }

  const message = `Halo PT. Bax Digital Indonesia, saya tertarik dengan layanan "${service.title}". Mohon informasinya.`;
  const whatsappUrl = `https://wa.me/6285719409984?text=${encodeURIComponent(message)}`;

  return (
    <main className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-12">
          
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Link to="/layanan" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-800 transition-colors">
                &larr; Semua Layanan
              </Link>
              <div className="flex items-center gap-x-4 mt-4">
                <span className="text-5xl">{service.icon}</span>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{service.title}</h1>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead font-semibold">{service.description}</p>
              <p>{service.details}</p>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:col-span-1">
            <div className="lg:sticky lg:top-24 rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Detail Layanan</h3>
              
              {service.tags && (
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Fokus & Teknologi:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{tag}</span>
                    ))}
                  </div>
                </div>
              )}

              {service.subItems && (
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Cakupan Proyek:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
                    {service.subItems.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full text-center bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-sm transition-all duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-[1.02]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Diskusikan Kebutuhan Anda
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetail;
