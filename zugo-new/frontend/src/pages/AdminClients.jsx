import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AdminClients.css";

function AdminClients() {

  const [logo, setLogo] = useState(null);
  const [clients, setClients] = useState([]);

  // ✅ USE RENDER BACKEND ONLY
  const BASE_URL = "https://zugo-new-1-oavu.onrender.com";

  // fetch logos
  const fetchClients = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/clients`);
      setClients(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  // upload logo 
  const uploadLogo = async () => {

    if (!logo) return alert("Choose logo first");

    try {
      const formData = new FormData();
      formData.append("logo", logo);

      await axios.post(`${BASE_URL}/api/clients/add`, formData);

      alert("Logo Uploaded ✅");

      setLogo(null);
      fetchClients();

    } catch (err) {
      console.log(err);
      alert("Upload failed ❌");
    }
  };

  // delete logo
  const deleteLogo = async (id) => {

    if (!window.confirm("Delete this logo?")) return;

    try {
      await axios.delete(`${BASE_URL}/api/clients/${id}`);
      fetchClients();
    } catch (err) {
      console.log(err);
    }
  };

  return (

    <div className="admin-clients">

      <h2>Add Client Logo</h2>

      <div className="upload-section">

        <input
          type="file"
          onChange={(e)=>setLogo(e.target.files[0])}
        />

        <button onClick={uploadLogo}>
          Upload
        </button>

      </div>

      <h3>Uploaded Logos</h3>

      <div className="admin-logos">

        {clients.map((item)=>(

          <div key={item._id} className="logo-card">

            <img
              src={
                item.logo.startsWith("http")
                  ? item.logo
                  : `${BASE_URL}/uploads/${item.logo}`
              }
              alt="client"
            />

            <button
              className="delete-btn"
              onClick={()=>deleteLogo(item._id)}
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default AdminClients;