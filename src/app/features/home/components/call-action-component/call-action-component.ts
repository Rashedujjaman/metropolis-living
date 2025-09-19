/**
 * ===============================================
 * CALL ACTION OVERLAY COMPONENT
 * ===============================================
 *
 * Reusable call-to-action overlay component with customizable
 * dimensions and action text for various UI contexts.
 *
 * Features:
 * - Configurable action name/text
 * - Customizable height and width dimensions
 * - Accessible keyboard navigation support
 * - Orange and black themed design sections
 * - Click and keyboard event handling
 * - ARIA accessibility attributes
 * - Flexible positioning (no absolute positioning)
 *
 * @component CallActionComponent
 * @selector call-action-component
 * @author Metropolis Living Team
 * @version 1.1.0
 * @since 2025-09-18
 */

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'call-action-component',
  template: `
    <!-- 
    ===========================================
    CALL ACTION OVERLAY CONTAINER
    ===========================================
    Interactive overlay with orange arrow and black action text
    Responsive to click, Enter, and Space key events
    Positioning handled by parent component
    -->
    <div
      class="hero-overlay"
      role="button"
      tabindex="0"
      [attr.aria-label]="'Action: ' + actionName"
      [style.height.px]="height"
      [style.width.px]="width"
      (click)="onActionClick()"
      (keydown.enter)="onActionClick()"
      (keydown.space)="onActionClick()"
    >
      <!-- Left Section: Orange arrow indicator -->
      <div class="section-left" aria-hidden="true">
        <span>>></span>
      </div>

      <!-- Right Section: Action name/text -->
      <div class="section-right">
        <span>{{ actionName }}</span>
      </div>
    </div>
  `,
  styles: `
    /**
     * ===========================================
     * CALL ACTION OVERLAY STYLES
     * ===========================================
     * Flexible overlay component without absolute positioning
     * Orange arrow section (25%) + Black action text section (75%)
     * Positioning handled by parent component
     */

    .hero-overlay {
      /* === LAYOUT (NO POSITIONING) === */
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;

      /* === INTERACTIVE STATES === */
      cursor: pointer;
      transition: all 0.3s ease;
      // border-radius: 4px;
      overflow: hidden;

      /* === ACCESSIBILITY === */
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      &:focus {
        outline: 2px solid var(--primary-orange);
        outline-offset: 2px;
      }

      &:active {
        transform: translateY(0);
      }

      /**
       * LEFT SECTION: Orange Arrow Indicator
       * - 25% width with orange background
       * - Contains directional arrows (>>)
       * - Centered content alignment
       */
      .section-left {
        background: var(--primary-orange);
        width: 25%;
        height: 100%;
        color: #f8f9fa;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: -5px;
        font-weight: bold;
        transition: background-color 0.3s ease;
      }

      /**
       * RIGHT SECTION: Action Text Container
       * - 75% width with black background
       * - Contains customizable action name
       * - Responsive text sizing
       */
      .section-right {
        background: var(--black);
        height: 100%;
        color: #f8f9fa;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 75%;
        font-weight: 500;
        font-size: 0.9rem;
        transition: background-color 0.3s ease;

        /* Responsive text sizing */
        span {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 0 8px;
        }
      }

      /* Hover effects */
      &:hover {
        .section-left {
          background: #e55a2b; /* Darker orange on hover */
        }

        .section-right {
          background: #333333; /* Lighter black on hover */
        }
      }
    }

    /**
     * ===========================================
     * RESPONSIVE ADJUSTMENTS
     * ===========================================
     * Optimizations for different overlay sizes
     */

    /* Small overlay adjustments */
    .hero-overlay[style*='height: 40px'],
    .hero-overlay[style*='height: 30px'] {
      .section-right {
        font-size: 0.8rem;
      }

      .section-left {
        font-size: 0.8rem;
        letter-spacing: -3px;
      }
    }

    /* Large overlay adjustments */
    .hero-overlay[style*='height: 60px'],
    .hero-overlay[style*='height: 70px'] {
      .section-right {
        font-size: 1rem;
      }

      .section-left {
        font-size: 1.1rem;
      }
    }

    /* Extra large overlay adjustments */
    .hero-overlay[style*='height: 80px'] {
      .section-right {
        font-size: 1.1rem;
      }

      .section-left {
        font-size: 1.2rem;
      }
    }
  `,
})
export class CallActionComponent {
  /**
   * ===========================================
   * COMPONENT INPUT PROPERTIES
   * ===========================================
   * Configurable properties for component customization
   */

  /**
   * The action name/text to display in the overlay
   * @default 'Get Started'
   */
  @Input() actionName: string = 'Get Started';

  /**
   * Height of the overlay component in pixels
   * @default 50
   */
  @Input() height: number = 50;

  /**
   * Width of the overlay component in pixels
   * @default 200
   */
  @Input() width: number = 200;

  /**
   * ===========================================
   * COMPONENT OUTPUT EVENTS
   * ===========================================
   * Events emitted for parent component communication
   */

  /**
   * Event emitted when the action button is clicked or activated
   * Emits the action name for parent component handling
   */
  @Output() actionClicked = new EventEmitter<string>();

  /**
   * ===========================================
   * COMPONENT METHODS
   * ===========================================
   * Event handling and component logic
   */

  /**
   * Handles click and keyboard activation events
   * Emits actionClicked event with current action name
   *
   * @public
   * @method onActionClick
   * @returns {void}
   *
   * @example
   * // Parent component can listen to this event
   * <call-action-component
   *   actionName="Learn More"
   *   [height]="60"
   *   [width]="250"
   *   (actionClicked)="handleAction($event)">
   * </call-action-component>
   */
  onActionClick(): void {
    // Emit the action event with the current action name
    this.actionClicked.emit(this.actionName);

    // Optional: Add analytics tracking
    console.log(`Action clicked: ${this.actionName}`);

    // Optional: Add haptic feedback for mobile devices
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  }
}
