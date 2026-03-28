import React, { useState, useEffect } from "react";
import "../styles/WorksAdmin.css";

function WorksAdmin() {

  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [works, setWorks] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);

  // LOAD WORKS
  const loadWorks = () => {
    fetch("https://zugo-new-1-oavu.onrender.com/api/works")
      .then(res => res.json())
      .then(data => setWorks(data))
      .catch(err => console.error(err));
  };

  // ✅ IMPORTANT (ADD THIS)
  useEffect(() => {
    loadWorks();
  }, []);

  // ADD WORK
  const submitWork = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("category", category);

    await fetch("https://zugo-new-1-oavu.onrender.com/api/works", {
      method: "POST",
      body: formData
    });

    loadWorks();
  };

  // DELETE WORK
  const deleteWork = async (id) => {
    await fetch(`https://zugo-new-1-oavu.onrender.com/api/works/${id}`, {
      method: "DELETE"
    });

    loadWorks(); // refresh after delete
  };

  return (
  <div className="works-container">

    <h2>Works Admin Panel</h2>

    <form onSubmit={submitWork} style={{ marginBottom: "60px", }}>
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option>Select Category</option>
        <option>Digital Marketing</option>
        <option>Real Estate Marketing</option>
        <option>Website Design</option>
        <option>Graphics Design</option>
      </select>

      <button type="submit">Upload Work</button>
    </form>

    <div className="works-grid">

      {works.map(work => {

        
          const isVideo =
  work.image.includes(".mp4") ||
  work.image.includes(".webm");

        return (
          <div key={work._id} className="work-card">

  {isVideo ? (
  <video
    src={work.image}
    className="work-media"
    onClick={() => setSelectedMedia({ type: "video", url: work.image })}
  />
) : (
  <img
    src={work.image}
    alt=""
    className="work-media"
    onClick={() => setSelectedMedia({ type: "image", url: work.image })}
  />
)}

  <button
    onClick={() => deleteWork(work._id)}
    className="delete-btn"
  >
    Delete
  </button>

</div>
        );
      })}

    </div>

    {selectedMedia && (
  <div className="modal" onClick={() => setSelectedMedia(null)}>

    {selectedMedia.type === "video" ? (
      <video
        src={selectedMedia.url}
        controls
        autoPlay
        className="modal-content"
      />
    ) : (
      <img
        src={selectedMedia.url}
        alt=""
        className="modal-content"
      />
    )}

  </div>
)}
  </div>
)};

export default WorksAdmin;