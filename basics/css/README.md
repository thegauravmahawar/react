p# CSS

**C**ascading **S**tyle **S**heets

CSS describes the **visual style and presentation** of the **content written in HTML**.

CSS consists of countless **properties** that developers use to format the content: properties about font, text, spacing, layout, etc.

```css
/* h1 is the selector on which we want to apply the style */
h1 {
  color: blue;
  text-align: center;
  font-size: 20px;
}
```

## CSS Theory 1: Conflicts between Selectors

```html
<p id="author-text" class="author">
  Posted by Laura Jones on Monday, June 21st 2027
</p>
```

```css
.author {
  font-style: italic;
  font-size: 18px;
}

#author-text {
  font-size: 20px
}

p,
li {
  font-family: sans-serif;
  color: #444444
  font-size: 22px;
}
```

All rules and properties are applied. If conflicts properties are applied, then that is resolved based on priority.

Highest Priority:

- ID (#) selector
- Class (.) or pseudo-class (:) selector
- Element selector (p, div, li, etc.)
- Universal selector (*)

If multiple selectors of same priority are applied, then the last selector in the code applies.

## CSS Theory 2: Inheritance and the Universal Selector