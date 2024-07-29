import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {

//room useState
    const [roomId, setRoomId] =useState("");
// btn click room page
 const navigate= useNavigate();
   const handleClick=()=>{
     if(roomId){
        navigate(`/room/${roomId}`)
     }
   }

    return (
        <div className="bg-[#22254b] flex justify-center items-center flex-col w-full h-[100vh]">
            <div className="">
                <h2 className="text-4xl mb-4 font-bold text-white">Hey! Welcome</h2>
                <input type="text"
                 onChange={e=>setRoomId(e.target.value)}
                 className="border-2 w-full border-white rounded-lg focus:none mb-4 px-4 py-3 text-xl"
                 placeholder="Enter Room ID" />
                <button onClick={handleClick} className="bg-blue-600 w-full rounded-lg block px-5 py-3 text-xl text-white">Join Room</button>
            </div>
        </div>
    );
};

export default Home;