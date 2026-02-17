export const uploadImage = async (req, res) => {
  res.json({imageUrl: req.file.path, publicId: req.file.filename});
}

export const uploadDB = async (req, res) => {
  // Here you would save the image URL to MongoDB
  const db = req.app.locals.db;
  const data = { ...req.body }

  console.log("Data received for DB:", data);

  // try{
  //   const result = await db.collection("images").insertOne(data);
  //   res.json({success: true, result: result , message: "Image URL saved to database" });  
  // }catch(error){
  //   res.json({success: false, error: "Failed to save image URL to database" });
  // }
  ;
}

export const getMessage = (req, res) => {
  res.json({ message: "Hello from the server! I am Alex" });
}