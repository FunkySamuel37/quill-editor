import { Quill } from 'react-quill';

let BlockEmbed = Quill.import('blots/block/embed');

class QuillLogicalBlock extends BlockEmbed {
  static blotName = 'logical-block'
  static tagName = 'div'
  static className = 'logical-block'

  static create(value) {
    console.log('logicalBlock:', value)
    const {condition, expression, content} = value
    let node = super.create(value)
    // node.className
    // node.textContent = value
    node.dataset.condition = condition
    node.dataset.expression = expression
    node.innerHTML = content
    return node
  }


  static value(node) {
    console.dir(node)
    const {condition, expression} = node.dataset
    let content = node.innerHTML
    // if (!content) {
    //   content = innerText
    // }
    return {condition, expression, content}
    
  }
}


export default QuillLogicalBlock