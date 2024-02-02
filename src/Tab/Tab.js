import React from 'react'
import "../App.css"
function Tab() {
  return (
    <div className='a'>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane"  style={{width:"200px"}}>Find Care
    
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane"  style={{width:"200px"}}>Find a Job</button>
  </li>
</ul>
    </div>
  )
}

export default Tab