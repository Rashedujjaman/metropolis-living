import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  Testimonial,
  Project,
  Service,
  FAQ,
  Statistic,
} from '../models/home.model';

@Injectable({
  providedIn: 'root',
})
export class HomeDataService {
  getFAQs(): Observable<FAQ[]> {
    const faqs: FAQ[] = [
      {
        id: 1,
        question: 'What types of properties do you develop?',
        answer:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis consectetuer.',
      },
      {
        id: 2,
        question: 'What is the timeline for project completion?',
        answer:
          'Project timelines vary depending on size and complexity, but most residential developments take 18-36 months from groundbreaking to completion. We provide regular updates throughout the construction process and maintain transparent communication with all stakeholders.',
      },
      {
        id: 3,
        question: 'Are there any warranties or guarantees?',
        answer:
          'Yes, we offer a range of warranties and guarantees to ensure the quality and durability of our developments. These include structural warranties, appliance guarantees, and a comprehensive customer service program to address any post-purchase concerns.',
      },
    ];
    return of(faqs);
  }
}
