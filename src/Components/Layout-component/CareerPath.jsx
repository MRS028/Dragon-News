import React, { useEffect } from 'react';

const CareerPath = () => {
  useEffect(() => {
    document.title = "Career | Dragon News";
  }, []);
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Career Path</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore the diverse and exciting career opportunities at Dragon News. We believe in growth, development, and providing a clear path for our team members.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Reporter</h3>
            <p className="text-gray-600 mb-4">
              Start your journey as a reporter, uncovering the latest stories and breaking news.
            </p>
            <ul className="text-gray-600">
              <li>Gather and report news</li>
              <li>Conduct interviews</li>
              <li>Stay up-to-date with current events</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Editor</h3>
            <p className="text-gray-600 mb-4">
              Move on to an editorial position, shaping the quality and direction of the news content.
            </p>
            <ul className="text-gray-600">
              <li>Edit articles for clarity and accuracy</li>
              <li>Oversee reporters</li>
              <li>Develop editorial strategies</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Senior Journalist</h3>
            <p className="text-gray-600 mb-4">
              Take your career to the next level as a senior journalist, producing impactful and in-depth stories.
            </p>
            <ul className="text-gray-600">
              <li>Lead investigative stories</li>
              <li>Mentor junior reporters</li>
              <li>Contribute to editorial decisions</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <a
            href="/apply"
            className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CareerPath;
