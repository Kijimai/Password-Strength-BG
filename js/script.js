const bg = document.getElementById('background')
const pw = document.getElementById('password')

pw.addEventListener('input', function(e) {
  const input = e.target.value
  const pwLength = input.length
  const blurValue = (20 - pwLength * 2)
  background.style.filter = `blur(${blurValue}px)`
})