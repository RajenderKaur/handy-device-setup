
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import FeatureCard from "../components/FeatureCard";
import TestimonialCard from "../components/TestimonialCard";
import BlogPostCard from "../components/BlogPostCard";
import { services, features, testimonials, blogPosts } from "../constants";

const Home = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to HandyDeviceSetup</h2>
              <p className="text-gray-600 mb-6 text-lg">
                At HandyDeviceSetup, we specialize in delivering seamless, high-quality home entertainment solutions designed to elevate your viewing and listening experience. Whether you're setting up a brand-new home theater, mounting your TV for a sleek look, or upgrading your smart home devices, our team of experienced professionals is here to make it quick, clean, and hassle-free.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                We take the complexity out of technology setup, so you can simply enjoy your entertainment experience without the stress of complicated installations or troubleshooting.
              </p>
              <Link to="/about" className="btn-primary inline-block">
                Learn More About Us
              </Link>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1756&q=80" 
                alt="Home entertainment setup" 
                className="rounded-xl shadow-xl w-full"
              />
              {/* Floating accent */}
              <div className="absolute -bottom-6 -left-6 bg-primary-500 w-20 h-20 rounded-lg"></div>
              <div className="absolute -top-6 -right-6 bg-accent w-20 h-20 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Services" 
            subtitle="We offer a comprehensive range of home entertainment setup and installation services to meet your needs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                image={service.image} 
                title={service.title} 
                description={service.description} 
                link={service.link} 
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/services" className="btn-primary inline-flex items-center">
              View All Services
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why Choose Us" 
            subtitle="We're dedicated to providing the best service experience for all your home entertainment needs."
            light={true}
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enhance Your Entertainment Experience?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and same-day service availability!
            </p>
            <Link to="/contact" className="bg-white text-primary-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors shadow-lg inline-block">
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What Our Customers Say" 
            subtitle="Don't just take our word for it - hear from some of our satisfied customers!"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                {...testimonial} 
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Latest from Our Blog" 
            subtitle="Check out our latest articles and guides for helpful tips and industry insights."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostCard 
                key={index} 
                post={post} 
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/blog" className="btn-secondary inline-flex items-center">
              Read More Articles
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Stay updated with our latest services, offers, and home entertainment tips.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
                <button 
                  type="submit" 
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
