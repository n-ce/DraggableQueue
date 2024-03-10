import './style.css';
import Sortable from 'sortablejs';
//import { OverlayScrollbars } from 'overlayscrollbars';

if (import.meta.env.DEV)
  await import('eruda').then(eruda => eruda.default.init());

const inputQueue = <HTMLUListElement>document.getElementById('inputQueue');
const outputQueue = <HTMLUListElement>document.getElementById('outputQueue');
const colorQueue = [
  'blue',
  'pink',
  'green',
  'coral',
  'salmon',
  'yellow',
  'skyblue',
  'seagreen',
  'steelblue',
  'slategray',
  'goldenrodyellow'
];

Sortable.create(outputQueue, { delay: 10 });
//inputQueue.toggleAttribute('data-overlayscrollbars-initialize');
//OverlayScrollbars(inputQueue, {});

inputQueue.addEventListener('click', e => {
  const el = <HTMLLIElement>e.target;
  if (el.matches('li'))
    outputQueue.appendChild(el);
});

setInterval(() => {
  if (outputQueue.childElementCount)
    inputQueue.appendChild(<HTMLLIElement>outputQueue.firstElementChild);
}, 1e4);


const len = colorQueue.length;
for (let i = 0; i < len; i++) {
  const li = document.createElement('li');
  li.style.backgroundColor = 'light' + colorQueue[i];
  li.textContent = i.toString();
  inputQueue.appendChild(li);

  if (i == len) {

  }
}
