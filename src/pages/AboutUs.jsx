import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

const AboutUs = () => {
  const teamMembers = [
    // {
    //   name: 'Aderino Arya Nanda',
    //   role: 'Chief Executive Officer',
    //   imageUrl: 'https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/berkas-1754616162096-915845122.jpg',
    //   bio: 'Visioner di balik Bax Digital dengan semangat untuk inovasi dan pemberdayaan digital di Indonesia.',
    // },
    // {
    //   name: 'Nama COO',
    //   role: 'Chief Operating Officer',
    //   imageUrl: 'https://placehold.co/400x400/e74c3c/ffffff?text=COO',
    //   bio: 'Ahli strategi operasional yang menjalankan visi perusahaan menjadi kenyataan sehari-hari.',
    // },
  ];

  const values = [
    {
      icon: '💡',
      title: 'Inovasi',
      description: 'Kami tidak pernah berhenti mencari cara baru dan lebih baik untuk memecahkan masalah.',
    },
    {
      icon: '🤝',
      title: 'Kolaborasi',
      description: 'Kami percaya bahwa hasil terbaik lahir dari kerja sama tim yang solid dan kemitraan yang kuat.',
    },
    {
      icon: '📈',
      title: 'Pertumbuhan',
      description: 'Kami berkomitmen untuk terus belajar dan bertumbuh, baik sebagai individu maupun perusahaan.',
    },
  ];


  return (
    <main>
      <section className="bg-white py-10 md:py-15">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">PT. Bax Digital Indonesia</h1>
          <p className="section-subtitle mt-5 max-w-4xl mx-auto">
            Misi kami adalah mengakselerasi transformasi digital di Indonesia dengan menyediakan<br/> 
            platform, edukasi, dan solusi yang mudah diakses dan berdampak besar.
          </p>
        </div>
      </section>

      <section id="story" className="py-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="section-title text-gray-800 mb-2">Perjalanan Kami</h2>
              <p className="text-gray-600 mb-4">
                Berawal dari sebuah tekad merubah kehidupan pada tahun 2023, <strong>PT. Bax Digital Indonesia</strong> lahir dari keinginan untuk 
                menciptakan teknologi yang dapat membantu masyarakat menjadi lebih produktif dan berkembang.
                Kami melihat potensi besar yang belum termanfaatkan dan memutuskan untuk membangun 
                ekosistem yang mendukungnya.
              </p>
              <p className="text-gray-600">
                Dari peluncuran aplikasi pertama kami, BaxLancer, hingga pengembangan <strong>BaxAcademy</strong> dan kesuksesan <strong>BaxProject</strong>, 
                setiap langkah kami didasari oleh komitmen untuk menciptakan nilai dan peluang bagi semua orang.
              </p>
            </div>
            <div className="order-1 md:order-2">
                <img 
                    src="https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/berkas-1754616564655-517845958.jpg" 
                    alt="Perjalanan Bax Digital Indonesia" 
                    className="rounded-lg shadow-xl w-full"
                />
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-title text-gray-800">Nilai-Nilai Kami</h2>
            <p className="section-subtitle">Prinsip yang menjadi pemandu setiap langkah kami.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="card p-8 text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-title text-gray-800">Tim Inti Kami</h2>
            <p className="section-subtitle">Orang-orang penuh semangat di balik layar.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {teamMembers.map((member) => (
              <div key={member.name} className="card text-center p-6">
                <img
                  className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"
                  src={member.imageUrl}
                  alt={`Foto ${member.name}`}
                />
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 font-semibold">{member.role}</p>
                <p className="text-gray-600 mt-2 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <WhatsAppButton />
    </main>
  );
};

export default AboutUs;
