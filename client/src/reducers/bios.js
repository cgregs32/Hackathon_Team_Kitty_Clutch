const bios = (state = [], action) => {
  switch (action.type) {
    case 'ADD BIO':
      return action.bio
    default:
      return state
    }
}
export default bios
