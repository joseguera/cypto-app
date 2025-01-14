import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  PortfolioModal,
  CryptoAsset,
  LoadingPortfolioAsset,
  PortfolioAssetDeleteModal,
} from "components";
import {
  MainDiv,
  AssetBtnHolder,
  AssetBtnText,
  AssetContainer,
  TitleHolder,
  Title,
} from "./Portfolio.styles";

interface CurrentCoin {
  circulatingSupply: number;
  coinAmount: number;
  currentPrice: number;
  id: string;
  image: string;
  isBigger: boolean;
  marketCap: number;
  maxSupply: number;
  name: string;
  previousPrice: number;
  priceChange: number
  purchase_date: string;
  symbol: string
  total: number;
  totalVolume: number;
}

const Portfolio: React.FunctionComponent<Props> = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [currentCoin, setCurrentCoin] = useState({});
  const currency = useSelector((state) => state.currency.value);
  const portfolio = useSelector((state) => state.portfolio.value);
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    try {
      let noDuplicates = portfolio.reduce((acc, el) => {
        if (acc[el.id]) return acc;
        return { ...acc, [el.id]: { ...el } };
      }, {});

      const pricedCoinsObject = await Promise.all(
        Object.keys(noDuplicates).map(async (key) => {
          try {
            const data = await fetch(
              `https://api.coingecko.com/api/v3/coins/${key}`
            );
            const json = await data.json();
            noDuplicates[key].currentPrice =
              json.market_data.current_price[currency];
            noDuplicates[key].circulatingSupply =
              json.market_data.circulating_supply;
            noDuplicates[key].maxSupply = json.market_data.max_supply;
          } catch (err) {
            console.log(err, noDuplicates[key]);
          }
        })
      );

      const newPortfolio = await Promise.all(
        portfolio.map(async (coin) => {
          const data = await fetch(
            `https://api.coingecko.com/api/v3/coins/${coin.id}/history?date=${coin.date}`
          );
          const date = coin.date.split("-");
          const purchaseDate = `${date[1]}-${date[0]}-${date[2]}`;
          const json = await data.json();
          return {
            id: json.id,
            name: json.name,
            symbol: json.symbol,
            image: json.image.thumb,
            purchase_date: purchaseDate,
            coinAmount: coin.amount,
            marketCap: json.market_data.market_cap[currency],
            totalVolume: json.market_data.total_volume[currency],
            total: coin.amount * json.market_data.current_price[currency],
            previousPrice: json.market_data.current_price[currency],
            currentPrice: noDuplicates[coin.id].currentPrice,
            priceChange:
              (noDuplicates[coin.id].currentPrice -
                json.market_data.current_price[currency]) *
              coin.amount,
            circulatingSupply: noDuplicates[coin.id].circulatingSupply,
            maxSupply: noDuplicates[coin.id].maxSupply,
            isBigger:
              json.market_data.current_price[currency] >
              noDuplicates[coin.id].currentPrice,
          };
        })
      );
      setProfile(newPortfolio);
    } catch (err) {
      console.log("Location Error:", err);
    }
  }

  const openModal = () => {
    setModal(!modal);
  };

  const openDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

  const getCurrentCoin = (coin: CurrentCoin) => {
    setCurrentCoin(coin);
  };

  const editAsset = (assetArray) => {
    // implement edit
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portfolio, currency]);

  let min: number = 1;
  let max: number = 100;

  const randomNum: number = Math.random() * (max - min) + min;

  const keyNumber: number = Math.trunc(randomNum);

  const hasCoinProfile: boolean = !isLoading && profile;

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <MainDiv>
        <AssetContainer>
          <AssetBtnHolder onClick={() => openModal()}>
            <AssetBtnText>Add Asset</AssetBtnText>
          </AssetBtnHolder>
          <TitleHolder>
            <Title>Your Assets</Title>
          </TitleHolder>
          {hasCoinProfile ? (
            <>
              {deleteModal && (
                <PortfolioAssetDeleteModal
                  openDeleteModal={openDeleteModal}
                  currentCoin={currentCoin}
                />
              )}
              {modal && (
                <PortfolioModal openModal={openModal} profile={profile} />
              )}
              {profile.length === 0 ? (
                <div>
                  No assets to display. Click 'Add Asset' to start building
                  your Portfolio.
                </div>
              ) : (
                profile.map((pro) => {
                  return (
                    <CryptoAsset
                      key={`${pro.id}${keyNumber}`}
                      profile={pro}
                      image={pro.image}
                      openModal={openModal}
                      openDeleteModal={openDeleteModal}
                      getCurrentCoin={getCurrentCoin}
                    />
                  );
                })
              )}
            </>
          ) : (
            <LoadingPortfolioAsset />
          )}
        </AssetContainer>
      </MainDiv>
    </>
  );
};

export default Portfolio;
