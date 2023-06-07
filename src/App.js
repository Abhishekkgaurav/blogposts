import {Header} from './components/Header';
import {Blogs} from './components/Blogs';
import './App.css';
import { useContext, useEffect } from 'react';
import { Pagination } from './components/Pagination';
import { AppContext } from './context/AppContext';
export default function App() {
  const {fetchPosts}=useContext(AppContext);
  useEffect(
    ()=>{
      fetchPosts();
    },[]
  )
  return (
    <div className=''>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}
