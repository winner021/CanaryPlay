const initialState={
    data:null,
}

export default(state=initialState,action)=>{
   switch (action.type) {
       case "searchedsongs":
           return {...state,data:action.payload}
   
       default:
           return state;
   }
}