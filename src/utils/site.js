export const scrollToTop = duration => {
  if (duration > 0) {
    const diff = document.documentElement.scrollTop;
    const step = (diff / duration) * 10;
    setTimeout(() => {
      document.documentElement.scrollTop -= step;
      if (document.documentElement.scrollTop > 0) {
        scrollToTop(duration - 10);
      }
    }, 10);
  }
}
