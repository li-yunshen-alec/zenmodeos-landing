import Link from "next/link"
import Footer from "@/components/Footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-amber-600 hover:underline mb-8 inline-block">
            &larr; Back to Home
          </Link>

          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose max-w-none">
            <p className="mb-4">
              Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Introduction</h2>
            <p>
              Clear ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
              your personal information is collected, used, and disclosed by Clear.
            </p>
            <p>This Privacy Policy applies to our website and our application Clear (together, our "Service").</p>
            <p>
              By accessing or using our Service, you signify that you have read, understood, and agree to our
              collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Data Collection and Use</h2>
            <p>
              <strong>We do not collect or store your personal data on our servers.</strong> All user data, including
              settings, configurations, and usage statistics, remains locally on your device. This approach ensures
              maximum privacy and security for our users.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Local Storage</h2>
            <p>Clear stores all user data locally on your device. This includes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>App settings and preferences</li>
              <li>Blocking configurations</li>
              <li>Usage statistics</li>
              <li>Restriction schedules</li>
            </ul>
            <p>This data never leaves your device and is not transmitted to our servers or any third parties.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Analytics</h2>
            <p>
              We do not use third-party analytics services that collect personal information. Any usage statistics are
              stored locally on your device and are only used to improve your experience with the app.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Cookies</h2>
            <p>
              Our website may use cookies to enhance your experience. Cookies are files with a small amount of data that
              are stored on your device. You can instruct your browser to refuse all cookies or to indicate when a
              cookie is being sent.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Security</h2>
            <p>
              We value your trust in providing us your personal information, thus we are striving to use commercially
              acceptable means of protecting it. But remember that no method of transmission over the internet, or
              method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
              are effective when they are posted on this page.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>
              <a href="mailto:support@clearapp.io" className="text-amber-600 hover:underline">
                support@clearapp.io
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
