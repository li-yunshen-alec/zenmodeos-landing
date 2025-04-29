import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const supportEmail = "support@clearspace.app"

  return (
    <footer className="bg-amber-50 border-t-2 border-black w-full py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">Clear</h3>
            <p className="text-sm text-gray-700">The app that helps you take back control and block distractions.</p>
            <p className="text-sm text-gray-700">&copy; {currentYear} Clear App. All rights reserved.</p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy-policy" className="text-sm hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="text-sm hover:underline">
                Terms of Use
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">Contact</h3>
            <p className="text-sm text-gray-700">Questions or feedback? Email us at:</p>
            <a href={`mailto:${supportEmail}`} className="text-sm font-medium hover:underline">
              {supportEmail}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
