import { useState, useEffect } from 'react';

export default function useImages() {
    const [imageUrl, setImageUrl] = useState("");

    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append("image", file);

        const res = await fetch("http://localhost:5000/api/upload", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();
        console.log("Uploaded image URL:", data.imageUrl);
        setImageUrl(data.imageUrl);
    };


    const uploadImageToDB = async () => {
        const res = await fetch("http://localhost:5000/api/upload-db", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ imageUrl }),
        });

        const data = await res.json();
        console.log("Image URL saved to database:", data);
    };

    const testFetch = async () => {
        const res = await fetch("http://localhost:5000/api/message");
        const data = await res.json();
        console.log("Server message:", data.message);
    };

    useEffect(() => {
        testFetch();
    }, []);

    return {
        imageUrl,
        setImageUrl,
        uploadImage,
        uploadImageToDB,
    }
}