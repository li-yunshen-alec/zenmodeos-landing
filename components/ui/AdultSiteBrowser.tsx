"use client"

import "./scrollbar.css"
import { useState } from "react"
import { FaXmark, FaRegHeart, FaHeart, FaUser, FaLock, FaStar, FaPlay, FaEye } from "react-icons/fa6"
import { FaSearch } from "react-icons/fa"

export default function AdultSiteBrowser() {
  const [likedVideos, setLikedVideos] = useState<number[]>([])

  const toggleLike = (id: number) => {
    if (likedVideos.includes(id)) {
      setLikedVideos(likedVideos.filter((videoId) => videoId !== id))
    } else {
      setLikedVideos([...likedVideos, id])
    }
  }

  return (
    <div className="w-[400px] h-[500px] border border-black rounded-md overflow-hidden shadow-md font-sans relative">
      {/* Site header */}
      <div className="bg-black text-white p-3 flex justify-between items-center border-b border-gray-700">
        <div className="text-xl font-bold text-red-500">
          HotVids<span className="text-white">.xxx</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <FaSearch className="w-4 h-4" />
          </div>
          <button className="bg-red-600 text-white text-sm px-3 py-1 rounded flex items-center">
            <FaLock className="mr-1 w-3 h-3" /> PREMIUM
          </button>
          <div className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center">
            <FaUser className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-900 text-gray-300 flex overflow-x-auto text-sm border-b border-gray-700">
        {["Trending", "New", "Top Rated", "Categories", "Live"].map((item, i) => (
          <div
            key={i}
            className={`px-4 py-2 whitespace-nowrap ${i === 0 ? "text-red-500 border-b-2 border-red-500" : "hover:text-white"}`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Premium banner */}
      <div className="bg-gradient-to-r from-red-900 to-red-600 text-white p-3 flex justify-between items-center">
        <div>
          <div className="text-sm font-bold flex items-center">
            <FaStar className="text-yellow-400 mr-1" /> PREMIUM OFFER
          </div>
          <div className="text-xs">Get unlimited access to all content</div>
        </div>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-3 py-1 rounded text-sm">
          JOIN NOW
        </button>
      </div>

      {/* Content */}
      <div className="bg-gray-900 text-white overflow-y-auto h-[370px] clean-scrollbar">
        {/* Featured content */}
        <div className="p-3">
          <h3 className="text-lg font-bold mb-2">Trending Now</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { title: "Hot Singles in Your Area", views: "1.2M", duration: "12:34", premium: true },
              { title: "Exclusive Content Just Added", views: "890K", duration: "8:21", premium: false },
              { title: "Private Webcam Session", views: "2.4M", duration: "15:47", premium: true },
              { title: "Amateur Home Videos", views: "1.5M", duration: "10:12", premium: false },
            ].map((video, i) => (
              <div key={i} className="relative group cursor-pointer">
                <div className="aspect-video bg-gray-800 relative overflow-hidden rounded">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaPlay className="text-white ml-1" />
                    </div>
                  </div>
                  {video.premium && (
                    <div className="absolute top-1 right-1 bg-yellow-500 text-black text-xs px-1 rounded font-bold">
                      PREMIUM
                    </div>
                  )}
                  <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-sm font-medium line-clamp-1">{video.title}</div>
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <div className="flex items-center">
                      <FaEye className="w-3 h-3 mr-1" /> {video.views}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleLike(i)
                      }}
                      className="text-gray-400 hover:text-red-500"
                    >
                      {likedVideos.includes(i) ? (
                        <FaHeart className="w-3 h-3 text-red-500" />
                      ) : (
                        <FaRegHeart className="w-3 h-3" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="p-3 border-t border-gray-800">
          <h3 className="text-lg font-bold mb-2">Popular Categories</h3>
          <div className="grid grid-cols-3 gap-2">
            {["Amateur", "Webcam", "Dating", "Premium", "Live", "Verified", "Recommended", "Top Rated", "Trending"].map(
              (category, i) => (
                <div key={i} className="bg-gray-800 hover:bg-gray-700 text-center py-2 rounded text-sm cursor-pointer">
                  {category}
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Popup ads - absolutely positioned in the outermost div */}
      <div className="absolute bottom-4 right-6 bg-gradient-to-r from-pink-600 to-red-600 p-3 rounded-lg shadow-lg text-white max-w-[200px] z-40 border border-pink-400">
        <div className="flex justify-between items-start">
          <div className="text-sm font-bold">Hot Singles Nearby!</div>
          <button
            className="text-white hover:text-gray-200"
            title="Close"
            onClick={(e) => e.currentTarget.parentElement?.parentElement?.remove()}
          >
            <FaXmark className="w-4 h-4" />
          </button>
        </div>
        <div className="text-xs mt-1">Click here to chat with local singles in your area now!</div>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xs w-full py-1 rounded mt-2">
          CHAT NOW
        </button>
      </div>
    </div>
  )
}
