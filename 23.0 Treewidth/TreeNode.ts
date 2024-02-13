

export default class TreeNode {

  data: any
  children: TreeNode[] | any
  constructor(data: any) {
    this.data = data
    this.children = []
  }
  add(data: any) {
    this.children.push(new TreeNode(data))
  }
}