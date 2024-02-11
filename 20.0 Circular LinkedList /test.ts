import circular from ".";
const L = require('./linkedlist');
const List = L.LinkedList;
const Node0 = L.Node0;

test('circular', () => {
  expect(typeof circular).toEqual('function');
});

test('circular detects circular linked lists', () => {
  const l = new List();
  const a = new Node0('a');
  const b = new Node0('b');
  const c = new Node0('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;

  expect(circular(l)).toEqual(true);
});

test('circular detects circular linked lists linked at the head', () => {
  const l = new List();
  const a = new Node0('a');
  const b = new Node0('b');
  const c = new Node0('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = a;

  expect(circular(l)).toEqual(true);
});

test('circular detects non-circular linked lists', () => {
  const l = new List();
  const a = new Node0('a');
  const b = new Node0('b');
  const c = new Node0('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = null;

  expect(circular(l)).toEqual(false);
});
