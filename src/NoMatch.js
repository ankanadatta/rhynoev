import React from 'react'

const NoMatch = () => {
  let Style={
    color: "#F2F2F2",
    "text-align": "center",
    "margin-top": "100px"
  }
  return (
    <div className='lato-regular' style={Style}>
      This page does not exist.<br/>Try one of the items from the menu.
    </div>
  )
}

export default NoMatch
