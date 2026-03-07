'use client'

import { useState } from 'react'
import EndpointCard from '@/components/End-pointCard'
import { Investors } from '@/lib/investors-data'
import SearchBar from '@/components/SearchBar'

export default function InvestorsPage() {
  const[searchQuery, setSearchQuery]=useState("")
  const [activeSection] = useState<string | undefined>('investors')
  const currentSection = Investors.find((s) => s.id === 'investors')
   if (!currentSection) return null;
  const filteredEndpoints = currentSection.endpoints.filter((endpoint) =>
    `${endpoint.title} ${endpoint.method} ${endpoint.path}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase()),
  );

  return (
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {currentSection && (
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-foreground mt-5">
                {currentSection.title}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                {currentSection.description}
              </p>
            </div>
            <SearchBar searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}/>
            <div className="space-y-6">
              {filteredEndpoints.map((endpoint) => (
                <EndpointCard key={endpoint.id} endpoint={endpoint} />
              ))}
            </div>
          </div>
        )}
      </div>
   
  )
}
