import getGradients from './functions/getGradients.js'

if (localStorage.bg) {
  document.querySelector('body').style.background = `linear-gradient(to right, ${JSON.parse(localStorage.bg).join(', ')})`
} else { document.querySelector('body').style.background = 'linear-gradient(to right, #34e89e, #0f3443)' }

async function renderGradients() {
  const gradients = await getGradients()
  const buttons = ['.bg-1', '.bg-2', '.bg-3', '.bg-4', '.bg-5', '.bg-6', '.bg-7', '.bg-8', '.bg-9', '.bg-10', '.bg-11', '.bg-12']

  let finalGradients = []
  for (let i = 0; i < 12; i++) {
    let random
    do {
      random = Math.floor(Math.random() * gradients.length)
    } while (finalGradients.includes(random))
    finalGradients.push(random)
  }
  finalGradients = finalGradients.map((el) => gradients[el])
  buttons.map((el, i) => {
    document.querySelector(el).style.background = `linear-gradient(to right, ${finalGradients[i].colors.join(', ')})`
    document.querySelector(el).onclick = () => {
      document.querySelector('body').style.background = `linear-gradient(to right, ${finalGradients[i].colors.join(', ')})`
      localStorage.bg = JSON.stringify(finalGradients[i].colors)
    }
  })
}

renderGradients()

document.onkeydown = function getNewGradients(e) {
  if (e.code === 'Space') {
    renderGradients()
  }
}
