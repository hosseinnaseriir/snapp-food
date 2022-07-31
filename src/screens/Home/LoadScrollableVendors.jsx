import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";

import { VendorCard } from "components";
import { fetchVendorsListAction } from "./../../redux/slices/vendorsListSlice";

const LoadScrollableVendors = ({ vendorsList }) => {
  const [lastPosition, setLastPosition] = useState(0);
  const perPage = 10;

  const dispatch = useDispatch();

  const loadProducts = useCallback(() => {
    dispatch(
      fetchVendorsListAction({
        page: (lastPosition + perPage) / perPage,
        page_size: perPage,
        lat: 35.754,
        long: 51.328,
      })
    );
    setLastPosition(lastPosition + perPage);
  }, [lastPosition, vendorsList]);

  return (
    <InfiniteScroll
      dataLength={vendorsList.length}
      next={loadProducts}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <div className="flex flex-col">
        {vendorsList.map(
          ({ data, type }, index) =>
            type === "VENDOR" && (
              <VendorCard
                backgroundImage={data.backgroundImage}
                // Some vendors have the same ID as others!
                key={data.id + " " + index}
                title={data.title}
                defLogo={data.defLogo}
                rate={data.rate}
                voteCount={data.voteCount}
                description={data.description}
                isZFExpress={data.isZFExpress}
                deliveryFee={data.deliveryFee}
              />
            )
        )}
      </div>
    </InfiniteScroll>
  );
};

LoadScrollableVendors.propTypes = {
  vendorsList: PropTypes.array,
};

export default LoadScrollableVendors;
