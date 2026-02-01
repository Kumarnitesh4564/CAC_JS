# Project related to DOM

## Project Link
[click here] (https://stackblitz.com/edit/stackblitz-starters-erj9kevg?file=index.html)

# Project 1
```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body");

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    // console.log(e);
    // console.log(e.target);
    if(e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'red') {
      body.style.backgroundColor = e.target.id
    }
  })
})

```