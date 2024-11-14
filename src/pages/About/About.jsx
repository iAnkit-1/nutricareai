import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-100">
          About Nutricare AI
        </h1>
        <p className="text-lg text-center mb-12 leading-relaxed max-w-3xl mx-auto opacity-80">
          Nutricare AI is an innovative solution that uses advanced machine learning techniques to analyze
          your daily food intake and offer personalized nutritional recommendations. Built with the goal of
          helping users maintain a balanced diet, Nutricare AI leverages the power of AI to offer data-driven
          insights tailored to your specific health and dietary needs.
        </p>

        {/* AI Visual */}
        <div className="mb-12 text-center">
          <img
            src="https://via.placeholder.com/600x300/1a202c/808080?Text=AI+Nutrition+Model"
            alt="AI Nutrition Model"
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-blue-400">How It Works</h2>
            <p className="text-lg leading-relaxed opacity-90">
              Nutricare AI analyzes your food choices, portion sizes, and dietary preferences. By processing
              these details, it calculates the nutritional value of your daily meals and identifies potential
              gaps or excesses in your nutrition. The system then provides actionable recommendations to help
              you make healthier, more informed choices.
            </p>
            {/* AI Workflow Visual (SVG) */}
            <div className="mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" className="mx-auto">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path fill="currentColor" d="M3 12l7 5v-3h4v3l7-5-7-5v3h-4v-3l-7 5z"/>
              </svg>
              <p className="text-center mt-2 text-lg opacity-90">AI-driven analysis of your food intake and tailored recommendations.</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6 text-blue-400">Why Choose Nutricare AI?</h2>
            <ul className="list-disc list-inside text-lg opacity-90">
              <li>Personalized nutritional insights based on your unique dietary habits.</li>
              <li>AI-powered analysis of food intake for accurate recommendations.</li>
              <li>Data-driven approach to maintaining a balanced and healthy lifestyle.</li>
              <li>Easy-to-use interface that tracks and analyzes your daily food intake.</li>
              <li>Scalable for different types of diets, preferences, and health goals.</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Mission</h3>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
            Nutricare AI’s mission is to empower individuals with the knowledge they need to make better
            dietary choices, fostering a healthier and more balanced lifestyle for everyone. By leveraging
            cutting-edge AI technology, we aim to revolutionize how people approach nutrition and wellness.
          </p>
        </div>

        {/* AI Concept Image */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Join Us on Our Journey</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Whether you're looking to improve your eating habits, manage a specific health condition, or just
            explore healthier food options, Nutricare AI is here to guide you every step of the way. Join our
            growing community of health-conscious individuals who are taking control of their diets with the
            help of AI.
          </p>
          <img
            src="https://via.placeholder.com/800x400/1a202c/808080?Text=AI+Nutrition+Journey"
            alt="Join Nutricare AI"
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
