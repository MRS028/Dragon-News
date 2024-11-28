import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us | Dragon News";
  }, []);
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          Dragon News is committed to delivering accurate and timely news from around the world. Our goal is to inform, engage, and inspire our readers with high-quality journalism.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              At Dragon News, our mission is to provide reliable news that helps our audience make informed decisions. We strive for truth, integrity, and transparency in all our reporting.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              Our vision is to become a trusted global news source, known for its ethical journalism and deep coverage of issues that matter. We aim to create a platform where people from all walks of life can stay informed.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
          <ul className="list-disc pl-8 text-gray-600">
            <li>Integrity: Upholding the highest standards of honesty in all our work.</li>
            <li>Transparency: Providing our audience with clear and accurate information.</li>
            <li>Innovation: Continuously evolving with the changing media landscape.</li>
            <li>Community: Fostering a strong connection with our audience.</li>
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg w-60">
              <img src="https://as2.ftcdn.net/v2/jpg/00/58/01/47/1000_F_58014702_QGlsmOkqpmD56kIdCswPk9HuQwxG9JYP.jpg" alt="Team Member" className=" rounded-full mb-4 w-32 h-32 mx-8" />
              <h4 className="text-lg font-semibold text-gray-800">John Doe</h4>
              <p className="text-gray-600">Editor-in-Chief</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-60">
              <img src="https://as1.ftcdn.net/v2/jpg/08/32/65/76/1000_F_832657643_fIz2K1PIHJiAtFBHXCJ9f4mdkZHEEqlQ.jpg" alt="Team Member" className= "rounded-full mb-4 w-32 h-32 mx-8" />
              <h4 className="text-lg font-semibold text-gray-800">Jane Smith</h4>
              <p className="text-gray-600">Lead Reporter</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-60">
              <img src="https://as1.ftcdn.net/v2/jpg/01/58/55/80/1000_F_158558099_MCmm1tVZ5d1wZyNIfxG107oSZHxtvu48.jpg" alt="Team Member" className= "rounded-full mb-4 w-32 h-32 mx-8" />
              <h4 className="text-lg font-semibold text-gray-800">Sarah Lee</h4>
              <p className="text-gray-600">Senior Journalist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
