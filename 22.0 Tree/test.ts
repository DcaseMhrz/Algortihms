import { TreeNode, Tree } from '.'

describe('TreeNode', () => {
  test('TreeNode is a constructor', () => {
    expect(typeof TreeNode.prototype.constructor).toEqual('function');
  });

  test('TreeNode has a data and children properties', () => {
    const n = new TreeNode('a');
    expect(n.data).toEqual('a');
    expect(n.children.length).toEqual(0);
  });

  test('TreeNode can add children', () => {
    const n = new TreeNode('a');
    n.add('b');
    expect(n.children.length).toEqual(1);
    expect(n.children[0].children).toEqual([]);
  });

  test('TreeNode can remove children', () => {
    const n = new TreeNode('a');
    n.add('b');
    expect(n.children.length).toEqual(1);
    n.remove('b');
    expect(n.children.length).toEqual(0);
  });
});

describe('Tree', () => {
  test('starts empty', () => {
    const t = new Tree();
    expect(t.root).toEqual(null);
  });

  test('Can traverse bf', () => {
    const letters: string[] = [];
    const t = new Tree();
    t.root = new TreeNode('a');
    t.root.add('b');
    t.root.add('c');
    t.root.children[0].add('d');

    t.traverseBF((t: TreeNode) => {
      letters.push(t.data);
    });

    expect(letters).toEqual(['a', 'b', 'c', 'd']);
  });

  test('Can traverse DF', () => {
    const letters: string[] = [];
    const t = new Tree();
    t.root = new TreeNode('a');
    t.root.add('b');
    t.root.add('d');
    t.root.children[0].add('c');

    t.traverseDF((t: TreeNode) => {
      letters.push(t.data);
    });

    expect(letters).toEqual(['a', 'b', 'c', 'd']);
  });
});
