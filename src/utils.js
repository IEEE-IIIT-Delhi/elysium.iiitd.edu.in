export async function waitForElement (selector) {
  while (document.querySelector(selector) === null) {
    await new Promise(resolve => requestAnimationFrame(resolve))
  }
  return document.querySelector(selector)
}

export const isIos = () =>
  [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform) ||
  // iPad on iOS 13 detection
  (navigator.userAgent.includes('Mac') && 'ontouchend' in document)

export const wait = async ms => new Promise((resolve, reject) => setTimeout(resolve, ms))

export const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num

export const normalizeForSaEvents = str =>
  str
    .trim()
    .toLowerCase()
    .replace(/[^a-z\d]/g, '_')
    .replace(/(_)\1/g, '_')
