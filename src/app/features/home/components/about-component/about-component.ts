/**
 * ============================================================================
 * ABOUT COMPONENT
 * ============================================================================
 * 
 * @fileoverview Company introduction and brand story showcase component
 * @version 1.0.0
 * @author Metropolis Living Development Team
 * @since 2024
 * 
 * COMPONENT OVERVIEW:
 * - Displays company mission statement and brand identity
 * - Features responsive two-column layout (image + content)
 * - Includes geometric design elements and floating logo overlay
 * - Statistics card showcasing company achievements
 * - Fully accessible with ARIA labels and semantic HTML
 * - SEO optimized with schema.org microdata
 * 
 * FEATURES:
 * - Mobile-first responsive design (480px, 768px, 1024px, 1200px+ breakpoints)
 * - Interactive hover effects and smooth animations
 * - Geometric image clipping with clip-path CSS
 * - Professional typography with gradient text effects
 * - Accessibility compliance (WCAG 2.1 AA standard)
 * - Performance optimized with lazy loading
 * 
 * DEPENDENCIES:
 * - CallActionComponent: Reusable call-to-action overlay component
 * - FontAwesome: Icon library for achievement badges
 * - Angular 17+: Component framework with standalone components
 * 
 * USAGE:
 * <about-component></about-component>
 * 
 * CSS CLASSES:
 * - .about-section: Main container with full viewport management
 * - .content-wrapper: Flex container for two-column layout
 * - .image-container: Left column with geometric image and floating logo
 * - .details-container: Right column with content and statistics
 * - .stat-card: Achievement card with triangular cutout design
 * 
 * ACCESSIBILITY FEATURES:
 * - Semantic HTML5 structure (section, article, aside, figure)
 * - ARIA labels and roles for screen readers
 * - Keyboard navigation support with proper tabindex
 * - High contrast colors meeting WCAG guidelines
 * - Alternative text for all images and icons
 * - Focus indicators for interactive elements
 * 
 * SEO OPTIMIZATIONS:
 * - Schema.org microdata for organization and address information
 * - Proper heading hierarchy (h2 for main title)
 * - Descriptive alt text and meta information
 * - Structured data for better search engine understanding
 * 
 * RESPONSIVE BREAKPOINTS:
 * - Mobile: 320px - 479px (single column, stacked layout)
 * - Mobile Large: 480px - 767px (optimized spacing and typography)
 * - Tablet: 768px - 1023px (transitional layout with adjusted gaps)
 * - Desktop: 1024px - 1199px (two-column layout established)
 * - Large Desktop: 1200px+ (optimal spacing and maximum content width)
 * 
 * ============================================================================
 */

import { Component, OnInit, OnDestroy } from "@angular/core";
import { CallActionComponent } from "../call-action-component/call-action-component";

/**
 * AboutComponent Interface
 * Defines the structure and contract for the About component
 */
interface AboutComponentInterface {
  /** Component initialization lifecycle hook */
  ngOnInit(): void;
  /** Component destruction lifecycle hook */
  ngOnDestroy(): void;
  /** Handle intersection observer for scroll animations */
  handleIntersection(entries: IntersectionObserverEntry[]): void;
  /** Initialize scroll-triggered animations */
  initializeAnimations(): void;
}

/**
 * Company Statistics Interface
 * Defines the structure for achievement statistics display
 */
interface CompanyStats {
  /** Numerical value for the statistic */
  value: number;
  /** Display suffix (e.g., '+', 'K', 'M') */
  suffix: string;
  /** Description text for the statistic */
  description: string;
  /** Icon class for Font Awesome icons */
  iconClass: string;
}

/**
 * @component AboutComponent
 * @description Main component for company introduction and brand showcase
 * @implements {OnInit, OnDestroy, AboutComponentInterface}
 * 
 * @example
 * ```typescript
 * // Usage in parent component
 * <about-component></about-component>
 * ```
 */
