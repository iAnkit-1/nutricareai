import React from 'react';

const Features = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-100">
          Features of Nutricare AI
        </h1>
        <p className="text-lg text-center mb-12 leading-relaxed max-w-4xl mx-auto opacity-80">
          Nutricare AI offers a range of advanced features to help you take control of your nutritional
          health. Our AI-powered model provides personalized, data-driven insights to help you make informed
          dietary choices based on your health goals and food preferences.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="hover:scale-105 transition-transform">
            <h2 className="text-3xl font-semibold mb-6 text-blue-400">Personalized Nutritional Insights</h2>
            <p className="text-lg leading-relaxed opacity-90">
              Nutricare AI delivers personalized nutritional insights based on your unique eating habits and health goals.
              By analyzing your daily food intake, it provides actionable recommendations to optimize your diet and
              achieve better health outcomes.
            </p>
            {/* Feature Icon (SVG) */}
            <div className="mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" className="mx-auto">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path fill="currentColor" d="M12 2L2 7l10 5 10-5z"/>
              </svg>
              <p className="text-center mt-2 text-lg opacity-90">Tailored recommendations to meet your health goals.</p>
            </div>
          </div>

          <div className="hover:scale-105 transition-transform">
            <h2 className="text-3xl font-semibold mb-6 text-blue-400">AI-Powered Analysis</h2>
            <p className="text-lg leading-relaxed opacity-90">
              Nutricare AI utilizes advanced machine learning algorithms to analyze your food intake. It identifies
              gaps or excesses in your diet and provides suggestions to help you maintain a balanced, healthy lifestyle.
            </p>
            {/* Feature Icon (SVG) */}
            <div className="mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" className="mx-auto">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path fill="currentColor" d="M21 7V5h-8v2H6V5H4v4h2v8h4v2H8v4h2v2h8v-2h-2V7h2z"/>
              </svg>
              <p className="text-center mt-2 text-lg opacity-90">AI-driven analysis of your dietary habits.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mt-12">
          <div className="hover:scale-105 transition-transform">
            <h2 className="text-3xl font-semibold mb-6 text-blue-400">Easy-to-Use Interface</h2>
            <p className="text-lg leading-relaxed opacity-90">
              Nutricare AI features an intuitive, user-friendly interface that makes it simple to track and analyze
              your daily meals. The system allows you to input your food intake effortlessly and receive clear,
              easy-to-understand feedback.
            </p>
            {/* Feature Icon (SVG) */}
            <div className="mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" className="mx-auto">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path fill="currentColor" d="M6 19h12V5H6v14zm0 2h12c1.1 0 1.99-.9 1.99-2L19 5c0-1.1-.9-2-1.99-2H6C4.9 3 4 3.9 4 5v14c0 1.1.9 2 2 2z"/>
              </svg>
              <p className="text-center mt-2 text-lg opacity-90">User-friendly design for easy tracking and analysis.</p>
            </div>
          </div>

          <div className="hover:scale-105 transition-transform">
            <h2 className="text-3xl font-semibold mb-6 text-blue-400">Scalable for All Diets</h2>
            <p className="text-lg leading-relaxed opacity-90">
              Whether you're following a specific diet or just trying to eat healthier, Nutricare AI is versatile and
              adaptable. It supports various types of diets, preferences, and health conditions, ensuring that
              everyone can benefit from its insights.
            </p>
            {/* Feature Icon (SVG) */}
            <div className="mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" className="mx-auto">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path fill="currentColor" d="M6 6h12v12H6z"/>
              </svg>
              <p className="text-center mt-2 text-lg opacity-90">Scalable features for all dietary needs and goals.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Get Started with Nutricare AI</h3>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
            Nutricare AI is the perfect companion for anyone looking to improve their eating habits and overall
            health. With its powerful features and easy-to-use interface, it's never been easier to stay on top of
            your nutrition and achieve your health goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
