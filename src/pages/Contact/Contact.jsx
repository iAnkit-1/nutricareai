import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-100">
          Contact Us
        </h1>
        <p className="text-lg text-center mb-12 leading-relaxed max-w-3xl mx-auto opacity-80">
          We would love to hear from you! If you have any questions or feedback regarding Nutricare AI, feel free to reach out. Our team is always ready to assist you in your journey toward better nutrition.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-blue-400">Get In Touch</h2>
            <p className="text-lg leading-relaxed opacity-90">
              You can contact us through the following methods:
            </p>
            <ul className="list-disc list-inside text-lg opacity-90 mt-4">
              <li>Email: <a href="mailto:contact@nutricareai.com" className="text-blue-400">contact@nutricareai.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="text-blue-400">+91 9335 40 XXXX</a></li>
              <li>Address: 123 AI Street, Nutricare City, India</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6 text-blue-400">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-white">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-white">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-white">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-400 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Follow Us</h3>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
            Stay updated with the latest news and updates from Nutricare AI by following us on our social media channels.
          </p>
          <div className="mt-6 space-x-4 text-blue-400">
            <a href="https://twitter.com/nutricareai" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              Twitter
            </a>
            <a href="https://linkedin.com/company/nutricareai" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              LinkedIn
            </a>
            <a href="https://facebook.com/nutricareai" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
