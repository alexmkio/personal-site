export const easeInSine = [0.47, 0, 0.745, 0.715];
export const animationOptions = {
  initial: { opacity: 0, y: 200 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: easeInSine, delay: 0.3 },
};
