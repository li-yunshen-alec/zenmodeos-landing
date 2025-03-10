"use client"

import { useState } from "react"

export default function ClearBlockerPopup() {
  // Sample data for the popup
  const [blockedWebsites, setBlockedWebsites] = useState(["youtube.com", "facebook.com", "twitter.com"])

  const [whitelistedWebsites, setWhitelistedWebsites] = useState(["docs.google.com", "github.com"])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[400px] bg-stone-950 text-stone-100 rounded-xl overflow-hidden border-2 border-stone-800 shadow-lg">
        <div className="p-4">
          <header className="flex justify-between items-center mb-4 pb-3 border-b border-stone-800">
            <h1 className="text-lg font-semibold text-stone-100">Clear Blocker</h1>
          </header>

          <div className="flex gap-2 mb-4">
            <div className="flex justify-start items-center gap-1 p-2 px-3 m-1 rounded-md bg-stone-900 border border-stone-800">
              <span className="font-medium text-stone-500">Images:</span>
              <span className="text-xs font-semibold text-red-600">Blocked</span>
            </div>
            <div className="flex justify-start items-center gap-1 p-2 px-3 m-1 rounded-md bg-stone-900 border border-stone-800">
              <span className="font-medium text-stone-500">Videos:</span>
              <span className="text-xs font-semibold text-emerald-600">Allowed</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-stone-900 rounded-md p-3 shadow-md border border-stone-800">
              <h3 className="text-sm font-semibold mb-2 text-stone-100">Blocked Websites</h3>
              <div className="relative min-h-[40px]">
                {blockedWebsites.length > 0 ? (
                  <ul className="list-none">
                    {blockedWebsites.map((site, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center py-2 px-2.5 mb-1.5 bg-stone-950 rounded-md text-sm border-l-3 border-l-red-600 shadow-sm transition-transform hover:translate-x-0.5"
                      >
                        {site}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-stone-500 text-sm italic">
                    No blocked websites
                  </div>
                )}
              </div>
            </div>

            <div className="bg-stone-900 rounded-md p-3 shadow-md border border-stone-800">
              <h3 className="text-sm font-semibold mb-2 text-stone-100">Whitelisted Websites</h3>
              <div className="relative min-h-[40px]">
                {whitelistedWebsites.length > 0 ? (
                  <ul className="list-none">
                    {whitelistedWebsites.map((site, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center py-2 px-2.5 mb-1.5 bg-stone-950 rounded-md text-sm border-l-3 border-l-emerald-600 shadow-sm transition-transform hover:translate-x-0.5"
                      >
                        {site}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-stone-500 text-sm italic">
                    No whitelisted websites
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

