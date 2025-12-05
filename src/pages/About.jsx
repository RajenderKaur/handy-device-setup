
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import { features } from "../constants";
import FeatureCard from "../components/FeatureCard";

const About = () => {
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
            About Us
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Your trusted partner for professional home entertainment setup services
          </motion.p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="HandyDeviceSetup Team" 
                className="rounded-xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-500 w-20 h-20 rounded-lg"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                HandyDeviceSetup was founded in 2018 by a team of technology enthusiasts who recognized a growing need: as home entertainment systems became more sophisticated, many people struggled with the complex setup and installation processes.
              </p>
              <p className="text-gray-600 mb-4">
                We started with a simple mission – to take the frustration out of technology setup and help people enjoy their entertainment systems without the hassle. What began as a small local service quickly grew as customers appreciated our technical expertise combined with our commitment to exceptional customer service.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we're proud to serve customers throughout Ohio with professional installation services for everything from basic TV mounting to complex home theater systems and smart home integration. Our team has expanded, but our core values remain the same – technical excellence, clean and professional installations, and customer satisfaction above all else.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary-500 text-white w-12 h-12 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide high-quality, hassle-free home entertainment setup services that enhance our customers' enjoyment of their technology. We aim to make complex technology simple, ensuring every client receives a professional installation tailored to their specific needs and space.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary-500 text-white w-12 h-12 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and respected home entertainment setup service in the region, known for technical excellence, impeccable workmanship, and outstanding customer service. We strive to stay at the forefront of technology trends and continuously improve our services to exceed customer expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why Choose Us" 
            subtitle="What sets HandyDeviceSetup apart from other service providers"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="The skilled professionals behind HandyDeviceSetup"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80" 
                alt="John Davis" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">John Davis</h3>
                <p className="text-primary-500 mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 15 years of experience in home entertainment systems, John leads our team with technical expertise and a commitment to customer satisfaction.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 2 */}
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80" 
                alt="Sarah Johnson" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-primary-500 mb-3">Operations Manager</p>
                <p className="text-gray-600">
                  Sarah ensures that every installation runs smoothly, from scheduling to completion, with her meticulous attention to detail and organizational skills.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 3 */}
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Michael Rodriguez" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Rodriguez</h3>
                <p className="text-primary-500 mb-3">Lead Technician</p>
                <p className="text-gray-600">
                  Michael's technical expertise and problem-solving skills have earned him rave reviews from countless satisfied customers over his 10 years with us.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 4 */}
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Emily Chen" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Emily Chen</h3>
                <p className="text-primary-500 mb-3">Customer Service Manager</p>
                <p className="text-gray-600">
                  Emily's dedication to ensuring every customer has an exceptional experience makes her an invaluable part of our team.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Our Services?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation. Our expert team is ready to help with all your home entertainment setup needs.
            </p>
            <Link to="/contact" className="bg-white text-primary-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors shadow-lg inline-block">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
