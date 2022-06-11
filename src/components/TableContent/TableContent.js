import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { roundToNumber, formatCurrency } from 'util/numberUtil';
import { Icon, Symbol } from "./TableContent.styles";


export default class TableContent extends React.Component {
    formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: this.props.currencyName,
        minimumFractionDigits: 0,
      });

    render() {
      return (
        <>
          {this.props.coins.map((coin) => {
            return (
              <Fragment key={coin.id}>
                <div>{coin.market_cap_rank}</div>
                <div>
                  <Link to={`/coin/${coin.id}`}>
                    <Icon src={coin.image} alt={coin.name} />
                    {coin.name} (<Symbol>{coin.symbol}</Symbol>)
                  </Link>
                </div>
                <div>{this.formatter.format(coin.current_price)}</div>
                <div>
                  {roundToNumber(coin.price_change_percentage_1h_in_currency, 2)}%
                </div>
                <div>
                  {roundToNumber(coin.price_change_percentage_24h_in_currency, 2)}
                  %
                </div>
                <div>
                  {roundToNumber(coin.price_change_percentage_7d_in_currency, 2)}%
                </div>
                <div>
                  <span>{formatCurrency(coin.total_volume)}</span>{" "}
                  <span>{formatCurrency(coin.market_cap)}</span>
                </div>
                <div>
                  <span>{formatCurrency(coin.circulating_supply)}</span>{" "}
                  <span>{formatCurrency(coin.total_supply)}</span>
                </div>
                <div>Graph</div>
              </Fragment>
            );
          })}
        </>
      );
    }
}