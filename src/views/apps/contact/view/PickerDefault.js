import { Fragment } from 'react'

import Flatpickr from 'react-flatpickr'

import '@styles/react/libs/flatpickr/flatpickr.scss'

const PickerDefault = (props) => {
  return (
    <Fragment>
      <Flatpickr className='form-control' id='default-picker' {...props} />
    </Fragment>
  )
}

export default PickerDefault
