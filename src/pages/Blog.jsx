
import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import BlogPostCard from "../components/BlogPostCard";
import { blogPosts } from "../constants";

const Blog = () => {
  const [filter, setFilter] = useState("all");
  
  // Get unique categories
  const categories = ["all", ...new Set(blogPosts.map(post => post.category.toLowerCase()))];
  
  // Filter posts based on selected category
  const filteredPosts = filter === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === filter);
  
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
            Our Blog
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Latest articles, guides, and insights on home entertainment technology
          </motion.p>
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full border ${
                  filter === category 
                    ? 'bg-primary-500 text-white border-primary-500' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-primary-500'
                } transition-colors`}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
          
          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg overflow-hidden">
                <div>
                  <img 
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{filteredPosts[0].date}</span>
                    <span className="mx-2">•</span>
                    <span>{filteredPosts[0].category}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{filteredPosts[0].title}</h2>
                  <p className="text-gray-600 mb-6">{filteredPosts[0].excerpt}</p>
                  
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <BlogPostCard 
                key={post.slug} 
                post={post} 
                delay={index * 0.1}
              />
            ))}

            {/* Additional blog posts */}
            <BlogPostCard 
              post={{
                title: "How to Set Up the Perfect Gaming Entertainment System",
                slug: "perfect-gaming-entertainment-system",
                excerpt: "Learn how to create the ultimate gaming setup with the right display, sound system, and connectivity options for immersive gameplay.",
                image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                date: "April 28, 2025",
                category: "Gaming"
              }}
              delay={0.3}
            />
            
            <BlogPostCard 
              post={{
                title: "Wall Mounting vs. TV Stands: Pros and Cons",
                slug: "wall-mounting-vs-tv-stands",
                excerpt: "Explore the advantages and disadvantages of wall mounting your TV compared to using traditional TV stands and entertainment centers.",
                image: "https://images.unsplash.com/photo-1583073600538-f219abfb20bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                date: "April 15, 2025",
                category: "TV Setup"
              }}
              delay={0.4}
            />
            
            <BlogPostCard 
              post={{
                title: "Smart Home Entertainment: Voice Control Comparison",
                slug: "voice-control-comparison",
                excerpt: "Compare the top voice control systems for smart home entertainment, including Alexa, Google Assistant, and Siri.",
                image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                date: "April 08, 2025",
                category: "Smart Home"
              }}
              delay={0.5}
            />
            
            <BlogPostCard 
              post={{
                title: "Hidden Wiring: A Complete Guide to Clean TV Installations",
                slug: "hidden-wiring-guide",
                excerpt: "Learn professional techniques for hiding TV wires and cables for a clean, professional-looking entertainment setup.",
                image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
                date: "April 01, 2025",
                category: "Installation"
              }}
              delay={0.6}
            />
            
            <BlogPostCard 
              post={{
                title: "How to Choose the Right Soundbar for Your TV",
                slug: "choose-right-soundbar",
                excerpt: "Find the perfect soundbar to complement your TV and enhance your audio experience with our comprehensive buying guide.",
                image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                date: "March 25, 2025",
                category: "Audio"
              }}
              delay={0.7}
            />
          </div>
          
          {/* Newsletter */}
          <div className="mt-20 bg-gray-50 p-8 md:p-12 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-gray-600 mb-6">
                  Stay updated with our latest articles, guides, and tips for getting the most out of your home entertainment system.
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
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;
