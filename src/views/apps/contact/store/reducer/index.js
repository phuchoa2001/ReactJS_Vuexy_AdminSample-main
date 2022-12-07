
import { FakeDBContact } from "../../@fake-db";

// ** Initial State
const initialState = {
  contacts: [...FakeDBContact],
  filter: {
    name: "",
    enterprise: "",
    position: "",
    rate: null,
    managementAccount: "",
    dateCreated: null,
    lastUpdate: null,
    listOfCustomers: ""

  },
  contact: {}
}

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VALUE_FILTER':
      // ** Set Value Filter
      const { obj } = action;
      return {
        ...state,
        filter: { ...state.filter, [obj.name]: obj.value }
      }
    default:
      return state
  }
}

export default ContactReducer;
