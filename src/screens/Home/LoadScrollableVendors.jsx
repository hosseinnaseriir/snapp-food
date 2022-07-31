import React, { useCallback, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { VendorCard } from "components";
import { getVendorsList } from "api/services/index";

const LoadScrollableVendors = ({ setVendorsList, vendorsList }) => {
  const [lastPosition, setLastPosition] = useState(0);
  const perPage = 10;

  const loadProducts = useCallback(() => {
    getVendorsList({
      page: (lastPosition + perPage) / perPage,
      page_size: perPage,
      lat: 35.754,
      long: 51.328,
    }).then((res) => {
      setVendorsList([...vendorsList, ...res.data.data.finalResult]);
      setLastPosition(lastPosition + perPage);
    });
  }, [lastPosition, setVendorsList, vendorsList]);

  return (
    <InfiniteScroll
      dataLength={vendorsList.length}
      next={loadProducts}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <div className="flex flex-col">
        {vendorsList.map(({ data }, index) => (
          <VendorCard
            backgroundImage={data.backgroundImage}
            key={index}
            title={data.title}
            defLogo={data.defLogo}
            rate={data.rate}
            voteCount={data.voteCount}
            description={data.description}
            isZFExpress={data.isZFExpress}
            deliveryFee={data.deliveryFee}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default LoadScrollableVendors;
