/**
 * ===============================================
 * HEADER COMPONENT
 * ===============================================
 *
 * Main navigation header component with responsive design
 * and smooth scrolling functionality.
 *
 * Features:
 * - Dynamic header styling based on scroll position
 * - Responsive mobile menu with toggle animation
 * - Smooth scrolling navigation to page sections
 * - Window scroll event handling for header effects
 * - Mobile-first responsive design approach
 *
 * @component Header
 * @selector app-header
 * @author Metropolis Living Team
 * @version 1.0.0
 * @since 2025-09-17
 */

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  /* ===== COMPONENT STATE PROPERTIES ===== */

  /**
   * Tracks whether the page has been scrolled beyond threshold
   * Controls the header's visual state (shadow, padding, etc.)
   *
   * @type {boolean}
   * @default false
   * @public
   */
  isScrolled = false;

  /**
   * Controls the mobile menu visibility and animation state
   * Toggles between closed (false) and open (true) states
   *
   * @type {boolean}
   * @default false
   * @public
   */
  isMobileMenuOpen = false;

  /* ===== EVENT LISTENERS ===== */

  /**
   * Window scroll event listener
   *
   * Monitors scroll position to dynamically update header appearance.
   * Adds visual enhancements (shadow, reduced padding) when user scrolls
   * down beyond 50 pixels for better content focus and space utilization.
   *
   * Performance considerations:
   * - Uses direct window.scrollY for optimal performance
   * - Threshold of 50px prevents excessive state changes
   * - Bound to window scroll events automatically by Angular
   *
   * @listens window:scroll
   * @returns {void}
   * @public
   */
  @HostListener('window:scroll', [])
  onScroll(): void {
    // Update scroll state based on 50px threshold
    // This creates a smooth transition effect for the header
    this.isScrolled = window.scrollY > 50;
  }

  /* ===== PUBLIC METHODS ===== */

  /**
   * Smooth scroll navigation to specific page sections
   *
   * Provides elegant navigation experience by smoothly scrolling to
   * targeted DOM elements. Used by both desktop and mobile navigation
   * links to create seamless page transitions without page reloads.
   *
   * @param {string} elementId - The ID of the target DOM element to scroll to
   * @returns {void}
   * @public
   *
   * @example
   * ```typescript
   * // Scroll to the hero section
   * this.scrollTo('hero');
   *
   * // Scroll to the about section
   * this.scrollTo('about');
   * ```
   */
  scrollTo(elementId: string): void {
    // Locate the target element in the DOM
    const element = document.getElementById(elementId);

    // Only proceed if element exists to prevent errors
    if (element) {
      // Use native smooth scrolling for optimal performance
      // and cross-browser compatibility
      element.scrollIntoView({
        behavior: 'smooth', // CSS smooth scrolling animation
      });
    }
  }

  /**
   * Toggles mobile menu visibility state
   *
   * Controls the mobile menu overlay display by toggling the
   * isMobileMenuOpen property. This triggers CSS animations
   * for smooth slide-in/slide-out effects and hamburger icon
   * transformation (hamburger ↔ X icon).
   *
   * @returns {void}
   * @public
   *
   * @example
   * ```html
   * <!-- In template -->
   * <button (click)="toggleMobileMenu()">Toggle Menu</button>
   * ```
   */
  toggleMobileMenu(): void {
    // Toggle mobile menu state
    // CSS transitions handle the visual animations
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  /**
   * Mobile-specific navigation with automatic menu closure
   *
   * Combines smooth scrolling functionality with mobile menu management.
   * After navigating to the target section, automatically closes the
   * mobile menu to provide a clean user experience and prevent UI
   * obstruction of the content.
   *
   * @param {string} elementId - The ID of the target DOM element to scroll to
   * @returns {void}
   * @public
   *
   * @example
   * ```html
   * <!-- Mobile navigation link -->
   * <a (click)="scrollToMobile('contact')">Contact Us</a>
   * ```
   */
  scrollToMobile(elementId: string): void {
    // First, perform the smooth scroll to target section
    this.scrollTo(elementId);

    // Then automatically close the mobile menu for better UX
    // This prevents the menu from blocking the scrolled-to content
    this.isMobileMenuOpen = false;
  }
}
