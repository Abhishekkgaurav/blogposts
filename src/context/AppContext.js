import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
//context create
export const AppContext= createContext();

export default function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalpages,setTotalpages]=useState(null);

    //filling values
    async function fetchPosts(page=1){
        const url=`${baseUrl}?page=${page}`;
        try{
            setLoading(true);
            const result=await fetch(url);
            const data=await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalpages(data.totalPages);
            
        }
        catch(error){
            setLoading(true);
            console.log(error);

        }
        setLoading(false);
        
    }
    function handlePageChange(page){
        fetchPosts(page);

    }

    //Context provide
    const value={
        loading,setLoading,
        posts,setPosts,
        page,setPage,
        totalpages,setTotalpages,
        fetchPosts,
        handlePageChange
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}