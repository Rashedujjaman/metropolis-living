import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Statistic {
  icon: string;
  number: string;
  label: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  location: string;
  type: string;
  status: string;
  units: string;
  floors: string;
  area: string;
}

interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
}

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private intersectionObserver!: IntersectionObserver;

  // Contact Form Data
  contactForm = {
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  };

  // Statistics Data
  statistics: Statistic[] = [
    {
      icon: 'fas fa-building',
      number: '100+',
      label: 'Trusted Companies',
      description: 'Leading corporations trust our development expertise'
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

  // Featured Projects Data
  featuredProjects: Project[] = [
    {
      title: 'Skyline Towers',
      description: 'A prestigious residential complex featuring modern amenities, panoramic city views, and sustainable living spaces designed for the contemporary urban lifestyle.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&crop=center',
      location: 'Downtown Metro',
      type: 'Residential',
      status: 'Completed',
      units: '200',
      floors: '45',
      area: '2.5M'
    },
    {
      title: 'Business Central',
      description: 'State-of-the-art commercial hub offering premium office spaces, retail outlets, and conference facilities in the heart of the financial district.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center',
      location: 'Financial District',
      type: 'Commercial',
      status: 'Under Construction',
      units: '150',
      floors: '35',
      area: '3.2M'
    },
    {
      title: 'Garden Residence',
      description: 'Luxury living meets nature with eco-friendly apartments, rooftop gardens, and wellness facilities designed for mindful urban living.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center',
      location: 'Green Valley',
      type: 'Mixed-Use',
      status: 'Planning',
      units: '300',
      floors: '25',
      area: '1.8M'
    }
  ];

  // Testimonials Data
  testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechCorp Industries',
      content: 'Metropolis Living exceeded our expectations with their professional approach and attention to detail. Our new headquarters is a testament to their commitment to excellence.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      position: 'Investment Director',
      company: 'Capital Partners',
      content: 'Working with Metropolis Living has been an incredible experience. Their expertise in property development and market insights have been invaluable to our portfolio growth.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Resident',
      company: 'Skyline Towers',
      content: 'Living in a Metropolis Living development has transformed my urban lifestyle. The amenities, community, and quality of construction are simply outstanding.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  // Blog Posts Data
  blogPosts: BlogPost[] = [
    {
      title: 'Future of Urban Living: Smart Cities Revolution',
      excerpt: 'Explore how technology and sustainable design are reshaping metropolitan landscapes for the next generation.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center',
      category: 'Innovation',
      date: 'Dec 15, 2024',
      author: 'Dr. Alex Thompson'
    },
    {
      title: 'Sustainable Development: Building Green for Tomorrow',
      excerpt: 'Learn about our commitment to environmentally responsible construction and the benefits of green building practices.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center',
      category: 'Sustainability',
      date: 'Dec 10, 2024',
      author: 'Maria Garcia'
    },
    {
      title: 'Investment Opportunities in Metropolitan Real Estate',
      excerpt: 'Discover the potential returns and strategic advantages of investing in prime urban development projects.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center',
      category: 'Investment',
      date: 'Dec 5, 2024',
      author: 'James Wilson'
    }
  ];

  // FAQ Data
  faqs: FAQ[] = [
    {
      question: 'What types of properties does Metropolis Living develop?',
      answer: 'We specialize in a diverse range of properties including luxury residential towers, commercial office buildings, mixed-use developments, and sustainable urban communities.',
      isOpen: false
    },
    {
      question: 'How long does a typical development project take?',
      answer: 'Project timelines vary depending on size and complexity, but most residential developments take 24-36 months from groundbreaking to completion, while commercial projects may take 30-48 months.',
      isOpen: false
    },
    {
      question: 'Do you offer property management services?',
      answer: 'Yes, we provide comprehensive property management services including facility management, tenant relations, maintenance, and financial management for all our developments.',
      isOpen: false
    },
    {
      question: 'What makes Metropolis Living different from other developers?',
      answer: 'Our commitment to innovation, sustainability, and community focus sets us apart. We integrate smart technology, environmentally conscious design, and create spaces that foster genuine community connections.',
      isOpen: false
    },
    {
      question: 'How can I invest in Metropolis Living projects?',
      answer: 'We offer various investment opportunities from individual unit purchases to partnership opportunities in large-scale developments. Contact our investment team for detailed information.',
      isOpen: false
    },
    {
      question: 'What sustainability measures do you implement?',
      answer: 'We incorporate LEED-certified materials, energy-efficient systems, green rooftops, smart water management, and renewable energy sources in our developments to minimize environmental impact.',
      isOpen: false
    }
  ];

  // Methods
  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  onSubmit(): void {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      console.log('Contact form submitted:', this.contactForm);
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form
      this.contactForm = {
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      };
    }
  }

  // Lifecycle Methods
  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    // Initialize scroll animations
    this.initializeScrollAnimations();
  }

  ngOnDestroy(): void {
    // Clean up observer
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  // Scroll Animation Methods
  private initializeScrollAnimations(): void {
    const options = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, options);

    // Observe all elements with animation class
    const animatedElements = document.querySelectorAll('.animate-fadeInUp');
    animatedElements.forEach((element) => {
      this.intersectionObserver.observe(element);
    });
  }
}
