import { createContext, useReducer, useEffect, useState } from "react";
import Reducer from "../Reducers/reducer";

const AppContext = createContext();

const AppProvider = ({children})=>{

    // Initial State for useReducer Hook
    const initialState = {
        isLoading: true,
        query: '',
        nbPages: 0,
        page: 0,
        hits: []
    }

    // useReducer Hook
    const [state, dispatch] = useReducer(Reducer, initialState)

    const API = 'http://hn.algolia.com/api/v1/search?';

    // Fetching Data from Api
    const fetchApiData = async (url)=>{

        dispatch({
            type: 'SET_LOADING'
        })

        try{
            const res = await fetch(url);
            const data = await res.json();
            dispatch({
                type: 'GET_STORIES',
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages
                }
            })
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page])

    // Remove a post
    const removePost = (id)=>{
        dispatch({
            type: 'REMOVE_POST',
            payload: {
                id
            }
        })
    }

    // Search a post
    const searchPost = (searchQuery)=>{
        dispatch({
            type: 'SEARCH_QUERY',
            payload: searchQuery
        })
    }

    // Pagination
    const nextPage=()=>dispatch({type:'NEXT_PAGE'})
    const prevPage=()=>dispatch({type:'PREV_PAGE'})


// Function Returning Value
    return(
        <AppContext.Provider value={{...state, removePost, searchPost, nextPage, prevPage}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider };