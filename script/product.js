window.addEventListener('load', () => {
  app();
  zoom();
  userAddPopup();
  selectMenu();
  dropDown();
  dotsMenu();
});

const app = () => {
  const menu__bar = document.querySelector('.menu__bar');
  const nav = document.querySelector('nav');
  const search__bar = document.querySelector('.search__bar-mobile');
  const mobile__input = document.querySelector('.mobile__input');

  menu__bar.addEventListener('click', () => {
    nav.classList.toggle('active');
    nav.classList.toggle('nav--active');
  });

  search__bar.addEventListener('click', () => {
    mobile__input.classList.toggle('mobile__input--active');
  });
};

const zoom = () => {
  const html = document.querySelector('html');
  const zoom_in = document.querySelector('#zoom-in');
  const zoom_out = document.querySelector('#zoom-out');
  const zoom_plus = document.querySelector('#zoom-plus');
  const zoom_reset = document.querySelector('#zoom-reset');

  let fontSize = 16;

  zoom_in.addEventListener('click', () => {
    fontSize += 2;
    html.style.fontSize = `${fontSize}px`;
  });

  zoom_out.addEventListener('click', () => {
    fontSize -= 1;
    html.style.fontSize = `${fontSize}px`;
  });

  zoom_reset.addEventListener('click', () => {
    fontSize = 16;
    html.style.fontSize = `${fontSize}px`;
  });

  zoom_plus.addEventListener('click', () => {
    fontSize += 4;
    html.style.fontSize = `${fontSize}px`;
  });
};

const userAddPopup = () => {
  const userAddBtn = document?.querySelector('#user-add-btn');
  const userPopUpWrapper = document?.querySelector('.add-user__wrapper');
  const popUpCloseBtn = document?.querySelectorAll('#popup-close');

  userAddBtn?.addEventListener('click', () => {
    userPopUpWrapper.classList.add('user-add-popup--active');
  });

  popUpCloseBtn?.forEach((close) => {
    close.addEventListener('click', () => {
      userPopUpWrapper.classList.remove('user-add-popup--active');
    });
  });
};

const selectMenu = () => {
  const optionMenu = document?.querySelector('.select-menu');
  const selectBtn = document?.querySelector('.select-btn');
  const options = document?.querySelectorAll('.option');
  const sBtn_text = document?.querySelector('.sBtn-text');

  options?.forEach((option) => {
    option?.addEventListener('click', () => {
      let selected = option.querySelector('.option-text').innerText;
      sBtn_text.innerText = selected;
      optionMenu.classList.remove('select-menu--active');
    });
  });

  selectBtn?.addEventListener('click', () => {
    optionMenu.classList.toggle('select-menu--active');
  });
};

const dropDown = () => {
  const dropMenu = document?.querySelector('.drop-menu');
  const dropBtn = document?.querySelector('.drop-btn');
  const dOptions = document?.querySelectorAll('.d-option');
  const dBtn_text = document?.querySelector('.dBtn-text');

  dOptions?.forEach((option) => {
    option?.addEventListener('click', () => {
      let selected = option.querySelector('.d-option-text').innerText;
      dBtn_text.innerText = selected;
      dropMenu.classList.remove('drop-menu--active');
    });
  });

  dropBtn?.addEventListener('click', () => {
    dropMenu.classList.toggle('drop-menu--active');
  });
};

const dotsMenu = () => {
  const dotsMenu = document.querySelector('.dots-menu');
  const tOptions = document.querySelectorAll('.t-option');
  const dotsBtn = document.querySelectorAll('.dots-btn');

  dotsBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('dots--active');
    });
  });

  tOptions.forEach((opt) => {
    opt.addEventListener('click', () => {
      dotsBtn.forEach((btn) => {
        btn.classList.remove('dots--active');
      });
    });
  });
};
