import React from "react";
import { Loader } from "components";
import LoadScrollableVendors from "./LoadScrollableVendors";
import useFetchVendorsList from "./useFetchVendorsList";

function Index() {
  
  const { vendorsList } = useFetchVendorsList();

  return (
    <>
      {vendorsList.length > 0 ? (
        <LoadScrollableVendors vendorsList={vendorsList} />
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Index;
