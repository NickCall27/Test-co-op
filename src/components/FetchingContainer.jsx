import React from 'react'

const FetchingContainer = (loading, error, children) => {
  return (
    <>
        {loading && <p>Loading...</p>}
        {error && <p>Something went wrong...</p>}
        {children}
    </>
  )
}

export default FetchingContainer