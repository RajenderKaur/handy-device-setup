
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";

const Contact = () => {
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
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's discuss your home entertainment needs
          </motion.p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-primary-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Address</h3>
                    <p className="text-gray-600">2000 Pike Street, Alledonia, Ohio 43902, United States</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-primary-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                    <p className="text-gray-600">
                      <a href="tel:18557717123" className="hover:text-primary-500 transition-colors">
                        1-855-771-7123
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-primary-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@handydevicesetup.com" className="hover:text-primary-500 transition-colors">
                        info@handydevicesetup.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-12">
                <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>10:00 AM - 3:00 PM</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Location" 
            subtitle="Find us on the map"
          />
          
          <motion.div
            className="h-96 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98689.63355188782!2d-81.1330747767121!3d39.94395962430431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88360da2c8df6669%3A0x7f929c8b0156324b!2sAlledonia%2C%20OH%2043902!5e0!3m2!1sen!2sus!4v1658341526748!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="HandyDeviceSetup Office Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Quick answers to common inquiries"
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
                <h3 className="text-lg font-bold mb-2">How soon can you schedule an installation?</h3>
                <p className="text-gray-600">
                  We typically offer same-day or next-day appointments, depending on our current schedule and your location. We understand the excitement of getting your new entertainment system set up, so we always try to accommodate urgent requests.
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
                <h3 className="text-lg font-bold mb-2">What forms of payment do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards, debit cards, cash, and electronic payment services like PayPal and Venmo. For larger projects, we can also discuss payment plans or financing options to make your home entertainment upgrade more affordable.
                </p>
              </div>
            </motion.div>
            
            {/* FAQ Item 3 */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Do I need to be home during the installation?</h3>
                <p className="text-gray-600">
                  Yes, we require that an adult (18 years or older) be present during the entire installation process. This allows us to address any questions or concerns you might have, and ensures you're completely satisfied with the final result before we leave.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Call us directly for immediate assistance or schedule a consultation online.
            </p>
            <a 
              href="tel:18557717123" 
              className="bg-white text-primary-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center"
            >
              <FaPhone className="mr-2" />
              Call 1-855-771-7123
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
