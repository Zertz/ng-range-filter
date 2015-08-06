# ng-range-filter

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

```
npm test
```

## Licence

MIT
