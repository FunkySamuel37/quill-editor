import { Quill } from 'react-quill';

const Embed = Quill.import('blots/embed');

class QuillVariable extends Embed {
  static blotName = 'variable';
  static className = 'quill-variable';
  static tagName = 'span';

  static create(context) {
    // console.log(context)
    const {value, fieldName, type} = context;
    let node = super.create();
    node.innerText = `${context.value}`;
    node.dataset.fieldName = fieldName;
    node.dataset.type = type;
    return node;
  }

  static value(node) {
    const value = node.innerText
    return {
      value: value || null,
      fieldName: node.dataset.fieldName || value,
      type: node.dataset.type || 'string',
    }
  }
}

// QuillVariable.blotName = 'variable'
// QuillVariable.className = 'quill-variable'
// QuillVariable.tagName = 'span'

// Quill.register({'formats/placeholder': Placeholder})

export default QuillVariable
// Quill.register('modules/variable', )