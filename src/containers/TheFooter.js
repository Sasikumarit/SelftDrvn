import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://selfdrvn.com/" target="_blank" rel="noopener noreferrer">Selfdrvn</a>
        <span className="ml-1">&copy; 2021.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
