// Pixel tracking utility for TikTok and Meta
// Call these functions when users take key actions on the site

// TikTok Pixel events
export const tiktokTrack = (event: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).ttq) {
    const ttq = (window as unknown as Record<string, unknown>).ttq as { track: (event: string, params?: Record<string, unknown>) => void };
    ttq.track(event, params);
  }
};

// Meta Pixel events
export const metaTrack = (event: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).fbq) {
    const fbq = (window as unknown as Record<string, unknown>).fbq as (event: string, name: string, params?: Record<string, unknown>) => void;
    fbq('track', event, params);
  }
};

// Fire both pixels with same event
export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  tiktokTrack(eventName, params);
  metaTrack(eventName, params);
};

// Pre-defined event helpers
export const trackBookingClick = () => {
  const params = {
    content_name: 'Book Now',
    content_category: 'Booking',
    value: 0,
    currency: 'USD',
  };
  tiktokTrack('ClickButton', params);
  metaTrack('InitiateCheckout', params);
};

export const trackContactClick = (method: 'phone' | 'email' | 'instagram' | 'tiktok') => {
  const params = {
    content_name: `Contact via ${method}`,
    content_category: 'Contact',
  };
  tiktokTrack('Contact', params);
  metaTrack('Contact', params);
};

export const trackServiceView = (serviceName: string) => {
  const params = {
    content_name: serviceName,
    content_category: 'Service',
  };
  tiktokTrack('ViewContent', params);
  metaTrack('ViewContent', params);
};

export const trackGalleryView = (galleryType: string) => {
  const params = {
    content_name: `${galleryType} Gallery`,
    content_category: 'Gallery',
  };
  tiktokTrack('ViewContent', params);
  metaTrack('ViewContent', params);
};

export const trackPageView = (_pageName: string) => {
  // PageView is auto-fired by both pixels on load
  // Use this for virtual page views in SPA
  if (typeof window !== 'undefined') {
    // TikTok
    const ttq = (window as unknown as Record<string, unknown>).ttq as { page: () => void } | undefined;
    if (ttq) ttq.page();
    
    // Meta
    const fbq = (window as unknown as Record<string, unknown>).fbq as (event: string, name: string) => void | undefined;
    if (fbq) fbq('track', 'PageView');
  }
};
