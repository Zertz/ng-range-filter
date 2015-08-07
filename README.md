# ng-range-filter [![Circle CI](https://circleci.com/gh/Zertz/ng-range-filter/tree/master.svg?style=svg&circle-token=f9f9b6da8c09af27f2cca4d943a013ba2a267c8d)](https://circleci.com/gh/Zertz/ng-range-filter/tree/master) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard) [![npm version](https://badge.fury.io/js/ng-range-filter.svg)](http://badge.fury.io/js/ng-range-filter)

AngularJS filter to generate a range of numeric values

## Installation

### npm

```
npm i ng-range-filter --save
```

### bower

```
bower i ng-range-filter --save
```

## Usage

Generate values from 0 to 5

```html
<div ng-repeat="n in [5] | range">{{n}}</div>
```

Generate values from 1 to 5

```html
<div ng-repeat="n in [1, 5] | range">{{n}}</div>
```

Generate values from 5 to 1

```html
<div ng-repeat="n in [5, 1] | range">{{n}}</div>
```

## Tests

### Single run

```
npm test
```

### Development

```
npm run develop
```

## Licence

MIT
