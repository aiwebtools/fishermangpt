
import React from 'react';
import FeatureCard from './FeatureCard';
import { Anchor, Fish, HelpCircle, Info, Map, MapPin, Presentation } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 cyber-grid relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 relative overflow-hidden">
          <div className="relative rounded-2xl overflow-hidden border border-cyber-blue/30 shadow-[0_0_50px_rgba(0,242,255,0.15)]">
            <img
              src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-bearded-fisherman-wearin.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true"
              alt="Fisherman in action"
              className="w-full h-auto object-cover max-h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-cyber font-bold mb-4 text-cyber-blue">
                  Expert Fishing Knowledge at Your Fingertips
                </h2>
                <p className="text-gray-200 mb-6">
                  Fisherman GPT combines decades of fishing expertise with cutting-edge AI to deliver personalized advice for your specific situation.
                </p>
                <a 
                  href="https://chatgpt.com/g/g-AmVAYOglF-fisherman-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="neon-btn"
                >
                  USE Fisherman GPT Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
            <span className="neon-text">Advanced</span> Features
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Fisherman GPT offers a comprehensive suite of tools to make your fishing trip successful, 
            from planning to execution and everything in between.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Spot Location"
            description="Find the best fishing spots in your area with precise GPS coordinates and detailed water conditions."
            icon={<Anchor className="h-10 w-10 text-cyber-blue" />}
            delay={0}
          />
          <FeatureCard 
            title="Equipment Finder"
            description="Get recommendations for the most affordable and effective fishing gear specific to your target species."
            icon={<Fish className="h-10 w-10 text-cyber-purple" />}
            delay={1}
          />
          <FeatureCard 
            title="Cost Analysis"
            description="Receive detailed breakdowns of all expenses, from gear to guides, helping you budget effectively."
            icon={<Info className="h-10 w-10 text-cyber-green" />}
            delay={2}
          />
          <FeatureCard 
            title="Technique Guide"
            description="Learn the most effective fishing techniques with step-by-step instructions tailored to your experience level."
            icon={<HelpCircle className="h-10 w-10 text-cyber-blue" />}
            delay={3}
          />
          <FeatureCard 
            title="Weather Intelligence"
            description="Get real-time weather forecasts and understand how they affect fishing conditions in your area."
            icon={<Anchor className="h-10 w-10 text-cyber-purple" />}
            delay={4}
          />
          <FeatureCard 
            title="Document Creation"
            description="Receive comprehensive reports with all the information you need, ready to download as a document."
            icon={<Info className="h-10 w-10 text-cyber-green" />}
            delay={5}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
