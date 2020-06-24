module.exports = {
  '*.ts': ['eslint --cache --fix', 'yarn test --bail --findRelatedTests'],
  '*.{js,jsx,ts,tsx,json,css,md}': ['prettier --write'],
}
