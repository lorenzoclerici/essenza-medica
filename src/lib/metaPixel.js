const META_PIXEL_ID = '1363082835488481'

export function trackMetaLead() {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead')
  }
}

export { META_PIXEL_ID }
