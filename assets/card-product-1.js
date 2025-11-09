
 function setEqualHeight(selector){
      const divs = document.querySelectorAll(selector);
      const maxHeight = Math.max(...Array.from(divs, div => div.offsetHeight));
      divs.forEach(div => {
        div.style.height = `${maxHeight}px`;
      });
    };
  document.addEventListener('DOMContentLoaded', () => {
    setEqualHeight('#ProductGridContainer product-card [data-card-info]');
  });
