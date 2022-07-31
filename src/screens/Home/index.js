import React, { useEffect, useCallback, useState } from "react";
import { VendorCard } from "./../../components";
import { getVendorsList } from "./../../api/services/index";
import InfiniteScroll from "react-infinite-scroll-component";

const Scroll = ({ setVendorsList, vendorsList }) => {
  const [allTweets, setAllTweets] = useState(vendorsList);
  const [hasMore, setHasmore] = useState(true);
  const [lastPosition, setLastPosition] = useState(10);
  const perPage = 10;

  const loadProducts = useCallback(() => {
    getVendorsList({
      page: 0,
      page_size: lastPosition + perPage,
      lat: 35.754,
      long: 51.328,
    }).then((res) => {
      console.log(res);
      setVendorsList([...res.data.data.finalResult]);
      setLastPosition(lastPosition + perPage);
    });
  }, [lastPosition, setVendorsList]);

  console.log(vendorsList);

  return (
    <InfiniteScroll
      dataLength={vendorsList.length}
      next={loadProducts}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      <div className="flex flex-col">
        {vendorsList.map((value, index) => (
          <VendorCard key={index} title={value.data.title} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

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
      <Scroll vendorsList={vendorsList} setVendorsList={setVendorsList} />
    )
  );
}

export default Index;
