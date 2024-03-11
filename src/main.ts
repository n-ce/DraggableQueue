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

const len = colorQueue.length;
for (let i = 0; i < len; i++) {
  const li = document.createElement('li');
  li.style.backgroundColor = 'light' + colorQueue[i];
  inputQueue.appendChild(li);
}

Sortable.create(outputQueue, { delay: 10 });
//inputQueue.toggleAttribute('data-overlayscrollbars-initialize');
//OverlayScrollbars(inputQueue, {});


const q = (li: HTMLLIElement, d: number = 1) => setTimeout(
  () => {
    li.innerHTML = '';
    inputQueue.appendChild(li);

    if (outputQueue.hasChildNodes()) {
      const newli = <HTMLLIElement>outputQueue.firstElementChild;
      d++;
      (<HTMLDivElement>newli.lastElementChild).style.animation = `progress ${d * 10}s`;
      q(newli, d);
    }

  }, d * 1e4);


inputQueue.addEventListener('click', e => {
  const li = <HTMLLIElement>e.target;
  if (!li.matches('li')) return;
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  if (!outputQueue.hasChildNodes())
    div2.style.animation = 'progress 10s';
  q(li);
  li.append(div1, div2);
  outputQueue.appendChild(li);
});



