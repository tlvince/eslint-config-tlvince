# eslint-config-tlvince

[![Build Status][travis-image]][travis-url]

> ESLint rule customisations

Opinionated [ESLint rule definitions][eslint]. Write JavaScript in
[@tlvince][]'s style!

![screenshot][]

[travis-image]: https://img.shields.io/travis/tlvince/eslint-config-tlvince.svg
[travis-url]: https://travis-ci.org/tlvince/eslint-config-tlvince
[eslint]: http://eslint.org/docs/rules/
[screenshot]: https://cloud.githubusercontent.com/assets/323761/7784491/72ba15a8-015f-11e5-8864-5de33470f550.png
[@tlvince]: https://github.com/tlvince

## Usage

The short story:

```shell
npm i -D eslint prettier typescript eslint-config-tlvince
echo "extends: tlvince" >> .eslintrc
```

The long story:

1. Install from npm:

    ```shell
    npm install --save-dev eslint prettier typescript eslint-config-tlvince
    ```

2. Enable the module by adding the `extends` keyword to `.eslintrc`. YAML variant:

    ```yaml
    extends: tlvince
    ```

   … or if JSON is your thing:

    ```json
    {
      "extends": "tlvince"
    }
    ```

## Author

© 2015 Tom Vincent <npm@tlvince.com>

## License

Released under the [MIT License](http://tlvince.mit-license.org).
