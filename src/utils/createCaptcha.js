export default function(num = 6, letters = 'QWERTYUIOPLKJHGFDSAZXCVBNM1234567890') {
  let tpl = ''
  let captcha = []

  try {
    captcha = [...Array(num)].map(() => letters[Math.floor(Math.random() * letters.length)])
    //function getRandomInt(max) {
    //return Math.floor(Math.random() * Math.floor(max));
    //}
  } catch (e) {
    console.log("error generate captch");
  }

  captcha.forEach(item => {
    tpl += `<span class="flex1 hcenter">${item}</span>`
  })

  captcha = captcha.join('')

  return {
    tpl,
    captcha
  }
}
