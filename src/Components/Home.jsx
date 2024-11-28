import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {useSearchParams} from "react-router-dom";
import {useDispatch} from 'react-redux';
import{addToPastes, updateToPastes} from "../redux/PasteSlice"


const Home = () => {
    const [title, setTitle] = useState('');
    const [value , setValue] = useState('');
    const [searchParams , setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    // const pastes = useSelector((state) => state.paste.pastes);
    const dispatch = useDispatch();
    const createPaste = () => {
      const paste = {
        title: title,
        content: value,
        _id:
          pasteId ||
          Date.now().toString(36) + Math.random().toString(36).substring(2),
        createdAt: new Date().toISOString(),
      };
      if (pasteId) {
        // If pasteId is present, update the paste
        dispatch(updateToPastes(paste));
      } else {
        dispatch(addToPastes(paste));
      }
      // after creation or updation
      setTitle("");
      setValue("");
      // Remove the pasteId from the URL after creating/updating a paste
      setSearchParams({});
    };

    const resetPaste = () =>{
    // after reation or updation
    setTitle('');
    setValue('');
    setSearchParams({});
        //  navigate("/")
    };

     

  return (
    <div>

<div className='flex flex-row gap-7 place-content-between'>
     <input
      className='p-1 rounded-2xl mt-2 w-[66%] pl-4' 
      type="text" 
      placeholder='enter titel here'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
       
       <button  
       onClick={createPaste}
       className='p-2 rounded-2xl  mt-2'>
         {
           pasteId ? " Update My Paste" : "Create My paste"
         }
       </button>
     
    </div>
        <div>
          <textarea
          className=' rounded max-2xl mt-4 min-w-[500px]  p-4 '
          value={value}
          placeholder='content'
          onChange={(e) => setValue (e.target.value)}
          rows={20}
          />
        </div>
   </div>
  )
}

export default Home
