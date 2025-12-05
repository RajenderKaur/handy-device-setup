
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const Terms = () => {
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
            Terms and Conditions
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Please read these terms carefully before using our services
          </motion.p>
        </div>
      </div>

      {/* Terms and Conditions Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 mb-8">
                Last Updated: May 15, 2025
              </p>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 mb-4">
                    By accessing and using the services provided by HandyDeviceSetup ("we," "us," "our"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
                  <p className="text-gray-700 mb-4">
                    HandyDeviceSetup provides professional installation and setup services for home entertainment systems, including but not limited to TV mounting, home theater installation, streaming device setup, and smart home integration.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Scheduling and Appointments</h2>
                  <p className="text-gray-700 mb-4">
                    3.1. We will make every effort to arrive within the scheduled appointment window. However, unforeseen circumstances may occasionally cause delays.
                  </p>
                  <p className="text-gray-700 mb-4">
                    3.2. If you need to reschedule or cancel an appointment, please provide at least 24 hours' notice. Failure to do so may result in a cancellation fee.
                  </p>
                  <p className="text-gray-700 mb-4">
                    3.3. An adult (18 years or older) must be present throughout the service appointment.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Pricing and Payment</h2>
                  <p className="text-gray-700 mb-4">
                    4.1. Pricing for our services is as outlined on our website or as quoted to you directly. All prices are subject to change without notice.
                  </p>
                  <p className="text-gray-700 mb-4">
                    4.2. Payment is due upon completion of service unless otherwise agreed upon. We accept credit cards, debit cards, cash, and electronic payment services.
                  </p>
                  <p className="text-gray-700 mb-4">
                    4.3. Additional charges may apply if the installation requires unforeseen work or materials not included in the original quote.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Installation and Service Warranty</h2>
                  <p className="text-gray-700 mb-4">
                    5.1. We provide a 1-year warranty on all installation labor. This warranty covers issues directly related to our installation work.
                  </p>
                  <p className="text-gray-700 mb-4">
                    5.2. Our warranty does not cover damage caused by misuse, accidents, natural disasters, or alterations made after our installation.
                  </p>
                  <p className="text-gray-700 mb-4">
                    5.3. Manufacturer warranties for products and hardware are separate from our installation warranty and are subject to the terms provided by the respective manufacturers.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Customer Responsibilities</h2>
                  <p className="text-gray-700 mb-4">
                    6.1. You are responsible for ensuring that your installation location meets necessary requirements, including appropriate wall structure, electrical outlets, and internet connectivity.
                  </p>
                  <p className="text-gray-700 mb-4">
                    6.2. You must disclose any potential issues or concerns that might affect the installation, such as pipe locations, electrical wiring, or structural issues.
                  </p>
                  <p className="text-gray-700 mb-4">
                    6.3. You are responsible for obtaining any necessary permits or permissions required for the installation.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                  <p className="text-gray-700 mb-4">
                    7.1. HandyDeviceSetup shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                  </p>
                  <p className="text-gray-700 mb-4">
                    7.2. Our maximum liability for any damages arising from our services shall not exceed the amount paid for the specific service that caused the issue.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Indemnification</h2>
                  <p className="text-gray-700 mb-4">
                    You agree to indemnify, defend, and hold harmless HandyDeviceSetup, its employees, contractors, and affiliates from any claims, damages, or expenses (including attorney's fees) arising from your use of our services or violation of these Terms.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Privacy Policy</h2>
                  <p className="text-gray-700 mb-4">
                    Your use of our services is also governed by our Privacy Policy, which can be found on our website. By using our services, you consent to the practices described in the Privacy Policy.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Modifications to Terms</h2>
                  <p className="text-gray-700 mb-4">
                    We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes indicates your acceptance of the modified Terms.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
                  <p className="text-gray-700 mb-4">
                    These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Ohio, without regard to its conflict of law provisions.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    For any questions regarding these Terms and Conditions, please contact us at:
                  </p>
                  <p className="text-gray-700">
                    HandyDeviceSetup<br />
                    2000 Pike Street<br />
                    Alledonia, Ohio 43902<br />
                    United States<br />
                    Phone: 1-855-771-7123<br />
                    Email: info@handydevicesetup.com
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Terms;
