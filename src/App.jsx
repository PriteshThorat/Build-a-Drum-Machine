import Button from "./components/Button"
import { useSelector } from "react-redux";

function App() {
  const audioName = useSelector(state => state.audio.audioName);
  const audioData = useSelector(state => state.audio.audioData);

  return (
    <div
      id="drum-machine"
      className="flex flex-row items-center justify-center min-h-screen bg-gray-800 text-white p-4 gap-2 border-4 border-white rounded-lg" >
      <div className="grid grid-cols-3 gap-2">
        {
          audioData.map(data => (
            <Button id={data.idName} keys={data.keyName} name={data.audioName} key={data.keyName} />
          ))
        }
      </div>
      <div
        id="display"
        className="mt-4 p-2 bg-gray-700 text-center text-lg rounded w-48 h-12 flex items-center justify-center" >
        {audioName}
      </div>
    </div>
  )
};

export default App
