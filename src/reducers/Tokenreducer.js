const Initaialstate={
    data:null,
}

export default(state=Initaialstate,action)=>{
   
    switch (action.type) {
        case "token":
        return{...state,data:action.payload}
         default:
            return state;
    }
    }