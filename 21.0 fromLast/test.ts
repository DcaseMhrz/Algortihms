import fromLast from '.';
import { LinkedList } from './LinkedList';


test('fromLast is a function', () => {
  expect(typeof fromLast).toEqual('function');
});

test('fromLast returns the node n elements from the end', () => {
  const l = new LinkedList()

  l.insertLast('a');
  l.insertLast('b');
  l.insertLast('c');
  l.insertLast('d');
  l.insertLast('e');

  expect(fromLast(l, 3).data).toEqual('b');
});
