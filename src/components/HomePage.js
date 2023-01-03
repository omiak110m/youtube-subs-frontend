import React, { useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [subs, setSubs] = useState([]);
  const [names, setNames] = useState([]);
  const [ids, setIds] = useState([]);
  const [id, setId] = useState([]);

  // fetch multiple users;
  const fetchDataSubs = async () => {
    let { data } = await axios.get("http://localhost:3000/subscribers");
    setSubs(data);
  };

  // fetch multiple users;
  const fetchDataNames = async () => {
    let { data } = await axios.get("http://localhost:3000/subscribers/names");
    setNames(data);
  };

  // fetch single user;
  const fetchDataIds = async () => {
    if (id.length > 0) {
      await axios
        .get(`http://localhost:3000/subscribers/${id}`)
        .then(({ data }) => setIds(data))
        .catch((err) => alert("404! data not found"));
    } else {
      alert("Please Enter Id and Search");
    }
  };

  const showDataSub = () => {
    fetchDataSubs();
  };

  const showDataNames = () => {
    fetchDataNames();
  };

  const showDataIds = () => {
    fetchDataIds();
  };

  return (
    <div className="container">
      <div className="container mt-5">
        <button type="button" className="btn btn-primary" onClick={showDataSub}>
          All Subscribers Data
        </button>
        {subs.map((item) => (
          <div
            className="card-body bg-dark "
            style={{ width: '22rem' }}
            key={item._id}
          >
            <p>
              ID : {item._id}
              <br />
              NAME : {item.name}
              <br />
              Subscribed Channel : {item.subscribedChannel}
              <br />
              Subscribed Date : {item.subscribedDate}
            </p>
          </div>
        ))}
      </div>
      <div className="container mt-5">
        <button
          type="button"
          className="btn btn-danger"
          onClick={showDataNames}
        >
          Subscribers Name and Channel
        </button>
        {names.map((item) => (
          <div
            className="card-body bg-dark"
            style={{ width: '22rem' }}
            key={item.name}
          >
            <p>
              NAME : {item.name}
              <br />
              Subscribed Channel : {item.subscribedChannel}
            </p>
          </div>
        ))}
      </div>
      <div className="container mt-5 d-flex" style={{ marginBottom: '20px' }}>
          <input
            className="mx-2 py-1 rounded"
            type="text"
            placeholder="Enter ID"
            aria-label="id"
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={showDataIds}
          >
            Search
          </button>
          {ids.map((item) => (
            <div
              className="card-body bg-dark"
              style={{ width: '19.5rem' }}
              key={item.subscribedChannel}
            >
              <p className="text-success text-start p-2">
                ID : {item.id}
                <br />
                NAME : {item.name}
                <br />
                Subscribed Channel : {item.subscribedChannel}
                <br />
                Subscribed Date : {item.subscribedDate}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
