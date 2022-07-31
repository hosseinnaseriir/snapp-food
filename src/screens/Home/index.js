import React, { useEffect, useState } from "react";
import { getVendorsList } from "api/services/index";
import LoadScrollableVendors from "./LoadScrollableVendors";

function Index() {
  const [vendorsList, setVendorsList] = useState();
  useEffect(() => {
    getVendorsList({
      page: 0,
      page_size: 10,
      lat: 35.754,
      long: 51.328,
    }).then((res) => {
      console.log(res);
      setVendorsList(res.data.data.finalResult);
    });
  }, []);

  return (
    vendorsList && (
      <LoadScrollableVendors
        vendorsList={vendorsList}
        setVendorsList={setVendorsList}
      />
    )
  );
}

export default Index;
