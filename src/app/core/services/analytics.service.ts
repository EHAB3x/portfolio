import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly measurementId = environment.googleAnalyticsId;
  private initialized = false;

  constructor() {
    if (this.measurementId) {
      this.initialize();
    }
  }

  trackClick(element: HTMLElement): void {
    if (!this.initialized) {
      return;
    }

    const link = element.closest('a');
    const label = element.getAttribute('aria-label') || element.textContent?.trim() || 'unnamed';

    window.gtag('event', 'click', {
      event_category: 'engagement',
      event_label: label.slice(0, 100),
      link_url: link?.getAttribute('href') || undefined,
    });
  }

  private initialize(): void {
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => window.dataLayer.push(args);
    window.gtag('js', new Date());
    window.gtag('config', this.measurementId);

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
    document.head.appendChild(script);
    this.initialized = true;
  }
}
