export default function setHelper(className, text) {
  switch (className) {
    case 'v1': {
      document.querySelector('.v1 p').textContent = text
      return
    }
    case 'v2': {
      document.querySelector('.v2 p').textContent = text
      return
    }
    case 'operand': {
      document.querySelector('.operand p').textContent = text
    }
    // no default
  }
}