@Component({
  selector: 'about-component',
  templateUrl: './about-component.html',
  styleUrls: ['./about-component.scss'],
  imports: [CallActionComponent],
  standalone: true
})
export class AboutComponent implements OnInit, OnDestroy, AboutComponentInterface {
  
  /**
   * ========================================
   * COMPONENT PROPERTIES
   * ========================================
   */
  
  /** Intersection Observer for scroll-triggered animations */
  private intersectionObserver: IntersectionObserver | null = null;
  
  /** Component statistics data */
  public companyStats: CompanyStats = {
    value: 100,
    suffix: '+',
    description: 'Trusted By Companies',
    iconClass: 'fas fa-award'
  };
  
  /** Animation state tracking */
  public isVisible: boolean = false;
  
  /** Loading state for dynamic content */
  public isLoading: boolean = false;
  
  /**
   * ========================================
   * LIFECYCLE HOOKS
   * ========================================
   */
  
  /**
   * Component initialization
   * - Sets up intersection observer for scroll animations
   * - Initializes any required data or subscriptions
   * 
   * @memberof AboutComponent
   * @since 1.0.0
   */
  ngOnInit(): void {
    this.initializeAnimations();
  }
  
  /**
   * Component cleanup
   * - Disconnects intersection observer
   * - Cleans up subscriptions and event listeners
   * 
   * @memberof AboutComponent
   * @since 1.0.0
   */
  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
  
  /**
   * ========================================
   * PUBLIC METHODS
   * ========================================
   */
  
  /**
   * Initialize scroll-triggered animations using Intersection Observer API
   * Provides smooth entry animations when component enters viewport
   * 
   * @memberof AboutComponent
   * @since 1.0.0
   * @accessibility Respects prefers-reduced-motion user preference
   */
  public initializeAnimations(): void {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      this.isVisible = true; // Skip animations for accessibility
      return;
    }
    
    // Create intersection observer for scroll animations
    this.intersectionObserver = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      {
        threshold: 0.1, // Trigger when 10% of component is visible
        rootMargin: '50px 0px -50px 0px' // Add margin for early trigger
      }
    );
    
    // Observe the component element after view init
    setTimeout(() => {
      const element = document.querySelector('.about-section');
      if (element && this.intersectionObserver) {
        this.intersectionObserver.observe(element);
      }
    }, 0);
  }
  
  /**
   * Handle intersection observer entries for scroll animations
   * Triggers component visibility and animation states
   * 
   * @param entries - Array of intersection observer entries
   * @memberof AboutComponent
   * @since 1.0.0
   */
  public handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.isVisible = true;
        // Add CSS animation classes for smooth entry
        entry.target.classList.add('animate-in');
        
        // Disconnect observer after first intersection for performance
        if (this.intersectionObserver) {
          this.intersectionObserver.disconnect();
        }
      }
    });
  }
  
  /**
   * ========================================
   * UTILITY METHODS
   * ========================================
   */
  
  /**
   * Format statistics number with proper suffixes
   * Handles large numbers with appropriate abbreviations (K, M, B)
   * 
   * @param value - Numerical value to format
   * @returns Formatted string with suffix
   * @memberof AboutComponent
   * @since 1.0.0
   * 
   * @example
   * ```typescript
   * formatStatNumber(1500); // Returns "1.5K"
   * formatStatNumber(2500000); // Returns "2.5M"
   * ```
   */
  public formatStatNumber(value: number): string {
    if (value >= 1000000000) {
      return (value / 1000000000).toFixed(1) + 'B';
    }
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    }
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K';
    }
    return value.toString();
  }
  
  /**
   * Handle logo container click for accessibility
   * Provides keyboard navigation support for decorative elements
   * 
   * @param event - Keyboard or mouse event
   * @memberof AboutComponent
   * @since 1.0.0
   * @accessibility Supports Enter and Space key activation
   */
  public handleLogoInteraction(event: KeyboardEvent | MouseEvent): void {
    if (event instanceof KeyboardEvent) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        // Add focus indication or custom interaction
        console.log('Logo interaction via keyboard');
      }
    }
  }
}
