import { React, useState } from 'react'
import { getFlags, getFlagsByRegion } from '../services/flagsService'
import Cards from '../components/flagCards'
import { DataGrid } from '@mui/x-data-grid'

const Flags = () => {
  const [datas, setDatas] = useState([])

  const countriesOptions = ['europe', 'africa', 'americas', 'asia', 'oceania']

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <div className="text-center">
      <select
        onChange={() => {
          // <option value={}>{capitalizeFirstLetter()}</option>
        }}
      ></select>

      <label> Choose a continent</label>
      <br />
      <select
        onChange={(e) => {
          getFlagsByRegion(e.target.value).then((res) => {
            setDatas(res)
          })
        }}
      >
        {countriesOptions.map((option) => {
          return (
            <option value={option}> {capitalizeFirstLetter(option)}</option>
          )
        })}
      </select>
      <br />
      <p className="my-30">Or get all flags !</p>

      {
        <button
          onClick={() => {
            getFlags().then((res) => {
              setDatas(res)
            })
          }}
        >
          Fetch Flags
        </button>
      }

      <div className="  flex wrap jc-sa items-center">
        {datas.map((data) => {
          return (
            <Cards
              name={data.name.official}
              region={data.region}
              image={data.flags.png}
              population={data.population}
            />
          )
        })}
      </div>
    </div>
  )
}
export default Flags
