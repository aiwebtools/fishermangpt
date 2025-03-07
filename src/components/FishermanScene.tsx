
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

const FishermanScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;
    camera.position.y = 0;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create water plane
    const planeGeometry = new THREE.PlaneGeometry(200, 200, 100, 100);
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f2ff,
      wireframe: true,
      transparent: true,
      opacity: 0.1
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -5;
    scene.add(plane);
    
    // Create cyber grid in the background
    const gridGeometry = new THREE.PlaneGeometry(200, 200, 20, 20);
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f2ff,
      wireframe: true,
      transparent: true,
      opacity: 0.05
    });
    const grid = new THREE.Mesh(gridGeometry, gridMaterial);
    grid.position.z = -50;
    scene.add(grid);
    
    // Create floating particles
    const particleCount = isMobile ? 50 : 200;
    const particles = new THREE.Group();
    
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 0.05 + 0.02;
      const geometry = new THREE.SphereGeometry(size, 6, 6);
      
      // Random color between blue, purple and green
      const colorChoices = [0x00f2ff, 0xb026ff, 0x39ff14];
      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      
      const material = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: Math.random() * 0.5 + 0.2
      });
      
      const particle = new THREE.Mesh(geometry, material);
      
      // Random position in a sphere
      const radius = Math.random() * 15 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI - Math.PI / 2;
      
      particle.position.x = radius * Math.sin(theta) * Math.cos(phi);
      particle.position.y = radius * Math.sin(phi);
      particle.position.z = radius * Math.cos(theta) * Math.cos(phi);
      
      // Store original position and random movement parameters
      particle.userData = {
        originalPos: particle.position.clone(),
        speed: Math.random() * 0.01 + 0.005,
        amplitude: Math.random() * 0.5 + 0.2,
        offset: Math.random() * Math.PI * 2
      };
      
      particles.add(particle);
    }
    
    scene.add(particles);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add point lights
    const light1 = new THREE.PointLight(0x00f2ff, 1, 20);
    light1.position.set(5, 5, 5);
    scene.add(light1);
    
    const light2 = new THREE.PointLight(0xb026ff, 1, 20);
    light2.position.set(-5, 3, 3);
    scene.add(light2);
    
    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      
      time += 0.01;
      
      // Animate water
      for (let i = 0; i < planeGeometry.attributes.position.count; i++) {
        const x = planeGeometry.attributes.position.getX(i);
        const z = planeGeometry.attributes.position.getZ(i);
        
        // Create wave effect
        const wave1 = 0.2 * Math.sin(x * 0.05 + time);
        const wave2 = 0.1 * Math.sin(z * 0.1 + time * 0.8);
        
        planeGeometry.attributes.position.setY(i, wave1 + wave2);
      }
      
      planeGeometry.attributes.position.needsUpdate = true;
      planeGeometry.computeVertexNormals();
      
      // Animate particles
      particles.children.forEach((particle) => {
        const userData = particle.userData;
        
        // Oscillating movement
        particle.position.x = userData.originalPos.x + Math.sin(time * userData.speed + userData.offset) * userData.amplitude;
        particle.position.y = userData.originalPos.y + Math.cos(time * userData.speed + userData.offset) * userData.amplitude;
        particle.position.z = userData.originalPos.z + Math.sin(time * userData.speed * 0.5 + userData.offset) * userData.amplitude;
      });
      
      // Slowly rotate grid
      grid.rotation.z += 0.001;
      
      // Render scene
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);
  
  return <div ref={containerRef} className="absolute inset-0" />;
};

export default FishermanScene;
