import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CryptoAsset {
  id: number
  name: string
  symbol: string
  price: number
  change1h: number
  change24h: number
  change7d: number
  volume24h: number
  marketCap: number
  circulatingSupply: number
  maxSupply: number
  logo: string
  chart: string
}

interface CryptoState {
  assets: CryptoAsset[]
}

const initialState: CryptoState = {
  assets: []
}

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setAssets(state, action: PayloadAction<CryptoAsset[]>) {
      state.assets = action.payload
    },
    updateAsset(state, action: PayloadAction<CryptoAsset>) {
      const index = state.assets.findIndex(a => a.id === action.payload.id)
      if (index !== -1) {
        state.assets[index] = {
        ...state.assets[index],
        ...action.payload
      }
      }
    },
  },
})

export const { setAssets, updateAsset } = cryptoSlice.actions
export default cryptoSlice.reducer
