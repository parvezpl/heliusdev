import ManiNav from '../../nav/main_nav'
import React from 'react'

export default function main({ children}) {
  return (
    <>
    <ManiNav/>
    {children}
    </>
  )
}
