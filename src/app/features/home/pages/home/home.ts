import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Testimonial, Statistic, Project, Service, BlogPost, FAQ, ContactForm } from '../../models/home.model';
import { HomeDataService } from '../../services/home-data.service';
import { HeroComponent } from "../../components/hero-component/hero-component";
import { AboutComponent } from "../../components/about-component/about-component";
import { ServicesComponent } from "../../components/services-component/services-component";
import { ContactComponent } from "../../components/contact-component/contact-component";

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, HeroComponent, AboutComponent, ServicesComponent, ContactComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private intersectionObserver!: IntersectionObserver;



  contactForm: ContactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    interest: '',
    message: ''
  };

  testimonials: Testimonial[] = [];
  projects: Project[] = [];
  featuredProjects: Project[] = [];
  services: Service[] = [];
  blogPosts: BlogPost[] = [];
  faqs: FAQ[] = [];
  statistics: Statistic[] = [];

  constructor(private homeDataService: HomeDataService) {
    this.loadData();
  }

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  onSubmit(): void {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      console.log('Contact form submitted:', this.contactForm);
      alert('Thank you for your message! We will get back to you soon.');
      
      this.contactForm = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        interest: '',
        message: ''
      };
    }
  }

  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    this.initializeScrollAnimations();
  }

  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private loadData(): void {
    // Load statistics
    this.homeDataService.getStatistics().subscribe(statistics => {
      this.statistics = statistics;
    });

    // Load testimonials
    this.homeDataService.getTestimonials().subscribe(testimonials => {
      this.testimonials = testimonials;
    });

    // Load projects
    this.homeDataService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.featuredProjects = projects; // Set featured projects as a subset of projects
    });

    // Load services
    this.homeDataService.getServices().subscribe(services => {
      this.services = services;
    });

    // Load blog posts
    this.homeDataService.getBlogPosts().subscribe(blogPosts => {
      this.blogPosts = blogPosts;
    });

    // Load FAQs
    this.homeDataService.getFAQs().subscribe(faqs => {
      this.faqs = faqs.map(faq => ({ ...faq, isOpen: false }));
    });
  }

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

    const animatedElements = document.querySelectorAll('.animate-fadeInUp');
    animatedElements.forEach((element) => {
      this.intersectionObserver.observe(element);
    });
  }
}
