| Header          |                 |
| --------------- | --------------- |
| Row 1, Column 1 | Row 1, Column 2 |

```js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

{{ 1 + 1 }}

<span v-for="i in 3">{{ i }} </span>

{{ $page }}

::: v-pre
`{{ This will be displayed as-is }}`
:::

# text <Tag/>

# text `<Tag/>`

### Badge <Badge text="beta" type="warning"/> <Badge text="default theme"/>
