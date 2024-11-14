import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-6">About Nutricare AI</h1>
        <p className="text-lg text-center mb-12">
          Nutricare AI is an innovative solution that uses advanced machine learning techniques to analyze
          your daily food intake and offer personalized nutritional recommendations. Built with the goal of
          helping users maintain a balanced diet, Nutricare AI leverages the power of AI to offer data-driven
          insights tailored to your specific health and dietary needs.
        </p>

        {/* AI Visual */}
        <div className="mb-12 text-center">
          <img 
            src="https://via.placeholder.com/600x300/0000FF/808080?Text=AI+Nutrition+Model" 
            alt="AI Nutrition Model"
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <p className="text-lg">
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
              <p className="text-center mt-2">AI-driven analysis of your food intake and tailored recommendations.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Nutricare AI?</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Personalized nutritional insights based on your unique dietary habits.</li>
              <li>AI-powered analysis of food intake for accurate recommendations.</li>
              <li>Data-driven approach to maintaining a balanced and healthy lifestyle.</li>
              <li>Easy-to-use interface that tracks and analyzes your daily food intake.</li>
              <li>Scalable for different types of diets, preferences, and health goals.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg">
            Nutricare AI’s mission is to empower individuals with the knowledge they need to make better
            dietary choices, fostering a healthier and more balanced lifestyle for everyone. By leveraging
            cutting-edge AI technology, we aim to revolutionize how people approach nutrition and wellness.
          </p>
        </div>

        {/* AI Concept Image */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Join Us on Our Journey</h3>
          <p className="text-lg mb-6">
            Whether you're looking to improve your eating habits, manage a specific health condition, or just
            explore healthier food options, Nutricare AI is here to guide you every step of the way. Join our
            growing community of health-conscious individuals who are taking control of their diets with the
            help of AI.
          </p>
          <img 
            src="https://via.placeholder.com/800x400/0000FF/808080?Text=AI+Nutrition+Journey" 
            alt="Join Nutricare AI"
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
