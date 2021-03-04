import React, { useState, useEffect } from 'react'

export default function TopTenFn() {

    const [isFetching, setIsFetching] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/wanted/v1/list", {
            method: "GET",
            headers: { Accept: "application/json" },
          })
            .then((response) => response.json())
            .then((result) => {
              console.log(result);
              setData(result);
              setIsFetching(false);
            })
            .catch((e) => {
              console.log(e);
              setIsFetching(true);
            });
      
    }, []);

    if (isFetching || !data) {
        return <h4>Fetching...</h4>;
        } else {
            return (
                <div>
                {data.items.map((item) => {
                    return (
                    <div>
                        <h4>{item.uid}</h4>
                        <img src={item.images[0].large} alt="Some bad people" />
                    </div>
                    );
                })}
                </div>
            );
        }
          
}
