import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchVendorsListAction } from "redux/slices/vendorsListSlice";
import { toast } from "react-toastify";

function useFetchVendorsList() {
  const dispatch = useDispatch();
  const { vendorsList, rejected } = useSelector(
    (store) => store.vendorsListSlice
  );

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
  useEffect(() => {
    if (rejected.status) toast.error(rejected.message);
  }, [rejected]);
  return { vendorsList };
}

export default useFetchVendorsList;
