// ** React Imports
import { Fragment } from 'react'

// ** Contact App Component Imports
import Left from './Left';
import Right from './Right';

// ** Styles
import '@styles/react/apps/app-contact.scss'

const ContactApp = () => {

  return (
    <Fragment>
      <div className='contact'>
        <div className='contact-left'>
          <Left />
        </div>
        <div className='contact-right'>
          <Right />
        </div>
      </div>
    </Fragment>
  )
}

export default ContactApp;
