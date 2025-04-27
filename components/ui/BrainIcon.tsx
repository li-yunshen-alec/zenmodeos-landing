import { Brain, Zap } from "lucide-react"

export default function BrainIcon() {
  return (
    <div className="w-[400px] h-[500px] flex items-center justify-center relative">
      {/* Main brain icon with solid background circle */}
      <div className="relative">
        <div className="w-48 h-48 bg-amber-100 rounded-full flex items-center justify-center">
          <Brain className="w-40 h-40 text-gray-800" />
        </div>

        {/* Dopamine zaps */}
        <Zap className="w-10 h-10 text-amber-500 absolute -top-8 -right-4 transform rotate-12" />
        <Zap className="w-8 h-8 text-amber-500 absolute top-0 -left-8 transform -rotate-12" />
        <Zap className="w-12 h-12 text-amber-500 absolute -bottom-4 -right-8 transform rotate-45" />
      </div>
    </div>
  )
}
