import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AdminClients.css";

function AdminClients() {

  const [logo, setLogo] = useState(null);
  const [clients, setClients] = useState([]);

  // fetch logos
  const fetchClients = async () => {
    const res = await axios.get("http://localhost:5000/api/clients");
    setClients(res.data);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  // upload logo
  const uploadLogo = async () => {

    if (!logo) return alert("Choose logo first");

    const formData = new FormData();
    formData.append("logo", logo);

    await axios.post(
      "http://localhost:5000/api/clients/add",
      formData
    );

    alert("Logo Uploaded");

    setLogo(null);
    fetchClients();
  };

  // delete logo
  const deleteLogo = async (id) => {

    if (!window.confirm("Delete this logo?")) return;

    await axios.delete(
      `http://localhost:5000/api/clients/${id}`
    );

    fetchClients();
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
              src={`http://localhost:5000/uploads/${item.logo}`}
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