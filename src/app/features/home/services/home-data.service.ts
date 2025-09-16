import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Testimonial, Project, Service, BlogPost, FAQ, Statistic } from '../models/home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  getStatistics(): Observable<Statistic[]> {
    const statistics: Statistic[] = [
      {
        icon: 'fas fa-building',
        number: '250+',
        label: 'Projects Completed',
        description: 'Successfully delivered across multiple cities'
      },
      {
        icon: 'fas fa-users',
        number: '50K+',
        label: 'Happy Residents',
        description: 'Families living in our premium developments'
      },
      {
        icon: 'fas fa-trophy',
        number: '25+',
        label: 'Awards Won',
        description: 'Recognition for excellence in real estate'
      },
      {
        icon: 'fas fa-globe',
        number: '15+',
        label: 'Cities',
        description: 'Metropolitan areas transformed by our vision'
      }
    ];
    return of(statistics);
  }

  getTestimonials(): Observable<Testimonial[]> {
    const testimonials: Testimonial[] = [
      {
        id: 1,
        name: 'Sarah Johnson',
        position: 'Property Investor',
        company: 'Johnson Holdings',
        content: 'Metropolis Living exceeded all my expectations. The attention to detail and quality of construction is remarkable. I\'ve invested in three properties with them.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b550?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
      },
      {
        id: 2,
        name: 'Michael Chen',
        position: 'Homeowner',
        company: 'Tech Executive',
        content: 'Living in a Metropolis development has been incredible. The amenities, location, and community atmosphere are perfect for modern urban living.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
      },
      {
        id: 3,
        name: 'Emily Rodriguez',
        position: 'First-time Buyer',
        company: 'Marketing Manager',
        content: 'The team at Metropolis Living made buying my first home stress-free. Their customer service and transparency throughout the process was outstanding.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
      }
    ];
    return of(testimonials);
  }

  getProjects(): Observable<Project[]> {
    const projects: Project[] = [
      {
        id: 1,
        title: 'Skyline Residences',
        description: 'A luxurious high-rise development featuring state-of-the-art amenities, panoramic city views, and sustainable design elements that redefine urban living.',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        status: 'Under Construction',
        location: 'Downtown Metropolitan',
        type: 'Luxury Residential',
        units: 120,
        floors: 45,
        area: '850-2,500',
        stats: {
          units: 120,
          sqFt: 850,
          completion: '2024'
        },
        features: [
          'Rooftop infinity pool',
          'Smart home technology',
          'Concierge services',
          'Fitness center & spa'
        ]
      },
      {
        id: 2,
        title: 'Garden District',
        description: 'An eco-friendly residential community that seamlessly blends modern architecture with natural landscapes, creating a harmonious living environment.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        status: 'Pre-Construction',
        location: 'Green Valley',
        type: 'Eco-Friendly Community',
        units: 85,
        floors: 15,
        area: '1,200-3,000',
        stats: {
          units: 85,
          sqFt: 1200,
          completion: '2025'
        },
        features: [
          'Private gardens',
          'Solar energy systems',
          'Walking trails',
          'Community center'
        ]
      }
    ];
    return of(projects);
  }

  getServices(): Observable<Service[]> {
    const services: Service[] = [
      {
        id: 1,
        title: 'Residential Development',
        description: 'From luxury condominiums to affordable housing, we create residential spaces that enhance quality of life and build stronger communities.',
        icon: 'fas fa-home',
        features: [
          'Custom floor plans',
          'Premium finishes',
          'Energy-efficient design',
          'Smart home integration'
        ]
      },
      {
        id: 2,
        title: 'Commercial Projects',
        description: 'We develop innovative commercial spaces that drive business success and contribute to vibrant, thriving urban environments.',
        icon: 'fas fa-building',
        features: [
          'Office complexes',
          'Retail spaces',
          'Mixed-use developments',
          'LEED certification'
        ]
      },
      {
        id: 3,
        title: 'Property Management',
        description: 'Our comprehensive property management services ensure your investment maintains its value while providing exceptional tenant experiences.',
        icon: 'fas fa-cogs',
        features: [
          '24/7 maintenance support',
          'Tenant screening',
          'Financial reporting',
          'Asset optimization'
        ]
      }
    ];
    return of(services);
  }

  getBlogPosts(): Observable<BlogPost[]> {
    const posts: BlogPost[] = [
      {
        id: 1,
        title: 'The Future of Urban Living: Smart Cities and Sustainable Development',
        excerpt: 'Explore how smart technology and sustainable practices are shaping the future of urban residential development.',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        category: 'Innovation',
        date: 'December 15, 2024',
        author: 'Alex Thompson',
        authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
      },
      {
        id: 2,
        title: 'Investment Opportunities in Metropolitan Real Estate Markets',
        excerpt: 'Discover the key factors that make metropolitan real estate an attractive investment opportunity in today\'s market.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        category: 'Investment',
        date: 'December 10, 2024',
        author: 'Maria Santos',
        authorImage: 'https://images.unsplash.com/photo-1559783923-9b4d8bb8abc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
      },
      {
        id: 3,
        title: 'Design Trends Shaping Modern Residential Architecture',
        excerpt: 'From minimalist aesthetics to biophilic design, explore the trends defining contemporary residential architecture.',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        category: 'Design',
        date: 'December 5, 2024',
        author: 'David Kim',
        authorImage: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
      }
    ];
    return of(posts);
  }

  getFAQs(): Observable<FAQ[]> {
    const faqs: FAQ[] = [
      {
        id: 1,
        question: 'What types of properties does Metropolis Living develop?',
        answer: 'We specialize in luxury residential developments, including high-rise condominiums, townhomes, and mixed-use communities. Our portfolio spans from affordable housing to ultra-luxury properties, all designed with modern amenities and sustainable features.'
      },
      {
        id: 2,
        question: 'What is the typical timeline for a development project?',
        answer: 'Project timelines vary depending on size and complexity, but most residential developments take 18-36 months from groundbreaking to completion. We provide regular updates throughout the construction process and maintain transparent communication with all stakeholders.'
      },
      {
        id: 3,
        question: 'Do you offer financing options for buyers?',
        answer: 'Yes, we work with preferred lending partners to offer competitive financing solutions. Our team can connect you with mortgage specialists who understand our developments and can help structure the best financing package for your situation.'
      },
      {
        id: 4,
        question: 'What warranties do you provide on new constructions?',
        answer: 'All our new constructions come with comprehensive warranties covering structural elements, mechanical systems, and finish materials. We also provide ongoing support through our customer service team to address any post-purchase needs.'
      },
      {
        id: 5,
        question: 'Are your developments environmentally sustainable?',
        answer: 'Absolutely. Sustainability is core to our development philosophy. We incorporate energy-efficient systems, sustainable materials, LEED certification standards, and innovative green technologies in all our projects to minimize environmental impact.'
      }
    ];
    return of(faqs);
  }
}