const Reducer = (state, action)=>{

    switch(action.type){
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_STORIES':
            return {
                ...state,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
                isLoading: false
            }
        case 'REMOVE_POST':
            return {
                ...state,
                hits: state.hits.filter((currentId)=> currentId.objectID !== action.payload.id )
            }
        case 'SEARCH_QUERY':
            return {
                ...state,
                query: action.payload
            }
        case 'NEXT_PAGE':
            if(state.page+1 >= state.nbPages){
                return {
                    ...state,
                    page: 0
                }
            }else{
                return {
                    ...state,
                    page: state.page + 1
                }
            }
        case 'PREV_PAGE':
            if(state.page-1 <= 0){
                return {
                    ...state,
                    page: 0
                }
            }else{
                return {
                    ...state,
                    page: state.page - 1
                }
            }
    }

    return state;
}

export default Reducer;