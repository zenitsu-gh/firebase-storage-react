import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import storage from "./utils/firebase";

const App = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = () => {
    const storageRef = ref(storage, "video/" + file?.name + Date.now().toLocaleString());
    const uploadTask = uploadBytesResumable(storageRef, file!);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  return (
    <div className="app">
      <div className="upload">
        <input
          type="file"
          name="image"
          onChange={(e) => setFile(e.target.files && e.target.files[0])}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default App;
