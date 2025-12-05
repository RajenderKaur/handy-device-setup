
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-xl p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
      
      {submitSuccess && (
        <motion.div 
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          Thank you for your message! We'll get back to you soon.
        </motion.div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              id="firstName"
              className={`w-full p-3 border rounded-md ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Your first name"
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName.message}</span>
            )}
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              id="lastName"
              className={`w-full p-3 border rounded-md ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Your last name"
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">{errors.lastName.message}</span>
            )}
          </div>
        </div>
        
        <div className="mt-6">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            className={`w-full p-3 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Your email address"
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        
        <div className="mt-6">
          <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className={`w-full p-3 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Your phone number"
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone.message}</span>
          )}
        </div>
        
        <div className="mt-6">
          <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
          <select
            id="service"
            className={`w-full p-3 border rounded-md ${errors.service ? 'border-red-500' : 'border-gray-300'}`}
            {...register("service", { required: "Please select a service" })}
          >
            <option value="">Select a service</option>
            <option value="TV Mounting">TV Mounting & Installation</option>
            <option value="Home Theater">Home Theater Installation</option>
            <option value="Streaming Setup">Streaming Device Setup</option>
            <option value="Smart Home">Smart Home Integration</option>
            <option value="Other">Other</option>
          </select>
          {errors.service && (
            <span className="text-red-500 text-sm">{errors.service.message}</span>
          )}
        </div>
        
        <div className="mt-6">
          <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            rows="4"
            className={`w-full p-3 border rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Tell us about your project or questions"
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message.message}</span>
          )}
        </div>
        
        <div className="mt-8">
          <button
            type="submit"
            className="btn-primary w-full flex justify-center items-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
