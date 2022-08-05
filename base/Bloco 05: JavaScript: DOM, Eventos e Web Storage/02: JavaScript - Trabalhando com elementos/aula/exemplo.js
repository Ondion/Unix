function createCustomElement(classes) {
  let element = document.createElement('div');
  element.className = classes.join(' ');
  return element;
}

function addElementAsChild(parent, element) {
  parent.appendChild(element);
}

function countChildNodes(parent) {
  let count = 0;
  for (
    let child = parent.firstChild;
    child != null;
    child = child.nextSibling
  ) {
    count++;
  }
  return count;
}

let features = [
  {
    color: 'yellow',
    shape: 'circle',
    size: 'small',
  },
  {
    color: 'red',
    shape: 'square',
    size: 'small',
  },
  {
    color: 'green',
    shape: 'circle',
    size: 'small',
  },
  {
    color: 'yellow',
    shape: 'circle',
    size: 'small',
  },
  {
    color: 'red',
    shape: 'square',
    size: 'small',
  },
  {
    color: 'green',
    shape: 'circle',
    size: 'small',
  },
];

let first = document.querySelector('#first');

for (let feature of features) {
  let element = createCustomElement([
    feature.color,
    feature.shape,
    feature.size,
  ]);
  addElementAsChild(first, element);
}
