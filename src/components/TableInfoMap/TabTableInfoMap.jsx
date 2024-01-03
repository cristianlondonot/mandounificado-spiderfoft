import React from 'react'
import { Tabs } from "keep-react";
import TableInfoMap from './TableInfoMap';

const TabTableInfoMap = ({municipio}) => {
  return (
    <div className={`content w-full  bg-white relative z-10 ${!municipio ? 'hidden' : ''}`}>
      <Tabs aria-label="tabs" style="underline" borderPosition="bottom">
        <Tabs.Item disabled={!municipio}  title={municipio ? 'Económico' : ''}>
          <TableInfoMap municio={municipio} titleDb='Económico' />
        </Tabs.Item>
        <Tabs.Item disabled={!municipio}  title="Social y cultural">
          <TableInfoMap municio={municipio} titleDb='Social y cultural'/>
        </Tabs.Item>
        <Tabs.Item disabled={!municipio}  title="Político Intitucional">
          <TableInfoMap municio={municipio} titleDb='Político Intitucional'/>
        </Tabs.Item>
        <Tabs.Item disabled={!municipio}  title="Infraestructura">
          <TableInfoMap municio={municipio} titleDb='Infraestructura'/>
        </Tabs.Item>
        <Tabs.Item disabled={!municipio}  title="Ambiental">
          <TableInfoMap municio={municipio} titleDb='Ambiental'/>
        </Tabs.Item>
        <Tabs.Item disabled={true} title="Seguridad">
          Disabled content
        </Tabs.Item>
      </Tabs>
    </div>
  )
}

export default TabTableInfoMap