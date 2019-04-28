import React, {Component} from 'react';
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.core.css'
import 'react-quill/dist/quill.bubble.css'
import './Editor.css'
import QuillVariable from './QuillVariable';
import QuillLogicalBlock from './QuillLogicalBlock';

Quill.register({'formats/variable': QuillVariable})
Quill.register({'formats/logical-block': QuillLogicalBlock})

class Editor extends Component {

  state = {
    text: '<p class="ql-align-center"><span class="ql-size-huge">民事起诉状</span></p><p><span class="ql-size-large">&nbsp;</span></p><p>原告：<span class="quill-variable" data-field-name="原告.姓名" data-type="string"><span contenteditable="false">原告.姓名</span></span>，<span class="quill-variable" data-field-name="原告.生日" data-type="string"><span contenteditable="false">原告.生日</span></span>，<span class="quill-variable" data-field-name="原告.民族" data-type="string"><span contenteditable="false">原告.民族</span></span>，<span class="quill-variable" data-field-name="原告.工作单位和职务或职业" data-type="string"><span contenteditable="false">原告.工作单位和职务或职业</span></span>，住<span class="quill-variable" data-field-name="原告.住址" data-type="string"><span contenteditable="false">原告.住址</span></span>。联系方式：<span class="quill-variable" data-field-name="原告.联系方式" data-type="string"><span contenteditable="false">原告.联系方式</span></span>。</p><div class="logical-block" data-condition="if" data-expression="expression"><div class="logical-content">法定代表人/主要负责人：<span class="quill-variable"><span contenteditable="false">法定代表人.姓名</span></span>，<span class="quill-variable"><span contenteditable="false">法定代表人.职务</span></span>(写明职务)，联系方式：<span class="quill-variable"><span contenteditable="false">法定代表人.联系方式</span></span>。</div></div><p>委托诉讼代理人：×××，……。</p><p>被告：×××，……。</p><p>……</p><p>(以上写明当事人和其他诉讼参加人的姓名或者名称等基本信息)</p><p>诉讼请求：</p><p>……</p><p>事实和理由：</p><p>……</p><p>证据和证据来源，证人姓名和住所：</p><p>……</p><p>此致</p><p>××××人民法院</p><p>&nbsp;</p><p>附：本起诉状副本×份</p><p>&nbsp;</p><p class="ql-align-right">起诉人(公章和签名)</p><p class="ql-align-right">××××年××月××日</p><p class="ql-align-right"><br></p>',
    toolbar: false,
  }

  handleChange = (value) => {
    // console.log(value)
    this.setState({text: value})
  }

  handleInsertVar = () => {
    const editor = this.quillRef.getEditor();
    const range = editor.getSelection()
    if (range.length) {
      editor.deleteText(range.index, range.length)
    }
    const varname = prompt("Select Variable Name", "variable");
    editor.insertEmbed(range.index, 'variable', {value: varname})
  }

  handleWrapCondition = (...args) => {
    const editor = this.quillRef.getEditor();
    const format = editor.getFormat()
    if (format['logical-block']) {
      const range = editor.getSelection()
      editor.removeFormat(range.index, range.length)
    } else {
      const selection = editor.getSelection();
      const selectedContent = editor.getContents(selection.index, selection.length);
      const condition = prompt("Select Condiction Name", "if")
      const expression = prompt("Type your expression", "expression")
      var tempContainer = document.createElement('div')
      var tempQuill = new Quill(tempContainer);
      tempQuill.setContents(selectedContent);
      editor.format('logical-block', {condition, expression, content:tempContainer.querySelector('.ql-editor').innerHTML})
    }

  }

  outputHandlebars = (htmlstring) => {
    const div = document.createElement('div')
    div.innerHTML = htmlstring
    const varElems = div.querySelectorAll('.quill-variable')
    for (let i = 0; i < varElems.length; i++) {
      const el = varElems[i];
      el.innerText = `{{${el.innerText}}}`
    }
    const logicalBlock = div.querySelectorAll('.logical-block');
    for (let i = 0; i < logicalBlock.length; i++) {
      const el = logicalBlock[i];
      const {condition, expression} = el.dataset;
      console.log(condition, expression)
      el.innerText =
`{{#${condition} ${expression}}}${el.innerText}{{/${condition}}}`
      
    }
    return JSON.stringify(div.innerHTML).replace(/\uFEFF/g, '')
  }

  generateQuillOption = () => {
    if (!this.quillRef) {
      return {};
    }
    const quill = this.quillRef.getEditor()
    const modulesOptions = {
      toolbar: [
        [{size: [ 'small', false, 'large', 'huge' ]}],
        ['bold', 'italic'],
        ['link', 'image'], 
        [{align: ['right', 'center', 'justify']}],
        ['blockquote']
      ],
    };

    return modulesOptions;
  }

  render() {

    const modulesOptions = this.generateQuillOption()
    const handlebarsText = this.outputHandlebars(this.state.text)
    return (
      <div>
        <div className="action-group">
          <button onClick={this.handleInsertVar}>insert variable</button>
          <button onClick={this.handleWrapCondition}>wrap condition</button>
        </div>
        <ReactQuill
          ref={(el) => this.quillRef = el}
          defaultValue={this.state.text}
          onChange={this.handleChange}
          theme={'snow'}
          modules={modulesOptions}
        />
        <div className="quill-output">{this.state.text}</div>
        <div className="quill-output">{handlebarsText}</div>
      </div>
    );
  }
}

export default Editor;
