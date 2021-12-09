![Logo](./leadsales-logo.png)

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Leadclick - Widget

A widget built for fast communication in your landing page, allow your customers to contact you easily and in just in a few clicks.

---

## Wordpress - Installation

Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and
scrambled it to make a type specimen book. It has survived
not only five centuries, but also the leap into electronic
typesetting, remaining essentially unchanged. It was
popularised in the 1960s with the release of Letraset sheets
containing Lorem Ipsum passages, and more recently with
desktop publishing software like Aldus PageMaker including
versions of Lorem Ipsum.

## React - Installation

Install the project with npm

```bash
  npm install @leadsales/leadclick --save
```

Hydrate components inside your `index.js` file

```js
import { applyPolyfills, defineCustomElements } from '@leadsales/leadclick/dist/loader';

applyPolyfills().then(() => {
  defineCustomElements(window);
});
```

Import our component into our App.js file and use the html tag in your code.

```js
import '@leadsales/leadclick';

function App() {
  return (
      //Use snippet generated on leadsales here
  )
}
```

## Angular - Installation

Paste the script tag inside your `index.html`

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@leadsales/leadclick@1.4.0/dist/leadclick/leadclick.esm.js"></script>
<meta charset="utf-8" />
```

Use the **leadsales generated snippet** in your app.component.html file.

---

## Component documentation

Check the this link to see the props and structure of the widget

[leadclick-widget](https://github.com/Leadsales/leadclick/tree/main/src/components/leadclick#readme)

---

## Demo

Check our demo at [leadsales.io](https://leadsales.io/)

---

## License

[MIT](https://choosealicense.com/licenses/mit/)
