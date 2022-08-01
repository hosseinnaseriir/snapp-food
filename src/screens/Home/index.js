import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Loader } from "components";
import { fetchVendorsListAction } from "redux/slices/vendorsListSlice";
import LoadScrollableVendors from "./LoadScrollableVendors";

function Index() {
  const dispatch = useDispatch();
  const { vendorsList } = useSelector((store) => store.vendorsListSlice);

  useEffect(() => {
    dispatch(
      fetchVendorsListAction({
        page: 0,
        page_size: 10,
        lat: 35.754,
        long: 51.328,
      })
    );
  }, []);

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
