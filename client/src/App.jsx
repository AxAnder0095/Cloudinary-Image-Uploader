import useImages from "./hooks/useImages"
import './App.css'

function App() {
  const { uploadImage, uploadImageToDB, imageUrl } = useImages();

  return (
    <div className='App'>
      <input type="file" accept="image/*" onChange={(e) => uploadImage(e.target.files[0])} />
      {imageUrl ? <button onClick={() => uploadImageToDB(imageUrl)}>Save Image URL to DB</button> : <p>No image uploaded</p>}
    </div>
  )
}

export default App
