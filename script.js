const container = document.querySelector('.container')
const colors = [
  'hotpink',
  'maroon',
  'purple',
  'fuchsia',
  'green',
  'lime',
  'olive',
  'yellow',
  'navy',
  'blue',
  'teal',
  'chocolate',
  'darkorange',
  'indianred',
  'mediumvioletred',
  'navajowhite',
  'palegreen',
  'paleturquoise',
]

for (let i = 0; i <= 500; i++) {
  let box = document.createElement('div')
  box.classList.add('box')
  container.append(box)
}

document.querySelectorAll('.box').forEach((box) => {
  box.addEventListener('mouseenter', addColorToBox)
  box.addEventListener('mouseleave', addColorOutBox)
})

function addColorToBox({ target }) {
  let idx = Math.floor(Math.random() * colors.length)
  target.style.backgroundColor = colors[idx]
  target.style.boxShadow = `0 0 2px ${colors[idx]} , 0 0 12px ${colors[idx]} `
}

function addColorOutBox({ target }) {
  setTimeout(() => {
    target.style.backgroundColor = ''
    target.style.boxShadow = ''
  }, 500)
}
