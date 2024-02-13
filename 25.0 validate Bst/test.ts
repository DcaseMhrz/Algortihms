import BstNode from './BstNode'
import validate from '.'

test('Validate recognizes a valid BST', () => {
  const n = new BstNode(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);

  expect(validate(n)).toEqual(true);
});

test('Validate recognizes an invalid BST', () => {
  const n = new BstNode(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);
  n.left.left.right = new BstNode(999);

  expect(validate(n)).toEqual(false);
});
