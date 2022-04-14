const str = `
010-1234-5678
alf6292@naver.com
https://www.naver.com/
The FrontEnd Developer.
abbbcccddd
`

//const regexp = new RegExp('the', 'gi')
const regexp = /FrontEnd/gi

// 일치 문자의 배열 반환
//console.log(str.match(regexp))

// 일치 여부 반환
//console.log(regexp.test(str))

// 일치하는 문자를 대체
//console.log(str.replace(regexp, 'AAA'))

// 여러줄 일치 -m(multi line)

//console.log(str.match(/\b\w{2,3}\b/g))

// 앞쪽 일치
console.log(str.match(/.{1,}(?=@)/g))

// 뒤쪽 일치
console.log(str.match(/(?<=@).{1,}/g))