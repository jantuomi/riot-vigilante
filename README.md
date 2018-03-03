# Vigilante

## Description

Store all your observables in one place. `Vigilante` consists only of one function, `vigilante.observe(keyword)`, that is used to get an observable from the store.

## Get it

```shell
yarn install vigilante
```

## Example

app.tag
```jsx
<app>
  <counter />
  <push-button />

  <script>
    import { observe } from 'vigilante';
  </script>
</app>
```

counter.tag
```jsx
<counter>
  <h3>Times clicked: { count }</h3>
  <push-button />

  <script>
    this.count = 0;
    const counter = this;
    
    observe('clicker').on('click', () => {
      counter.count += 1;
      counter.update();
    });
  </script>
</counter>
```

push-button.tag
```jsx
<push-button>
  <button onclick={ click }>Click me!</button>

  <script>
    click() {
      observe('clicker').trigger('click');
    }
  </script>
</push-button>
```