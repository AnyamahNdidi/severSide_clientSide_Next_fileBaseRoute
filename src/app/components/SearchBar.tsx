"use client"
import React from 'react'

const SearchBar = () =>
{
    const [search, setSearch] = React.useState("")
  return (
      <form onSubmit={(e) =>
      {
          e.preventDefault()
          alert(search)
    }}>
                        <input type="search" placeholder="search post" value={search} onChange={(e) =>
                        {
                            setSearch(e.target.value)
          }} />
          <button>Search</button>
                    </form>
  )
}

export default SearchBar