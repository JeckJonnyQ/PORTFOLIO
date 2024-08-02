const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {
  const SCROLL_OFFSET = 100;

  if (elementRef && elementRef.current) {
    window.scrollTo({
      top: elementRef.current.offsetTop - SCROLL_OFFSET,
      behavior: 'smooth',
    });
  }
};
export default scrollToSection;
