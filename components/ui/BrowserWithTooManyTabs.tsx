"use client"

import { FaSearch } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6";

export default function BrowserWithTooManyTabs() {
  return (
    <div className="w-[400px] h-[500px] border border-black rounded-md overflow-hidden shadow-md font-sans">
      {/* Browser chrome - Windows style */}
      <div className="h-9 bg-gray-100 border-b border-black flex items-center justify-between px-3">
        <div className="text-sm font-medium text-gray-700">Web Browser</div>
        <div className="flex">
          <div className="w-10 h-8 flex items-center justify-center hover:bg-gray-200">
            <div className="w-3 h-0.5 bg-gray-500"></div>
          </div>
          <div className="w-10 h-8 flex items-center justify-center hover:bg-gray-200">
            <div className="w-3 h-3 border border-gray-500"></div>
          </div>
          <div className="w-10 h-8 flex items-center justify-center hover:bg-gray-200 hover:bg-red-100 hover:text-red-600">
            <FaXmark className="w-4 h-4 text-gray-500 hover:text-red-600" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-hidden bg-gray-50 border-b border-black h-8 relative">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`
              flex items-center border-r border-black px-2 min-w-[100px] max-w-[120px] text-xs truncate
              ${i === 3 ? "bg-white text-black" : "bg-gray-200 text-gray-500"}
            `}
          >
            <span className="truncate mr-1">{i === 3 ? "Web Search" : `Tab ${i + 1}`}</span>
            <FaXmark className="w-3 h-3 shrink-0" />
          </div>
        ))}
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
      </div>

      {/* Address bar */}
      <div className="h-10 bg-gray-50 border-b border-black flex items-center px-3 gap-2">
        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        </div>
        <div className="flex-1 h-7 bg-white rounded border border-gray-300 flex items-center px-2 text-sm text-gray-700">
          how to find tab when you have too many
        </div>
        <div className="w-6 h-6 text-gray-500">⋮</div>
      </div>

      {/* Content - Search Results */}
      <div className="h-[413px] bg-white overflow-y-auto">
        {/* Search header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-3">
          <div className="flex items-center mb-3">
            <FaSearch className="w-5 h-5 text-amber-500 mr-2" />
            <span className="text-lg font-medium">Search Results</span>
          </div>
          <div className="flex gap-2 text-xs">
            <div className="px-3 py-1 bg-amber-500 text-white rounded-full">All</div>
            <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Images</div>
            <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Videos</div>
            <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Maps</div>
            <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">News</div>
          </div>
        </div>

        {/* Search results */}
        <div className="p-4">
          {/* Ad Result */}
          <div className="mb-5 border-l-4 border-amber-500 pl-2">
            <div className="text-xs text-gray-500 mb-1">Ad · www.tabmanager.com</div>
            <h3 className="text-blue-600 text-base font-medium mb-1">
              TabMaster Pro - Organize Your Browser Tabs Efficiently
            </h3>
            <p className="text-sm text-gray-700">
              Struggling with too many tabs? TabMaster Pro helps you organize, search, and manage your browser tabs
              efficiently.
            </p>
          </div>

          {/* Regular Results */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="mb-5">
              <div className="text-xs text-gray-500 mb-1">www.browsertips{i + 1}.com</div>
              <h3 className="text-blue-600 text-base font-medium mb-1">
                {
                  [
                    "How to Manage Browser Tabs Effectively",
                    "7 Tips for Handling Too Many Open Tabs",
                    "Browser Extensions for Tab Management",
                    "Why Too Many Tabs Slow Down Your Browser",
                    "Finding Lost Tabs in Your Browser",
                  ][i]
                }
              </h3>
              <p className="text-sm text-gray-700">
                {
                  [
                    "Learn how to organize and manage your browser tabs efficiently for better productivity and reduced memory usage...",
                    "Struggling with tab overload? These 7 tips will help you regain control of your browser and find what you need...",
                    "These browser extensions can help you organize, search, and manage your tabs even when you have dozens open...",
                    "Opening too many tabs can significantly impact your computer's performance. Learn why and how to fix it...",
                    "Lost an important tab in a sea of open websites? Here's how to quickly locate what you're looking for...",
                  ][i]
                }
              </p>
            </div>
          ))}

          {/* Another Ad Result */}
          <div className="mb-5 border-l-4 border-amber-500 pl-2">
            <div className="text-xs text-gray-500 mb-1">Ad · www.tabsolution.com</div>
            <h3 className="text-blue-600 text-base font-medium mb-1">Tab Search Pro - Find Any Tab Instantly</h3>
            <p className="text-sm text-gray-700">
              Never lose a tab again! Our browser extension helps you search and find any open tab with just a few
              keystrokes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

