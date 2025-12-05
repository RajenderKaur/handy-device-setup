import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaPhone } from "react-icons/fa";
import PageTransition from "../../components/PageTransition";
import SectionHeading from "../../components/SectionHeading";

const PrimeVideoTV = () => {
  const [activationCode, setActivationCode] = useState("");
  const [isCodeSubmitted, setIsCodeSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activationCode.trim()) {
      setIsCodeSubmitted(true);
    }
  };

  return (
    <PageTransition>
      {/* Header */}
      <div className="bg-[url('https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center pt-32 pb-10 text-white relative">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {isCodeSubmitted ? "Success!" : "Register your TV or streaming device"}
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {isCodeSubmitted 
              ? <span className="whitespace-nowrap text-base md:text-xl">( Your code has been redeemed )</span>
              : "Enter the code shown on your device or TV to register with your account."}
          </motion.p>
        </div>
      </div>

      {isCodeSubmitted ? (
        /* Success Screen */
        <section className="pb-10 pt-5">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-3">Step -2</h2>
              <h3 className="whitespace-nowrap text-lg md:text-xl font-bold mb-5">( Call verification required )</h3>
              
              <p className="text-xl mb-5">
                Contact 24/7 Customer service to complete verification & get instant access.
              </p>
              
              <div className="flex justify-center mb-5">
                <motion.div
                  className="bg-primary-500 rounded-full w-16 h-16 flex items-center justify-center text-white"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowDown size={24} />
                </motion.div>
              </div>
              
              <a 
                href="tel:18557717123" 
                className="bg-indigo-700 text-white py-4 px-3 rounded-md whitespace-nowrap text-base md:text-xl font-semibold inline-block mb-5 hover:bg-indigo-800 transition-colors duration-300"
              >
                Call Now + 1-855-771-7123
              </a>
              
              <div className="mt-2">
                <a 
                  href="tel:18557717123" 
                  className="bg-indigo-700 text-white py-4 px-3 rounded-md whitespace-nowrap text-base md:text-xl font-semibold inline-block hover:bg-indigo-800 transition-colors duration-300"
                >
                  Prime Support 1-855-771-7123
                </a>
              </div>
            </motion.div>
            
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Smart TV with streaming content" 
                className="max-w-full md:max-w-2xl mx-auto rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </section>
      ) : (
        /* Code Entry Screen */
        <section className="pt-5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="mb-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <form onSubmit={handleSubmit} className="mb-12">
                  <div className="mb-6">
                    <input
                      type="text"
                      value={activationCode}
                      onChange={(e) => setActivationCode(e.target.value)}
                      placeholder="Enter code (e.g., XYZ12)"
                      className="w-full md:w-96 px-4 py-3 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 text-xl"
                  >
                    Register Device
                  </button>
                </form>
                
                <div className="mt-12">
                  <img 
                    src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                    alt="Smart TV with streaming content" 
                    className="max-w-full md:max-w-2xl mx-auto rounded-lg shadow-xl"
                  />
                </div>
              </motion.div>
              
              {/* Step-by-step Guide */}
              <SectionHeading 
                title="Set up Amazon Prime Video on your device" 
                subtitle="Follow these simple steps to get started with Prime Video on your favorite streaming device"
              />
              
              {/* Fire TV / Fire Stick */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <span className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                  Amazon Fire TV / Fire Stick
                </h3>
                <div className="ml-11">
                  <p className="text-gray-500 italic mb-4">(Prime Video is pre-installed, but if not:)</p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-gray-600 text-sm">•</span>
                      <span>Go to the <strong>Home</strong> screen.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-gray-600 text-sm">•</span>
                      <span>Select the <strong>Search (magnifying glass)</strong> icon.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-gray-600 text-sm">•</span>
                      <span>Type <strong>"Prime Video"</strong>.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-gray-600 text-sm">•</span>
                      <span>Select the app and click <strong>Download</strong> or <strong>Get</strong>.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-gray-600 text-sm">•</span>
                      <span>Once installed, open the app and sign in with your Amazon account.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Roku */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <span className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                  Roku
                </h3>
                <div className="ml-11">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-gray-600 text-sm">•</span>
                      <span>Press the <strong>Home</strong> button on your Roku remote.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-gray-600 text-sm">•</span>
                      <span>Scroll to and select <strong>Streaming Channels {'>'}  Search Channels</strong>.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-gray-600 text-sm">•</span>
                      <span>Type <strong>"Prime Video"</strong>.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-gray-600 text-sm">•</span>
                      <span>Select <strong>Amazon Prime Video</strong>, then click <strong>Add Channel</strong>.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-gray-600 text-sm">•</span>
                      <span>After installation, go to <strong>Home</strong>, open the app, and <strong>sign in</strong> or register via <strong>amazon.com/mytv</strong>.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Apple TV */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <span className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                  Apple TV (tvOS)
                </h3>
                <div className="ml-11">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-gray-600 text-sm">•</span>
                      <span>Open the <strong>App Store</strong> on your Apple TV.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-gray-600 text-sm">•</span>
                      <span>Search for <strong>Amazon Prime Video</strong>.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-gray-600 text-sm">•</span>
                      <span>Select the app, then click <strong>Get</strong> to install it.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-gray-600 text-sm">•</span>
                      <span>Open the app, sign in, or activate with the on-screen code.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Android TV */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <span className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                  Android TV (e.g., Sony, TCL, Hisense)
                </h3>
                <div className="ml-11">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-gray-600 text-sm">•</span>
                      <span>Go to <strong>Google Play Store</strong> on your device.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-gray-600 text-sm">•</span>
                      <span>Search for <strong>Prime Video</strong> and install it.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-gray-600 text-sm">•</span>
                      <span>Launch the app and sign in.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Smart TVs */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <span className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">5</span>
                  Smart TVs (Samsung, LG, etc.)
                </h3>
                <div className="ml-11">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-gray-600 text-sm">•</span>
                      <span>Most smart TVs come with the Prime Video app pre-installed or downloadable via their app stores.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-gray-600 text-sm">•</span>
                      <span>Open the <strong>Prime Video</strong> app, sign in, and activate the device if prompted.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}
      
      {/* Support CTA */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help With Your Setup?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our professional technicians can help you set up and optimize your streaming devices for the best viewing experience.
            </p>
            <a 
              href="tel:18557717123" 
              className="bg-white text-primary-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center text-lg font-semibold"
            >
              <FaPhone className="mr-2" /> Call for Expert Help: 1-855-771-7123
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default PrimeVideoTV; 