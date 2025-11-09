"use client"
import CategoryPage from '@/app/(pages)/products/[category]/page'
import React, { useState } from 'react'

const GridView = () => {
        const [viewMode, setViewMode] = useState("grid")
    
  return (
      <div>
          <CategoryPage
              viewMode={viewMode}
              setViewMode={setViewMode} />
    </div>
  )
}

export default GridView