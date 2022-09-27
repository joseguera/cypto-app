import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { formatCurrency, setCurrency } from "util/numberUtil";
import { ChartTitle, TitleText, TitleAmount } from "./GraphTitle.styles";

export default function GraphTitle(props) {
  const [marketData, setMarketData] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [totalVolume, setTotalVolume] = useState(0);
  const [lastUpdated, setLastUpdated] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getMarketData() {
    setIsLoading(true);
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.currencyName}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    setMarketData(data);
    setCurrentPrice(data[0].current_price);
    setTotalVolume(data[0].total_volume);
    setLastUpdated(data[0].last_updated);
    setIsLoading(false);
  }

  const timeConverter = (t) => {
    return dayjs(t).$d.toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const hasMarketData = !isLoading && marketData;
  const price =
    props.cryptoName === "BTC Volume" || props.cryptoName === "ETH Volume"
      ? totalVolume
      : currentPrice;

  useEffect(() => {
    getMarketData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currencyName]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {hasMarketData && (
        <ChartTitle>
          <TitleText>{props.cryptoName}</TitleText>
          <TitleAmount>
            {setCurrency(props.currencyName)}
            {formatCurrency(price, 2)}
          </TitleAmount>
          <TitleText>{timeConverter(lastUpdated)}</TitleText>
        </ChartTitle>
      )}
    </>
  );
}
