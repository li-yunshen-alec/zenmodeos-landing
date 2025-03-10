interface LogoProps {
  size?: number
  className?: string
}

const Logo = ({ size = 40, className = "" }: LogoProps) => {
  return (
    <div
      className={`relative bg-white rounded-full border-2 border-black flex items-center justify-center font-bold ${className}`}
      style={{ width: size, height: size }}
    >
      <span style={{ fontSize: size * 0.5 }}>C</span>
    </div>
  )
}

export default Logo

