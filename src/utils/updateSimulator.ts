import { AppDispatch } from '../app/store'
import { updateAsset } from '../features/crypto/cryptoSlice'

export function startSimulation(dispatch: AppDispatch, getState: () => any) {
  setInterval(() => {
    const { assets } = getState().crypto

    const updated = assets.map(asset => {
      const randomFactor = () => (Math.random() * 2 - 1) * 0.5 // +/-0.5%
      const newPrice = parseFloat((asset.price * (1 + randomFactor() / 100)).toFixed(2))
      const change1h = parseFloat((randomFactor()).toFixed(2))
      const change24h = parseFloat((randomFactor()).toFixed(2))
      const change7d = parseFloat((randomFactor()).toFixed(2))
      const volume24h = parseFloat((asset.volume24h * (1 + randomFactor() / 100)).toFixed(2))

      return {
        ...asset,
        price: newPrice,
        change1h,
        change24h,
        change7d,
        volume24h,
      }
    })

    updated.forEach(asset => dispatch(updateAsset(asset)))
  }, 2000)
}
