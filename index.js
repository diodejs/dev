const { add } = require('@diode/apk');

async function configure() {
  await add('neovim');
}

configure().then(() => {
  console.log('Completed');
}).catch(err => {
  console.error('@diode/dev: caught error', err);
});
