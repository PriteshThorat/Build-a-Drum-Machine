import { useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { update } from "../store/audioSlice";

const Button = ({id, keys, name}) => {
    const dispatch = useDispatch();

    const audioRef = useRef(null);

    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (keys === e.key.toUpperCase()) {
                audioRef.current.play();
                
                dispatch(update(name));
            }
        });
      }, []);

    const eventHandler = () => {
        audioRef.current.play();

        dispatch(update(name));
    };

    return (
        <div>
            <button 
            onClick={eventHandler}
            className="drum-pad w-20 h-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline active:bg-blue-800 transition duration-150 ease-in-out" 
            id={id}>
                <audio 
                className="clip"
                id={keys}
                type="audio/mp3"
                src={`audio/${name}.mp3`}
                ref={audioRef}></audio>
                {keys}
            </button>
        </div>
    )
};

export default Button;