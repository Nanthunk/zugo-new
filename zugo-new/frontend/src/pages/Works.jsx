import React, { useEffect, useState } from "react";
import "../styles/Works.css";

function Works() {

  const [works,setWorks] = useState([]);
  const [category,setCategory] = useState("Digital Marketing");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const categories = [
    "Digital Marketing",
    "Real Estate Marketing",
    "Website Design",
    "Graphics Design"
    ];

  // LOAD WORKS
  useEffect(() => {

    fetch("https://zugo-new-1-oavu.onrender.com/api/works")
    .then(res => {
      if(!res.ok){
        throw new Error("API error");
      }
      return res.json();
    })
    .then(data => setWorks(data))
    .catch(err => console.error(err));

  }, []);


  // FILTER WORKS
  const filteredWorks = works.filter(
    item => item.category === category
  );


  return (

    <div className="works-page">

      <h1 className="works-title">Our Works</h1>

      {/* CATEGORY TABS */}
      <div className="works-tabs">

        {categories.map(cat=>(
          <button
            key={cat}
            className={`tab-btn ${category===cat?"active":""}`}
            onClick={()=>setCategory(cat)}
          >
            {cat}
          </button>
        ))}

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


      {/* WORK GRID */}
      <div className="works-grid">

        {filteredWorks.map(work=>(
          <div className="work-card" key={work._id}>

            {work.image.includes("/video/") ? (
  <video
  width="250"
  muted
  onClick={() =>
    setSelectedMedia({
      url: work.image,
      type: "video"
    })
  }
>
  <source src={work.image} type="video/mp4" />
</video>
) : (
  <img src={work.image} alt="" />
)}

            

          </div>
        ))}

      </div>

    </div>
  );
}

export default Works;