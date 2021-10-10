import React, { useState, useEffect } from "react";

const DisplayData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/futurama/characters")
      .then((res) => res.json())
      .then((list) => setData(list));
  }, []);
  //console.log(data);
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((el, id) => {
          return (
            <div className="col" key={id}>
              <div className="card h-100">
                <img
                  src={el.images.main}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "100px", width: "100px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Name:{el.name.first} {el.name.middle} {el.name.last}
                  </h5>

                  <p className="card-text">Gender:{el.gender}</p>
                  <p className="card-text">Age:{el.age}</p>
                  <p className="card-text">Species:{el.species}</p>
                  <p className="card-text">HomePlanet:{el.homePlanet}</p>
                  <p className="card-text">Occupation:{el.occupation}</p>
                  <p className="card-text">Sayings:{el.sayings[0]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayData;
