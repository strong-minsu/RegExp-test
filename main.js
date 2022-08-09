// let str = `
// 010-1234-5678
// dlalsnt5789@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://localhost:1234
// 동해물과_백두산이 마르고 닳도록
//`

//const regexp = new RegExp('you','gi')
// const regexp = /fox/gi
// console.log(regexp.test(str))
// str = str.replace(regexp, 'AAA')
// console.log(str)

// const regexp = /the/gi
// console.log(str.match(/the/gi))

// \ => Escape Character
// \(백슬래시) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자
// console.log(str.match(/\.$/gim))

// console.log(str.match(/h..p/g)) //http 잘 찾음( .-> 어떤한 것으로 인식)
// console.log(str.match(/fox|dog/g)) // 둘 다 찾음
// console.log(str.match(/https?/g)) //http, https 찾음

// console.log(str.match(/\b\w{2,3}\b/g)) // \w 숫자를 포함한 알파벳 \b \b구역을 나눠줌
// console.log(str.match(/[0-9]{1,}/g))
// console.log(str.match(/[가-힣]{1,}/g))

// console.log(str.match(/\w/g))
// console.log(str.match(/\bf\w{1,}/g)) // 소문자 f로 시작하는 모든 영단어를 찾음
// console.log(str.match(/\d{1,}/g)) //숫자 덩어리만
// console.log(str.match(/\s/g)) //모든 공백 부분 출력 " ", "\n"

// const h = `   hello world   ~!`
// console.log(h.replace(/\s/g, '')) // hellowolrd~! 출력

const str = `
010-1234-5678
dlalsnt5789@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
console.log(str.match(/.{1,}(?=\@)/g)) //앞 일치 패턴
console.log(str.match(/(?<=\@).{1,}/g)) //뒤 일치 패턴 