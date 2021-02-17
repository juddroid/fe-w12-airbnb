(function (window, document) {
  'use strict';

  const $headerButtonGrounp = document.querySelector('.header__container--centerbox > ul');
  const $airbnbBtn = document.querySelector('#airbnb--button');
  const $activityBtn = document.querySelector('#activity--button');
  const $onlineActBtn = document.querySelector('#online--activity--button');
  const $reservationBox = document.querySelector('.reservation__box');

  const LONG_BAR = 'low-bar-long';
  const SHORT_BAR = 'low-bar-short';
  const TP_BAR = 'low-bar-transparent';
  const BUTTON = 'button';
  const DEFAULT_BUTTON = 'button--default';
  const MENU = 'menu';
  const MENU_HOVER = 'menu__hover';

  const LongBar = '.low-bar-long';
  const TpBar = '.low-bar-transparent';
  const Button = '.button';
  const DefaultButton = '.button--default';
  const LowerBox = '.lower--box';
  const Menu = '.menu';
  const MenuHover = '.menu__hover';

  // HEADER__MENU--BUTTON-GROUP

  $airbnbBtn.addEventListener('mouseenter', () => changeShortBar($airbnbBtn));
  $airbnbBtn.addEventListener('mouseleave', () => changeHiddenBar($airbnbBtn));
  $airbnbBtn.addEventListener('click', () => changeLongBar($airbnbBtn));

  $activityBtn.addEventListener('mouseenter', () => changeShortBar($activityBtn));
  $activityBtn.addEventListener('mouseleave', () => changeHiddenBar($activityBtn));
  $activityBtn.addEventListener('click', () => changeLongBar($activityBtn));

  $onlineActBtn.addEventListener('mouseenter', () => changeShortBar($onlineActBtn));
  $onlineActBtn.addEventListener('mouseleave', () => changeHiddenBar($onlineActBtn));

  initCursor();

  function initCursor() {
    $airbnbBtn.classList.replace(BUTTON, DEFAULT_BUTTON);
  }

  function changeCursor() {
    $airbnbBtn.classList.replace(DEFAULT_BUTTON, BUTTON);
    $activityBtn.classList.replace(BUTTON, DEFAULT_BUTTON);
  }

  function isLongBar(btn) {
    return btn.querySelector('.low-bar').classList.contains(LONG_BAR);
  }

  function changeLongBar(btn) {
    if (isLongBar(btn)) return;
    changeCursor(btn);
    if (btn === $airbnbBtn) {
      btn.querySelector('.low-bar').classList.replace(SHORT_BAR, LONG_BAR);
      $activityBtn.querySelector('.low-bar').classList.replace(LONG_BAR, TP_BAR);
    }
    if (btn === $activityBtn) {
      btn.querySelector('.low-bar').classList.replace(SHORT_BAR, LONG_BAR);
      $airbnbBtn.querySelector('.low-bar').classList.replace(LONG_BAR, TP_BAR);
    }

    // if (btn === $airbnbBtn) {
    //   $reservationBox.classList.replace('reservation__box--activity', 'reservation__box--airbnb');
    //   $reservationBox.classList.replace('visible--flex', 'visible--hidden');
    // }
    // if (btn === $activityBtn) {
    //   $reservationBox.classList.replace('reservation__box--airbnb', 'reservation__box--activity');
    //   $reservationBox.querySelector('.reservation__box--activity').classList.replace('visible--hidden', 'visible--flex');
    // }
  }

  function changeShortBar(btn) {
    if (isLongBar(btn)) return;
    btn.querySelector(LowerBox).classList.replace(TP_BAR, SHORT_BAR);
    btn.querySelector(Menu).className = MENU_HOVER;
  }

  function changeHiddenBar(btn) {
    if (btn.querySelector(MenuHover)) {
      btn.querySelector(MenuHover).className = MENU;
    }
    if (isLongBar(btn)) return;
    btn.querySelector(LowerBox).classList.replace(SHORT_BAR, TP_BAR);
  }

  // NAV
})(window, document);
