
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import { services, setupGuides } from "../constants";

const Services = () => {
  return (
    <PageTransition>
      {/* Header */}
      <div className="bg-primary-500 pt-32 pb-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional home entertainment setup services tailored to your needs
          </motion.p>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What We Offer" 
            subtitle="Explore our range of professional installation and setup services"
          />
          
          {/* Service 1 */}
          <div id="tv-mounting" className="scroll-mt-24">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold mb-4">TV Mounting & Installation</h3>
                <p className="text-gray-600 mb-4">
                  Our professional TV mounting service ensures your television is perfectly installed on any wall type. We take care of everything from selecting the right mount for your TV size and weight to ensuring all wires are neatly hidden for a clean, professional look.
                </p>
                <p className="text-gray-600 mb-6">
                  Our service includes:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>Professional assessment of your wall type and location</li>
                  <li>Recommendation and installation of appropriate TV mount</li>
                  <li>Secure mounting with proper anchoring techniques</li>
                  <li>Perfect positioning at the optimal viewing height and angle</li>
                  <li>Complete wire concealment for a clean, professional finish</li>
                  <li>Testing of all connections to ensure everything works perfectly</li>
                </ul>
                <Link to="/contact" className="btn-primary inline-block">
                  Schedule Installation
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="TV Mounting Service" 
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Service 2 */}
          <div id="home-theater" className="scroll-mt-24">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div>
                  <img 
                    src="https://images.pexels.com/photos/13348768/pexels-photo-13348768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Home Theater Installation" 
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Home Theater Installation</h3>
                <p className="text-gray-600 mb-4">
                  Experience cinema-quality sound and visuals in the comfort of your home with our professional home theater installation service. We'll work with you to design and implement a system that fits your space, preferences, and budget.
                </p>
                <p className="text-gray-600 mb-6">
                  Our service includes:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>Consultation and system design based on your space and needs</li>
                  <li>Installation of AV receivers, amplifiers, and speakers</li>
                  <li>Proper speaker placement for optimal sound quality</li>
                  <li>Projector or TV installation and calibration</li>
                  <li>Complete wire management and concealment</li>
                  <li>System programming and remote control setup</li>
                  <li>Thorough testing and sound calibration</li>
                </ul>
                <Link to="/contact" className="btn-primary inline-block">
                  Schedule Installation
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Service 3 */}
          <div id="streaming-setup" className="scroll-mt-24">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold mb-4">Streaming Device & Smart TV Setup</h3>
                <p className="text-gray-600 mb-4">
                  Let us take the confusion out of setting up your streaming devices and Smart TVs. Our technicians will ensure all your devices are properly connected, configured, and ready for you to enjoy your favorite content within minutes.
                </p>
                <p className="text-gray-600 mb-6">
                  Our service includes:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>Setup and configuration of Smart TVs</li>
                  <li>Installation of streaming devices (Apple TV, Roku, Fire TV, etc.)</li>
                  <li>Secure connection to your home Wi-Fi network</li>
                  <li>Account setup for various streaming services</li>
                  <li>Integration with existing home entertainment systems</li>
                  <li>Tutorial on how to use your new devices and services</li>
                </ul>
                <Link to="/contact" className="btn-primary inline-block">
                  Schedule Setup
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1757&q=80" 
                  alt="Streaming Device Setup" 
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Service 4 */}
          <div id="smart-home" className="scroll-mt-24">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <img 
                  src="https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Smart Home Integration" 
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Smart Home Integration</h3>
                <p className="text-gray-600 mb-4">
                  Take your home entertainment to the next level by integrating it with your smart home system. Control your TV, sound system, lighting, and more with a single command or app for a truly seamless experience.
                </p>
                <p className="text-gray-600 mb-6">
                  Our service includes:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>Integration of entertainment systems with smart home platforms</li>
                  <li>Setup of voice control through Amazon Alexa, Google Assistant, or Apple HomeKit</li>
                  <li>Programming of custom scenes and routines</li>
                  <li>Installation of smart lighting systems that sync with your content</li>
                  <li>Automation of blinds, climate control, and other systems</li>
                  <li>Thorough testing and troubleshooting</li>
                  <li>Training on how to use and manage your integrated system</li>
                </ul>
                <Link to="/contact" className="btn-primary inline-block">
                  Schedule Integration
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Setup Guides Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Device Setup Guides" 
            subtitle="Helpful step-by-step guides for popular device setups"
          />
          
          {setupGuides.map((guide, index) => (
            <motion.div 
              key={index}
              className="mb-12 bg-white p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">{guide.title} Setup</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Main Method */}
                <div>
                  <h4 className="text-xl font-semibold mb-4">Standard Setup Checklist</h4>
                  <ol className="space-y-6">
                    {guide.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="pb-6 border-b border-gray-100 last:border-0">
                        <div className="flex">
                          <div className="flex-shrink-0 mr-4">
                            <span className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                              {stepIndex + 1}
                            </span>
                          </div>
                          <div>
                            <h5 className="font-medium text-lg mb-2">{step.title}</h5>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
                
                {/* Alternate Method */}
                <div>
                  <h4 className="text-xl font-semibold mb-4">Alternate Setup Method</h4>
                  <ol className="space-y-6">
                    {guide.alternateMethod.map((step, stepIndex) => (
                      <li key={stepIndex} className="pb-6 border-b border-gray-100 last:border-0">
                        <div className="flex">
                          <div className="flex-shrink-0 mr-4">
                            <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                              {stepIndex + 1}
                            </span>
                          </div>
                          <div>
                            <h5 className="font-medium text-lg mb-2">{step.title}</h5>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              
              {guide.tip && (
                <div className="mt-8 bg-amber-100 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Tip:</h4>
                  <p className="text-gray-800">{guide.tip}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Pricing" 
            subtitle="Transparent and competitive pricing for all our services"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gray-50 p-6 text-center">
                <h3 className="text-xl font-bold">Basic Installation</h3>
                <p className="text-gray-500 mt-2">For simple setups</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-500 ml-1">starting at</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Standard TV mounting (up to 55")</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Basic cable management</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Connection to existing devices</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Basic setup and testing</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link to="/contact" className="btn-primary w-full">Get Started</Link>
                </div>
              </div>
            </motion.div>
            
            {/* Standard Package */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-primary-200 relative transform scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 bg-primary-500 text-white py-1 px-4 text-sm font-medium">
                Most Popular
              </div>
              <div className="bg-primary-50 p-6 text-center">
                <h3 className="text-xl font-bold text-primary-700">Premium Installation</h3>
                <p className="text-gray-500 mt-2">For comprehensive setups</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$199</span>
                  <span className="text-gray-500 ml-1">starting at</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Large TV mounting (up to 75")</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Complete in-wall cable concealment</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Soundbar or speaker installation</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Streaming device setup & connection</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Complete system calibration</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link to="/contact" className="btn-primary w-full">Get Started</Link>
                </div>
              </div>
            </motion.div>
            
            {/* Premium Package */}
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gray-50 p-6 text-center">
                <h3 className="text-xl font-bold">Deluxe Home Theater</h3>
                <p className="text-gray-500 mt-2">For ultimate entertainment</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$499</span>
                  <span className="text-gray-500 ml-1">starting at</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Premium TV or projector installation</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Full surround sound system setup</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Complete in-wall/ceiling wiring</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Smart home integration</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Custom programmed universal remote</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link to="/contact" className="btn-primary w-full">Get Started</Link>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Need a custom solution? Contact us for a personalized quote.</p>
            <Link to="/contact" className="btn-secondary inline-block">
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our services"
          />
          
          <div className="max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <motion.div 
              className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">How long does a typical TV mounting installation take?</h3>
                <p className="text-gray-600">
                  Most standard TV mounting installations take between 1-2 hours to complete. However, more complex installations that involve in-wall wiring or mounting on difficult surfaces like stone or brick may take 2-3 hours or more. We'll provide you with a time estimate when you schedule your appointment.
                </p>
              </div>
            </motion.div>
            
            {/* FAQ Item 2 */}
            <motion.div 
              className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Do you provide the mounting hardware or do I need to purchase it separately?</h3>
                <p className="text-gray-600">
                  We provide all necessary mounting hardware for standard installations. Our technicians carry a variety of TV mounts suitable for different TV sizes and wall types. If you have a specific mount you'd like to use, we're happy to install it as well. For specialty mounts or unique situations, we'll let you know if additional hardware is needed.
                </p>
              </div>
            </motion.div>
            
            {/* FAQ Item 3 */}
            <motion.div 
              className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Can you mount a TV above a fireplace?</h3>
                <p className="text-gray-600">
                  Yes, we can mount TVs above fireplaces, but there are some considerations to keep in mind. We'll need to ensure the wall is suitable for mounting and that heat from the fireplace won't damage your TV. Our technicians will assess the situation and recommend the best solution, which may include specialized mounts or heat shields in some cases.
                </p>
              </div>
            </motion.div>
            
            {/* FAQ Item 4 */}
            <motion.div 
              className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Do you offer warranty on your installations?</h3>
                <p className="text-gray-600">
                  Yes, all our installations come with a 1-year warranty on labor. This means if any issue arises with our installation work within a year, we'll come back and fix it at no additional cost to you. Additionally, the hardware we provide typically comes with manufacturer warranties, which we'll explain during the installation process.
                </p>
              </div>
            </motion.div>
            
            {/* FAQ Item 5 */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">What areas do you serve?</h3>
                <p className="text-gray-600">
                  We currently serve all of Ohio with a focus on major cities including Columbus, Cincinnati, Cleveland, and their surrounding areas. For locations outside these areas, please contact us to check availability and possible travel fees. We're continually expanding our service area to meet customer demand.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Home Entertainment Experience?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation. Our expert team is ready to help with all your home entertainment setup needs.
            </p>
            <Link to="/contact" className="bg-white text-primary-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors shadow-lg inline-block">
              Schedule Service
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
