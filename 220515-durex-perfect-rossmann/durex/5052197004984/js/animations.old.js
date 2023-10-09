const controller = new ScrollMagic.Controller();

const revealLogo = document.getElementsByClassName("es-kv__logo");
for (let esElement = 0; esElement < revealLogo.length; esElement++) {
  new ScrollMagic.Scene({
    triggerElement: revealLogo[esElement],
    offset: 50,
    triggerHook: 0.9,
    // reverse: false
  })
    .setClassToggle(revealLogo[esElement], "visible")
    .addTo(controller);
}

const revealPleasure = document.getElementsByClassName("es-kv__title");
for (let esElement = 0; esElement < revealPleasure.length; esElement++) {
  new ScrollMagic.Scene({
    triggerElement: revealPleasure[esElement],
    offset: 50,
    triggerHook: 0.9,
    // reverse: false
  })
    .setClassToggle(revealPleasure[esElement], "visible")
    .addTo(controller);
}

const revealPhoto = document.getElementsByClassName("es-kv__photo");
for (let esElement = 0; esElement < revealPhoto.length; esElement++) {
  new ScrollMagic.Scene({
    triggerElement: revealPhoto[esElement],
    offset: 50,
    triggerHook: 0.9,
    // reverse: false
  })
    .setClassToggle(revealPhoto[esElement], "visible")
    .addTo(controller);
}

const revealWhy = document.getElementsByClassName("es-features__title");
for (let esElement = 0; esElement < revealWhy.length; esElement++) {
  new ScrollMagic.Scene({
    triggerElement: revealWhy[esElement],
    offset: 50 + esElement * 25,
    triggerHook: 0.9,
    // reverse: false
  })
    .setClassToggle(revealWhy[esElement], "visible")
    .addTo(controller);
}

const revealFeatures = document.getElementsByClassName("es-features__feature");
for (let esElement = 0; esElement < revealFeatures.length; esElement++) {
  new ScrollMagic.Scene({
    triggerElement: revealFeatures[esElement],
    offset: 100 + esElement * 50,
    triggerHook: 0.9,
    // reverse: false
  })
    .setClassToggle(revealFeatures[esElement], "visible")
    .addTo(controller);
}

const revealBenefitsLogo = document.getElementsByClassName("es-benefits__logo");
for (let esElement = 0; esElement < revealBenefitsLogo.length; esElement++) {
  new ScrollMagic.Scene({
    triggerElement: revealBenefitsLogo[esElement],
    offset: 50,
    triggerHook: 0.9,
    // reverse: false
  })
    .setClassToggle(revealBenefitsLogo[esElement], "visible")
    .addTo(controller);
}

const revealBenefitsTitle = document.getElementsByClassName(
  "es-benefits__title"
);
for (let esElement = 0; esElement < revealBenefitsTitle.length; esElement++) {
  new ScrollMagic.Scene({
    triggerElement: revealBenefitsTitle[esElement],
    offset: 50,
    triggerHook: 0.9,
    // reverse: false
  })
    .setClassToggle(revealBenefitsTitle[esElement], "visible")
    .addTo(controller);
}

const revealBenefitsText = document.getElementsByClassName("es-benefits__text");
for (let esElement = 0; esElement < revealBenefitsText.length; esElement++) {
  new ScrollMagic.Scene({
    triggerElement: revealBenefitsText[esElement],
    offset: 50,
    triggerHook: 0.9,
    // reverse: false
  })
    .setClassToggle(revealBenefitsText[esElement], "visible")
    .addTo(controller);
}

const revealBenefitsLink = document.getElementsByClassName("es-benefits__link");
for (let esElement = 0; esElement < revealBenefitsLink.length; esElement++) {
  new ScrollMagic.Scene({
    triggerElement: revealBenefitsLink[esElement],
    offset: 50,
    triggerHook: 0.9,
    // reverse: false
  })
    .setClassToggle(revealBenefitsLink[esElement], "visible")
    .addTo(controller);
}

const revealBenefits = document.getElementsByClassName("es-benefits__benefit");
for (let esElement = 0; esElement < revealBenefits.length; esElement++) {
  new ScrollMagic.Scene({
    triggerElement: revealBenefits[esElement],
    offset: 50,
    triggerHook: 0.9,
    // reverse: false
  })
    .setClassToggle(revealBenefits[esElement], "visible")
    .addTo(controller);
}

const revealBanner = document.getElementsByClassName("es-banner__photo");
for (let esElement = 0; esElement < revealBanner.length; esElement++) {
  new ScrollMagic.Scene({
    triggerElement: revealBanner[esElement],
    offset: 50 + esElement * 75,
    triggerHook: 0.9,
    // reverse: false
  })
    .setClassToggle(revealBanner[esElement], "visible")
    .addTo(controller);
}

const revealInstruction = document.getElementsByClassName(
  "es-instruction__step"
);
for (let esElement3 = 0; esElement3 < revealInstruction.length; esElement3++) {
  new ScrollMagic.Scene({
    triggerElement: revealInstruction[esElement3],
    offset: 50 + esElement3 * 50,
    triggerHook: 0.8,
    // reverse: false
  })
    .setClassToggle(revealInstruction[esElement3], "visible")
    .addTo(controller);
}
