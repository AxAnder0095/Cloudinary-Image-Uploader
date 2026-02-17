import { useState, useEffect } from 'react'


function App() {

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("http://localhost:5000/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log("Uploaded image URL:", data.imageUrl);
    return data.imageUrl;
  };



  const testFetch = async () => {
    const res = await fetch("http://localhost:5000/api/message");
    const data = await res.json();
    console.log("Server message:", data.message);
  };

  useEffect(() => {
    testFetch();
  }, []);

  return (
    <div>
      <input type="file" accept="image/*" onChange={(e) => uploadImage(e.target.files[0])} />
    </div>
  )
}

export default App
