# PostCSS Lolcat Stylesheets [![Build Status][ci-img]][ci]

[PostCSS] plugin for writing Lolcat Style Sheets.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/sandralundgren/postcss-lolcat-stylesheets.svg
[ci]:      https://travis-ci.org/sandralundgren/postcss-lolcat-stylesheets
[Lolcat Values]:      https://github.com/sandralundgren/lolcat-css-values


![alt tag](http://i.imgur.com/VGdmJfx.jpg)


### Lolcat syntax

```css
.ohai {
    posishun: relativ;
    bakground-color: chawklit;
    bakground-image: none;
    font-pplz: Helvetica, Arial;
    color: silvr;
    lettr-spacin: 2px;
    paddin-rite: 30px;
}
```

### CSS output

```css
.ohai {
    position: relative;
    background-color: chocolate;
    background-image: none;
    font-family: Helvetica, Arial;
    color: silver;
    letter-spacing: 2px;
    padding-right: 30px;
}
```

#### [Here you can see the full list of Lolcat CSS Properties](https://github.com/sandralundgren/lolcat-css-properties)

#### [Here you can see the full list of Lolcat CSS Values](https://github.com/sandralundgren/lolcat-css-values)

## Usage

```js
postcss([ require('postcss-lolcat-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.
