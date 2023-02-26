import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="128" r="128" /> 
    <circle cx="121" cy="155" r="21" /> 
    <rect x="0" y="268" rx="8" ry="8" width="280" height="20" /> 
    <rect x="3" y="317" rx="8" ry="8" width="280" height="88" /> 
    <rect x="4" y="434" rx="10" ry="10" width="95" height="30" /> 
    <rect x="15" y="430" rx="0" ry="0" width="3" height="10" /> 
    <rect x="20" y="438" rx="0" ry="0" width="1" height="0" /> 
    <rect x="117" y="425" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
)

export default PizzaSkeleton