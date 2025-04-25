import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

const CryptoTable = () => {
  const assets = useSelector((state: RootState) => state.crypto.assets)

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th>#</th><th>Name</th><th>Price</th><th>1h %</th><th>24h %</th><th>7d %</th>
            <th>Market Cap</th><th>Volume(24h)</th><th>Circulating Supply</th><th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={asset.id}>
              <td>{index + 1}</td>
              <td><img src={asset.logo} alt={asset.symbol} width="20" style={{ display: 'inline' }} /> {asset.name} <strong>{asset.symbol}</strong></td>
              <td>${asset.price.toFixed(2)}</td>
              <td style={{ color: asset.change1h >= 0 ? 'green' : 'red' }}>{asset.change1h}%</td>
              <td style={{ color: asset.change24h >= 0 ? 'green' : 'red' }}>{asset.change24h}%</td>
              <td style={{ color: asset.change7d >= 0 ? 'green' : 'red' }}>{asset.change7d}%</td>
              <td>${asset.marketCap.toLocaleString()}</td>
              <td>${asset.volume24h.toLocaleString()}</td>
              <td>{asset.circulatingSupply} {asset.symbol}</td>
              <td><img src={asset.chart} alt="chart" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CryptoTable
