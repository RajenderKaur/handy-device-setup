
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const Privacy = () => {
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
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How we collect, use, and protect your information
          </motion.p>
        </div>
      </div>

      {/* Privacy Policy Content */}
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
                  <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                  <p className="text-gray-700 mb-4">
                    HandyDeviceSetup ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Please read this Privacy Policy carefully. By using our services or website, you consent to the practices described in this policy.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                  <p className="text-gray-700 mb-4">
                    We may collect several types of information from and about users of our services, including:
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-2">2.1. Personal Information</h3>
                  <p className="text-gray-700 mb-4">
                    This may include your name, email address, postal address, phone number, and other information you provide when scheduling services, creating an account, or communicating with us.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-2">2.2. Payment Information</h3>
                  <p className="text-gray-700 mb-4">
                    When you pay for our services, we collect payment information, which may include credit card details, billing address, and other financial information. We use secure payment processors and do not store complete credit card information on our servers.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-2">2.3. Technical Information</h3>
                  <p className="text-gray-700 mb-4">
                    When you visit our website, we may automatically collect certain information about your device, browsing actions, and patterns. This includes your IP address, browser type, referring/exit pages, operating system, date/time stamps, and clickstream data.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-2">2.4. Service Information</h3>
                  <p className="text-gray-700 mb-4">
                    Details about your home entertainment systems, service requests, installation specifications, and related information necessary to provide our services.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-700 mb-4">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Providing, maintaining, and improving our services</li>
                    <li>Processing and completing transactions</li>
                    <li>Scheduling and managing service appointments</li>
                    <li>Communicating with you about our services, promotions, and events</li>
                    <li>Responding to your requests, questions, and feedback</li>
                    <li>Analyzing usage patterns and trends to enhance user experience</li>
                    <li>Protecting against, identifying, and preventing fraud and other illegal activities</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
                  <p className="text-gray-700 mb-4">
                    We may share your information in the following circumstances:
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-2">4.1. Service Providers</h3>
                  <p className="text-gray-700 mb-4">
                    We may share your information with third-party vendors, service providers, contractors, or agents who perform services on our behalf, such as payment processing, data analysis, email delivery, and customer service.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-2">4.2. Business Transfers</h3>
                  <p className="text-gray-700 mb-4">
                    If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-2">4.3. Legal Requirements</h3>
                  <p className="text-gray-700 mb-4">
                    We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court or government agency).
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-2">4.4. Protection of Rights</h3>
                  <p className="text-gray-700 mb-4">
                    We may disclose your information to protect the rights, property, or safety of HandyDeviceSetup, our customers, or others.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                  <p className="text-gray-700 mb-4">
                    We have implemented appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
                  <p className="text-gray-700 mb-4">
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Accessing, correcting, or deleting your personal information</li>
                    <li>Objecting to or restricting certain processing of your personal information</li>
                    <li>Data portability (receiving a copy of your personal information)</li>
                    <li>Withdrawing consent where processing is based on consent</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    To exercise these rights, please contact us using the information provided at the end of this Privacy Policy.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Marketing Communications</h2>
                  <p className="text-gray-700 mb-4">
                    You can opt out of receiving marketing communications from us by following the unsubscribe instructions included in our marketing emails or by contacting us directly.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-700 mb-4">
                    Our website may use cookies and similar tracking technologies to track activity and collect certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
                  <p className="text-gray-700 mb-4">
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we learn we have collected personal information from a child under 18, we will delete that information.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Changes to this Privacy Policy</h2>
                  <p className="text-gray-700 mb-4">
                    We may update our Privacy Policy from time to time. Any changes will be posted on this page, and the "Last Updated" date at the top will be revised. We encourage you to review this Privacy Policy periodically for any changes.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <p className="text-gray-700">
                    HandyDeviceSetup<br />
                    2000 Pike Street<br />
                    Alledonia, Ohio 43902<br />
                    United States<br />
                    Phone: 1-855-771-7123<br />
                    Email: privacy@handydevicesetup.com
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

export default Privacy;
