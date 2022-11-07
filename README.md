Tests are failing with `ember-classic-decorator@3.0.1` AND `ember-data@4.4.0-alpha.8`

`yarn test:ember` => FAIL

Without `ember-classic-decorator`, tests are OK

`yarn remove ember-classic-decorator`
`yarn test:ember` => OK

With `ember-data@4.4.0-alpha.7`, tests are OK

```shell
yarn remove ember-data
yarn add -D ember-data@4.4.0-alpha.7
yarn test:ember # => OK
```
