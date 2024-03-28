const FOOTER = '© 2024 All Rights Reserved by Woodie Vo.';

export default ({ app }, inject) => {
  const footerContent = FOOTER;

  inject('footer', footerContent);
};
