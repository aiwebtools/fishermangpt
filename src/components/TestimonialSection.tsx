
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Michael Thompson",
    role: "Weekend Angler",
    quote: "Fisherman GPT found me a local fishing spot I never knew existed, and recommended the perfect lure for bass fishing that cost half what I usually spend. Caught my personal best the first day!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Novice Fisher",
    quote: "As someone new to fishing, I was overwhelmed by all the equipment options. Fisherman GPT suggested exactly what I needed without breaking the bank, and even created a beginner's guide just for me.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "Charter Captain",
    quote: "I've been fishing professionally for 15 years, and I'm impressed by how accurate Fisherman GPT's analyses are. It's like having an expert research assistant that never sleeps.",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg"
  }
];

const TestimonialSection = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
          What <span className="neon-text">Anglers</span> Say
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Hear from fishers who've transformed their fishing experience with Fisherman GPT
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="cyber-card p-6"
          >
            <div className="flex items-center mb-4">
              <div className="relative mr-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-cyber-blue/50">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-cyber-green rounded-full border border-cyber-black"></div>
              </div>
              <div>
                <h4 className="text-white font-medium">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
            
            <blockquote className="text-gray-300 italic relative">
              <span className="text-4xl text-cyber-blue absolute -top-2 -left-1 opacity-30">"</span>
              <p className="pl-6">{testimonial.quote}</p>
              <span className="text-4xl text-cyber-blue absolute -bottom-5 right-0 opacity-30">"</span>
            </blockquote>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
