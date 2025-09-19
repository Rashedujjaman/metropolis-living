import { Injectable } from '@angular/core';

export interface SeoData {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  updateSeoData(data: SeoData): void {
    if (data.title) {
      document.title = data.title;
    }

    this.updateMetaTag('description', data.description);
    this.updateMetaTag('keywords', data.keywords);
    this.updateMetaTag('og:title', data.title);
    this.updateMetaTag('og:description', data.description);
    this.updateMetaTag('og:image', data.ogImage);
  }

  private updateMetaTag(name: string, content?: string): void {
    if (!content) return;

    let selector = `meta[name="${name}"]`;
    if (name.startsWith('og:')) {
      selector = `meta[property="${name}"]`;
    }

    let element = document.querySelector(selector);

    if (element) {
      element.setAttribute('content', content);
    } else {
      element = document.createElement('meta');
      if (name.startsWith('og:')) {
        element.setAttribute('property', name);
      } else {
        element.setAttribute('name', name);
      }
      element.setAttribute('content', content);
      document.getElementsByTagName('head')[0].appendChild(element);
    }
  }
}
