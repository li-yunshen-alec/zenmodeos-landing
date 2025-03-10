"use client"

import {
  FaBell,
  FaHome,
  FaSearch,
  FaUser,
  FaVideo,
  FaClock,
  FaThumbsUp,
  FaCommentAlt,
  FaShare,
  FaEllipsisV,
} from "react-icons/fa"

export default function AddictiveVideoApp() {
  return (
    <div className="relative w-[400px] h-[500px] flex justify-center">
      {/* Phone frame with enhanced border styling */}
      <div className="relative w-[250px] h-[500px] bg-black rounded-[36px] p-2 shadow-xl">
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[28px] overflow-hidden relative border border-gray-800">
          {/* Status bar */}
          <div className="h-7 bg-black text-white flex justify-between items-center px-5 text-xs">
            <div>1:41 AM</div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-3 border border-white rounded-sm relative">
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-white"></div>
              </div>
              <div>5G</div>
            </div>
          </div>

          {/* App header */}
          <div className="h-12 border-b border-gray-200 flex justify-between items-center px-4">
            <div className="text-xl font-bold text-amber-500">Videos</div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <FaBell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center">
                  12
                </div>
              </div>
              <FaSearch className="w-5 h-5" />
            </div>
          </div>

          {/* Time spent notification */}
          <div className="bg-amber-50 border-b border-amber-200 p-2 text-xs text-amber-800 flex justify-between items-center">
            <div className="flex items-center">
              <FaClock className="w-3 h-3 mr-1" />
              <span>You've watched 5.5 hours today</span>
            </div>
            <button className="text-amber-500 font-medium">Dismiss</button>
          </div>

          {/* Video feed */}
          <div className="overflow-y-auto h-[380px] pb-14">
            {/* Personalized message */}
            <div className="p-3 text-sm font-medium">Recommended for you</div>

            {/* Videos */}
            {[
              {
                title: "10 AMAZING Life Hacks You Need To See",
                channel: "LifeHacker",
                views: "2.4M",
                time: "3:42",
                thumbnail: "life-hacks",
              },
              {
                title: "Try Not To Laugh Challenge #45",
                channel: "FunnyClips",
                views: "5.1M",
                time: "8:27",
                thumbnail: "laugh",
              },
              {
                title: "I Survived 100 Days in the Wilderness",
                channel: "Survivor",
                views: "12M",
                time: "18:03",
                thumbnail: "wilderness",
              },
            ].map((video, i) => (
              <div key={i} className="mb-5">
                {/* Thumbnail with enhanced border */}
                <div className="relative w-full h-48 bg-gray-200 mb-2 border border-gray-300">
                  <div
                    className={`w-full h-full flex items-center justify-center text-gray-400 bg-gradient-to-br from-gray-100 to-gray-300`}
                  >
                    <FaVideo className="w-12 h-12 opacity-50" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 rounded border border-gray-700">
                    {video.time}
                  </div>
                  {i === 0 && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-1 rounded flex items-center border border-red-700">
                      <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                      LIVE
                    </div>
                  )}
                </div>

                {/* Video info */}
                <div className="px-3 flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-xs border border-gray-400">
                    {video.channel.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm line-clamp-2">{video.title}</h3>
                    <div className="text-xs text-gray-500 mt-1">
                      {video.channel} • {video.views} views • 2 days ago
                    </div>
                  </div>
                  <FaEllipsisV className="text-gray-400 w-3 h-3" />
                </div>

                {/* Engagement */}
                <div className="mt-2 px-3 flex justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <FaThumbsUp className="w-3 h-3 mr-1" />
                    <span>124K</span>
                  </div>
                  <div className="flex items-center">
                    <FaCommentAlt className="w-3 h-3 mr-1" />
                    <span>3.2K</span>
                  </div>
                  <div className="flex items-center">
                    <FaShare className="w-3 h-3 mr-1" />
                    <span>Share</span>
                  </div>
                </div>
              </div>
            ))}

            {/* "Keep watching" prompt with enhanced border */}
            <div className="bg-amber-50 border-2 border-amber-300 rounded-lg mx-3 p-3 mb-4 shadow-sm">
              <div className="text-sm font-medium mb-1">Keep the videos coming!</div>
              <div className="text-xs text-gray-600 mb-2">We've picked more videos we think you'll love</div>
              <button className="w-full bg-amber-500 text-white rounded-full py-2 text-sm font-medium border border-amber-600">
                Watch 5 more minutes
              </button>
            </div>

            {/* More videos */}
            <div className="p-3 text-sm font-medium flex justify-between items-center">
              <span>Trending now</span>
              <span className="text-amber-500">See all</span>
            </div>

            {/* Trending videos preview with enhanced borders */}
            <div className="flex gap-2 px-3 overflow-x-auto pb-3">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="w-32 flex-shrink-0">
                  <div className="h-24 bg-gray-200 rounded-lg mb-1 flex items-center justify-center border border-gray-300">
                    <FaVideo className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="text-xs font-medium line-clamp-2">
                    {["What I Eat in a Day", "Room Makeover 2023", "iPhone 15 Review", "Morning Routine"][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom navigation with enhanced border */}
          <div className="absolute bottom-0 left-0 right-0 h-14 bg-white border-t-2 border-gray-200 flex justify-around items-center">
            <div className="flex flex-col items-center">
              <FaHome className="w-5 h-5 text-amber-500" />
              <span className="text-[10px] text-amber-500">Home</span>
            </div>
            <div className="flex flex-col items-center text-gray-500">
              <FaSearch className="w-5 h-5" />
              <span className="text-[10px]">Explore</span>
            </div>
            <div className="flex flex-col items-center text-gray-500">
              <FaVideo className="w-5 h-5" />
              <span className="text-[10px]">Create</span>
            </div>
            <div className="flex flex-col items-center text-gray-500">
              <FaUser className="w-5 h-5" />
              <span className="text-[10px]">You</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

