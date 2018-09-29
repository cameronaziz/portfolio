const generateRandomTitle = (i, logoRandom, callback) => {
  setTimeout(() => {
    callback({
      intro: logoRandom,
    });
  }, i * 70);
};

export default (logoTitle, callback) => {
  setTimeout(() => {
    let logoRandom = '';
    const possible = '-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}';
    for (let i = 0; i < logoTitle.length + 1; i += 1) {
      logoRandom = logoTitle.substr(0, i);
      for (let j = i; j < logoTitle.length; j += 1) {
        logoRandom += possible.charAt(
          Math.floor(Math.random() * possible.length),
        );
      }
      generateRandomTitle(i, logoRandom, callback);
      logoRandom = '';
    }
  }, 500);
};
