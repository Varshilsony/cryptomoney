import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from './app/store'
import { setAssets } from './features/crypto/cryptoSlice'
import { sampleAssets } from './utils/mockData'
import { startSimulation } from './utils/updateSimulator'
import CryptoTable from './components/CryptoTable'

const App = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(setAssets(sampleAssets))
    startSimulation(dispatch, () => ({ crypto: { assets: sampleAssets } }))
  }, [dispatch])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Crypto Tracker</h1>
      <CryptoTable />
    </div>
  )
}

export default App
