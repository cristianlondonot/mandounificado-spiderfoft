import React from 'react'
import FilterDpto from '../FilterDpto/FilterDpto'
import DptoState from '../DptoState/DptoState'

const FiltersDpto = ({municipio}) => {
  return (
    <div className={`${municipio ? 'hidden' : ''} w-full p-10`}>
      <FilterDpto />
      <DptoState />
    </div>
  )
}

export default FiltersDpto