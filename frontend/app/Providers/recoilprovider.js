"use client"

import { RecoilRoot } from "recoil"


const Recoilprovider = ({children}) => {
  return (
    <RecoilRoot>
        {children}
    </RecoilRoot>
  )
}

export default Recoilprovider
