import axios from 'axios'
import {setHeaders} from './headers'

export const addBio = (bio) => {
  return(dispatch) => {
    axios.post('/api/bio', bio)
      .then( res => {
        dispatch(setHeaders(res.headers));
        dispatch({ type: 'ADD BIO', bio: res.data })
      })
  }
}
export const deletebio = (id) => {
  return(dispatch) => {
    axios.delete(`/api/bios/${id}`)
      .then(res => {
        dispatch(setHeaders(res.headers))
        dispatch({type: 'DELETE bio', bio: res.data})
      })
  }
}
