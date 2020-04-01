import React from 'react'
import Obfuscate from "react-obfuscate";

const Terminal = props => (
  <div className='terminal'>
    <div className='header'>
      <span className="mac-icon exit" />
      <span className="mac-icon minimize" />
      <span className="mac-icon maximize" />
    </div>
    <div className='window '>
      <div className="statement">
        <div className='statement-input is-family-code'>> Pedro.currentLocation</div>
        <div className='statement-output is-family-code'>"Luzern, Switzerland"</div>
      </div>
      <div className="statement">
        <div className='statement-input is-family-code'>> Pedro.contactInfo</div>
        <div className='statement-output is-family-code'>
          ["<Obfuscate email='me@psousa.dev' className='has-text-info' />,
            "<a href='https://linkedin.com/in/pedrosousa13' className='has-text-info' target='_blank' rel='noopener noreferrer'>LinkedIn</a>",
            "<a href='https://github.com/pedrosousa13' className='has-text-info' target='_blank' rel='noopener noreferrer'>Github</a>"]
        </div>
      </div>
      <div className="statement">
        <div className='statement-input is-family-code'>> Pedro.interests</div>
        <div className='statement-output is-family-code'>["dogs", "cooking", "hiking", "good coffee", "gaming"]</div>
      </div>
      <div className="statement">
        <div className='statement-input is-family-code'>> Pedro.skills</div>
        <div className='statement-output is-family-code'>["php", "mysql", "react", "typescript", "docker", "git"]</div>
      </div>
      <div className="statement">
        <div className='statement-input'>>&nbsp;&nbsp;<span className='prompt-animation'></span></div>
      </div>
    </div>
  </div>
)

export default Terminal
