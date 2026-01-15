import { useReducer } from "react"

const ACTIONS = {
  START: 'start',
  SUCCESS: 'success',
  ERROR: 'error'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.START:
      return { ...state, loading: true }
    case ACTIONS.SUCCESS:
      return { loading: false, formacoes: action.payload, error: null }
    case ACTIONS.ERROR:
      return { loading: false, formacoes: [], error: action.payload }
    default:
      return state
  }
}

export default function SkillsPage() {
  const [state, dispatch] = useReducer(reducer,  {
    loading: true,
    certificados: [],
    error: null
  })
  
  return (
    <>

    </>
  )
}