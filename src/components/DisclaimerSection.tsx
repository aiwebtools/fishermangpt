
import React from 'react';
import { motion } from 'framer-motion';

const DisclaimerSection = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
          Legal <span className="neon-text">Disclaimer</span>
        </h2>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="cyber-card p-6 md:p-8"
      >
        <div className="prose prose-invert max-w-none">
          <h3 className="text-xl font-cyber font-bold mb-4 text-white">Fisherman GPT - Terms of Use</h3>
          
          <p className="text-gray-300 mb-4">
            By using Fisherman GPT, you acknowledge and agree to the following terms and conditions:
          </p>
          
          <h4 className="text-lg font-medium text-white mt-6 mb-2">Information Accuracy</h4>
          <p className="text-gray-300 mb-4">
            While Fisherman GPT strives to provide accurate and up-to-date information, all recommendations, fishing spots, equipment suggestions, and cost estimates are provided for informational purposes only. AI WEB TOOLS LLC makes no warranties or guarantees regarding the accuracy, completeness, or reliability of the information provided.
          </p>
          
          <h4 className="text-lg font-medium text-white mt-6 mb-2">No Guarantee of Results</h4>
          <p className="text-gray-300 mb-4">
            Success in fishing depends on numerous factors including but not limited to weather conditions, seasonal changes, local regulations, individual skill, and luck. Fisherman GPT cannot and does not guarantee fishing success or specific outcomes from following its recommendations.
          </p>
          
          <h4 className="text-lg font-medium text-white mt-6 mb-2">Local Regulations and Permits</h4>
          <p className="text-gray-300 mb-4">
            Users are solely responsible for complying with all local, state, and federal fishing regulations, obtaining appropriate licenses, and adhering to all legal requirements in their fishing activities. Fisherman GPT's recommendations do not supersede official regulations.
          </p>
          
          <h4 className="text-lg font-medium text-white mt-6 mb-2">Third-Party Links and Services</h4>
          <p className="text-gray-300 mb-4">
            Fisherman GPT may provide links to third-party websites, products, or services. These links are provided for convenience only and do not indicate endorsement, approval, or responsibility for the content of these external sites or products. AI WEB TOOLS LLC is not responsible for any transactions conducted between users and third-party services.
          </p>
          
          <h4 className="text-lg font-medium text-white mt-6 mb-2">Limitation of Liability</h4>
          <p className="text-gray-300 mb-4">
            To the maximum extent permitted by law, AI WEB TOOLS LLC, its affiliates, officers, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from or related to the use of Fisherman GPT, including but not limited to personal injury, property damage, loss of catch, equipment failure, or financial losses.
          </p>
          
          <h4 className="text-lg font-medium text-white mt-6 mb-2">User Safety</h4>
          <p className="text-gray-300 mb-4">
            Fishing involves inherent risks. Users are responsible for their own safety and should exercise caution when engaging in fishing activities. Always use proper safety equipment, be aware of weather conditions, and take appropriate precautions when on or near water.
          </p>
          
          <h4 className="text-lg font-medium text-white mt-6 mb-2">Modifications to Terms</h4>
          <p className="text-gray-300 mb-4">
            AI WEB TOOLS LLC reserves the right to modify these terms at any time without prior notice. Continued use of Fisherman GPT constitutes acceptance of the current terms.
          </p>
          
          <h4 className="text-lg font-medium text-white mt-6 mb-2">Contact Information</h4>
          <p className="text-gray-300 mb-4">
            For questions regarding these terms or Fisherman GPT services, please contact:
            <br />
            AI WEB TOOLS LLC
            <br />
            <a href="mailto:Contact@ai-webtools.com" className="text-cyber-blue hover:underline">Contact@ai-webtools.com</a>
            <br />
            <a href="tel:4758008096" className="text-cyber-blue hover:underline">(475) 800-8096</a>
          </p>
          
          <p className="text-gray-300 mt-8 italic">
            Last Updated: June 1, 2025
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default DisclaimerSection;
