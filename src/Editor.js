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
    text: '<p class="ql-align-center"><strong>UNITED STATES DISTRICT COURT</strong></p><p class="ql-align-center">DISTRICT OF MASSACHUSETTS</p><p><span class="quill-variable" data-field-name="undefined" data-type="undefined">﻿<span contenteditable="false">Plaintiffs.name</span>﻿</span>,</p><p>Plaintiffs,</p><p>v.</p><p><span class="quill-variable" data-field-name="undefined" data-type="undefined">﻿<span contenteditable="false">Defendant.name</span>﻿</span>,</p><p>Defendant.</p><p><br></p><p class="ql-align-center"><strong>COMPLAINT AND DEMAND FOR JURY TRIAL</strong></p><p><br></p><div class="logical-block" data-condition="if" data-expression="Require a jury trial"><p class="ql-align-center"><strong>JURY TRIAL</strong></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p>The Plaintiffs request a jury trial;</p></div><p class="ql-align-center"><strong>THE PARTIES</strong></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><ol><li>Plaintiffs, John Doe (“John Doe”) and Jane Doe (“Jane Doe”), were at all relevant times herein residents and citizens of Bedford, Middlesex County, Massachusetts, with a street address of 555 Lynnfield St., Bedford MA 01730;</li><li>Defendant, Richard Roe Inc, was at all relevant times herein a New Hampshire corporation with a principal address of 1686 Flanders Road, Henniker NH 03242;</li><li>At all times relevant and material hereto, Defendant Richard Roe Inc was the owner and operator of a ski area in Henniker, New Hampshire, including the owner and operator of numerous ski lifts designed to carry passengers uphill on its property for recreational purposes;</li></ol><p class="ql-align-center"><strong>JURISDICTION AND VENUE</strong></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><ol><li>Plaintiffs John Doe and Jane Doe are residents of the Commonwealth of Massachusetts;</li><li>Defendants Richard Roe Inc is a corporation duly registered in the State of New Hampshire;</li><li>This Court has jurisdiction pursuant to U.S.C. sections 1332(a), 1367, and M.G.L. Chapter 223A;</li><li>Defendant Richard Roe Inc engages in continuous and systematic business activity and does otherwise transact and conduct business in Massachusetts and derives substantial revenue from business in Massachusetts such that the requirements from general and/or specific jurisdiction, together with the requisite minimum contacts, are satisfied;</li><li>The parties are citizens of different states;</li><li>The amount in controversy exceeds $75,000.00, exclusive of costs;</li><li>Venue in this District satisfies the requirements of 28 U.S.C., section 1391, in</li></ol><p>that the Defendant Richard Roe Inc is subject to personal jurisdiction because it transacts business in this District;</p><p class="ql-align-center"><strong>FACTUAL ALLEGATIONS</strong></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><ol><li>On or about March 18, 2019, the Plaintiff, John Doe and her spouse, Jane Doe, purchased tickets for skiing at the Defendant’s, Richard Roe Inc, premises;</li><li>On that date, the Plaintiffs boarded one of the chairlifts on the Defendant’s premises, operated by the Defendant, to ride up to the top of the ski slope;</li><li>During the ride up the chairlift, one of the Plaintiff’s (John Doe) skis detached and fell some distance to the ground;</li><li>Upon their approach to the lift termination platform, the Plaintiffs began waving their arms and yelling to attract the attention of the chairlift operator, who was standing at an observation window at the top of the lift;</li><li>Upon information and belief, the lift operator has a “kill” switch, which immediately stops the lift ascent;</li><li>Upon information and belief, the lift operator is within easy reach of the “kill” switch, which acts as a safety device for the lift;</li><li>The lift operator did not stop the lift as the Plaintiff reached the disembarkment platform;</li><li>The Plaintiff disembarked as required from the moving chairlift and due to her missing ski and the incline between the disembarkment platform and the ground, she immediately fell and slid down the incline;</li><li>Upon falling, the Plaintiff suffered such physical stress that she tore muscles and ligaments in her knees;</li><li>The Plaintiff suffered great physical pain and suffering during and after her fall;</li><li>The Plaintiff was unable to descend the mountain on her own, and had to be carried down the mountain on a sled;</li><li>Since the fall, the Plaintiff has had to undergo surgery to repair her knee, was in orthopedic supports for her legs, and has had great physical pain and emotional suffering and disruption to her life;</li><li>The Plaintiff was unable to perform her duties as a mother, as a household member, and as an employee for multiple months;</li></ol><p>25.&nbsp;The Plaintiff has residual injuries which are permanent in nature;</p><p><br></p><p class="ql-align-center"><strong>COUNT ONE NEGLIGENCE UNSAFE OPERATION</strong></p><p>The Plaintiff hereby restates, reincorporates and realleges each and every allegation contained in the above paragraphs as if fully stated herein.</p><p><br></p><p><br></p><ol><li>Richard Roe Inc and its employees, agents and/or servants, owed a duty to the Plaintiff to ensure that she disembarked from the chairlift correctly and safely.</li><li>Richard Roe Inc and its employees, agents and/or servants, owed a duty to the Plaintiff to take prompt corrective action to ensure her safety, including but not limited to, stopping the chair lift;</li><li>The chairlift operator is in control of the chairlift operation and has the authority and means to stop the chairlift when a passenger such as the Plaintiff experienced an unusual condition or occurrence such as approaching the disembarkment platform with only one ski;</li><li>The chairlift operator has an observation window from which to view the approaching passengers and monitor their approach to the disembarkment platform;</li><li>The Plaintiff and her spouse vigorously and frantically waived and yelled in an attempt to signal the lift operator that an unusual condition or occurrence was taking place with their approach;</li><li>The Defendant and its employees, agents and/or servants failed to ensure the Plaintiff’s safety by failing to stop the chairlift, and breached its duty of care, including a duty to operate the chairlift in a safe manner;</li><li>As a direct and proximate result of Richard Roe Inc’s conduct, the Plaintiff incurred great pain and suffering with injuries to both knees, including injury which is, more probable than not, permanent and/or chronic in nature;</li><li>The Plaintiff has also been required, as a direct and proximate result of the Defendant’s violations, to undergo medical treatment and care including, but not limited to, hospitalization, medical appointments, surgery, physical therapy, diagnostic imaging and injections; all of which have caused the Plaintiff to incur substantial expense, pain and suffering and loss of enjoyment of life;</li><li>The Plaintiff will continue to incur damages into the future including but not limited to, pain and suffering, loss of enjoyment of life, and future medical or therapeutic expenses;</li><li>All to the damage of the Plaintiff, as she says, in the maximum jurisdictional amount applicable to this Honorable Court;</li></ol><p>WHEREFORE, the Plaintiffs respectfully request that this Honorable Court issue</p><p>judgment against the Defendant for unsafe operation of its chairlift in an amount sufficient to fully and fairly compensate the Plaintiffs for their injuries and damages, for the costs of this action, for interest as allowed by law and for all other just and proper relief;</p><p class="ql-align-center"><strong>COUNT TWO</strong></p><p class="ql-align-center"><strong> NEGLIGENT TRAINING OR SUPERVISION</strong></p><p>36.&nbsp;The Plaintiff hereby restates, reincorporates and realleges each and every allegation contained the above paragraphs as if fully stated herein;</p><p><br></p><ol><li>The Defendant’s actions or inactions in the operation of the chairlift indicate a lack of care or a lack of adequate training or supervision of employees;</li><li>The Defendant knew or should have known, that if its employee was not adequately trained and/or supervised, then injury to the Plaintiff or others similarly situated, would occur more likely than not;</li><li>Defendant, Richard Roe Inc, owed a duty to the Plaintiff to properly and adequately train and supervise its chairlift operators;</li><li>Defendant Richard Roe Inc, breached its duty to the Plaintiff by failing to properly and adequately train employees in safe chairlift operations;</li><li>As a direct and proximate result of Richard Roe Inc’s conduct, the Plaintiff incurred great pain and suffering with injuries to both knees, including injury which is, more probable than not, permanent and/or chronic in nature;</li><li>The Plaintiff has also been required, as a direct and proximate result of the Defendant’s violations, to undergo medical treatment and care including, but not limited to, hospitalization, medical appointments, surgery, physical therapy, diagnostic imaging and injections; all of which have caused the Plaintiff to incur substantial expense, pain and suffering and loss of enjoyment of life;</li><li>The Plaintiff will continue to incur damages into the future including but not limited to, pain and suffering, loss of enjoyment of life, and future medical or therapeutic expenses;</li><li>All to the damage of the Plaintiff, as she says, in the maximum jurisdictional amount applicable to this Honorable Court;</li></ol><p><br></p><p>WHEREFORE, the Plaintiffs respectfully request that this Honorable Court issue judgment against the Defendant in an amount sufficient to fully and fairly compensate the Plaintiffs for their injuries and damages, for the costs of this action, for interest as allowed by law and for all other just and proper relief;</p><p>Respectfully Submitted,</p><p>Plaintiffs by counsel;</p><p><br></p><p><br></p><p class="ql-align-center"><br></p>',
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
//       el.innerText =
// `{{#${condition} ${expression}}}${el.innerText}{{/${condition}}}`
      
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
