
import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FaqSection = () => {
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
          Frequently <span className="neon-text">Asked</span> Questions
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Everything you need to know about Fisherman GPT and how it can enhance your fishing experience
        </p>
      </motion.div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-cyber-blue/30 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyber-blue transition-colors font-medium">
              What is Fisherman GPT?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Fisherman GPT is an advanced AI assistant specializing in all aspects of fishing. It helps you find the best fishing spots, recommends affordable equipment, analyzes water conditions, and provides detailed guidance for successful fishing trips.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border border-cyber-blue/30 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyber-blue transition-colors font-medium">
              How does Fisherman GPT find fishing spots?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Fisherman GPT uses a combination of geographic data, fishing reports, water conditions, and seasonal patterns to identify the best fishing spots in your area. It considers factors like fish species, weather conditions, and accessibility to provide tailored recommendations.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border border-cyber-blue/30 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyber-blue transition-colors font-medium">
              Can Fisherman GPT help me save money on fishing gear?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Absolutely! Fisherman GPT excels at finding the most affordable fishing equipment and bait for your specific needs. It provides direct links to local suppliers and specialized stores, helping you avoid overspending while ensuring you get quality gear that's right for your target species.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border border-cyber-blue/30 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyber-blue transition-colors font-medium">
              How accurate is the fishing trip cost calculation?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Fisherman GPT provides highly accurate cost estimates by calculating equipment needs, bait requirements, licensing fees, and guide services if needed. It compares these costs to potential catch value and provides a comprehensive breakdown, allowing you to make informed decisions about your fishing expenditures.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border border-cyber-blue/30 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyber-blue transition-colors font-medium">
              Can Fisherman GPT identify fish species from images?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Yes, Fisherman GPT has advanced image analysis capabilities. You can upload photos of fish or fishing areas, and the AI will identify species, analyze habitat quality, and provide tailored advice based on what it sees in the image.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6" className="border border-cyber-blue/30 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyber-blue transition-colors font-medium">
              Does Fisherman GPT provide documentation I can download?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Yes, Fisherman GPT can compile all the information, analysis, and recommendations into a comprehensive downloadable document. This includes fishing spot details, equipment lists, cost breakdowns, techniques, and any other relevant information for your fishing trip.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqSection;
