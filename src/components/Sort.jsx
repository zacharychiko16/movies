"use client"
import React, { useState } from 'react'
import Card from './Card'

export default function Results({ results }) {
  const [sortOption, setSortOption] = useState('DEFAULT')

  const handleSortChange = (e) => {
    setSortOption(e.target.value)
  }

  const sortedResults = results.slice().sort((a, b) => {
    switch (sortOption) {
      case 'DATE':
        return new Date(a.release_date) - new Date(b.release_date)
      case 'RATING':
        return b.vote_count - a.vote_count
      default:
        return 0
    }
  })

  return (
    <>
      <div className="flex items-center justify-center">
        <select
          defaultValue={"DEFAULT"}
          id="filter"
          onChange={handleSortChange}
        >
          <option value="DEFAULT" disabled>
            Sort
          </option>
          <option value="DATE">Date, Oldest to Newest</option>
          <option value="RATING">Rating, High to Low</option>
        </select>
      </div>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {sortedResults.map((result) => (
          <Card key={result.id} result={result} />
        ))}
      </div>
    </>
  );
}
