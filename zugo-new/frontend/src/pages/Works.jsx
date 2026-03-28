import React, { useEffect, useState } from "react";
import "../styles/Works.css";

function Works() {

  const [works,setWorks] = useState([]);
  const [category,setCategory] = useState("Digital Marketing");

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


      {/* WORK GRID */}
      <div className="works-grid">

        {filteredWorks.map(work=>(
          <div className="work-card" key={work._id}>

            <img
              src={work.image}
              alt=""
            />

          </div>
        ))}

      </div>

    </div>
  );
}

export default Works;