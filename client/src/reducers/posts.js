const posts = (state = [], action) => {
  switch (action.type) {
    case 'POSTS':
      return action.posts;
    case 'ADD_POST':
      return [action.post, ...state];
    case 'UPDATE_POST':
      return state.map( p => {
        if (p.id === action.post.id)
          return action.post;
        return p;
      });
    case 'DELETE_POST':
      return state.filter( p => p.id !== action.id );
    default:
      return state;
  }
}
  export default posts;


  // const initialState = {
  //   posts: [],
  //   post: [],
  // }
  // const posts = (state = initialState, action) => {
  //   switch (action.type) {
  //     case 'POSTS':
  //       return {...state, posts: action.posts};
  //     case 'GET_POST':
  //     debugger
  //       return {...state, post: action.post};
  //     case 'ADD_POST':
  //       return [action.post, ...state];
  //     case 'UPDATE_POST':
  //       return state.map( p => {
  //         if (p.id === action.post.id)
  //           return action.post;
  //         return p;
  //       });
  //     case 'DELETE_POST':
  //       return state.filter( p => p.id !== action.id );
  //     default:
  //       return state;
  //   }
  // }
  // export default posts;  
