export const animateValue = (
  setValue: (value: number) => void,
  startValue: number,
  duration: number = 1000,
): void => {
  const startTime = Date.now();

  const animate = (): void => {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease out cubic function
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);

    const newValue = Math.floor(startValue + (100 - startValue) * easeOutCubic);

    if (newValue < 100) {
      setValue(newValue);
      requestAnimationFrame(animate);
    } else {
      setValue(100);
    }
  };

  requestAnimationFrame(animate);
};
