(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-mobile-menu-open]"),
      closeModalBtn: document.querySelector("[data-mobile-menu-close]"),
      modal: document.querySelector("[data-mobile-menu]"),
    };
  
    refs.openMobile-menuBtn.addEventListener("click", toggleMobile-menu);
    refs.closeMobile-menuBtn.addEventListener("click", toggleMobile-menu);
  
    function toggleMobile-menu() {
      refs.mobile-menu.classList.toggle("is-hidden");
    }
  })();