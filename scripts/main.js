// let test = document.createElement('h1');
// console.log(test);
let body = document.body;
// body.appendChild(test);
// let text = document.createTextNode('test 2');
// test.appendChild(text);

let roadlines = document.createElement('div');
// roadlines.setAttribute('class', 'test');
for (x = 0; x < 5; x++) {
    let roadlines = document.createElement('div');
    roadlines.setAttribute('id', 'test');
    roadlines.y = x * 150;
    roadlines.style.top = roadlines.y + 'px';
    body.appendChild(roadlines);
}
