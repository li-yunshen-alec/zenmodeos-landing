import Link from "next/link"
import Footer from "@/components/Footer"

export default function TermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-amber-600 hover:underline mb-8 inline-block">
            &larr; Back to Home
          </Link>

          <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>

          <div className="prose max-w-none">
            <p className="mb-4">
              Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using Clear (&quot;the App&quot;), you agree to be bound by these Terms of Use. If
              you do not agree to these terms, please do not use the App.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Description of Service</h2>
            <p>
              Clear is an application designed to help users block distracting content, including adult websites and
              applications. The App operates locally on your device and does not transmit your data to external servers.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. User Data</h2>
            <p>
              All user data, including settings, configurations, and usage statistics, remains on your device. We do not
              collect, store, or transmit your personal data to our servers or third parties.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. License and Restrictions</h2>
            <p>
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license
              to download and use the App for your personal, non-commercial purposes.
            </p>
            <p>You may not:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Copy, modify, or create derivative works of the App</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Remove any copyright or other proprietary notices from the App</li>
              <li>Transfer, sublicense, lease, lend, rent, or otherwise distribute the App to any third party</li>
              <li>
                Use the App for any illegal purpose or in violation of any local, state, national, or international law
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Updates and Changes</h2>
            <p>
              We may from time to time develop patches, bug fixes, updates, upgrades, and other modifications to improve
              the App (&quot;Updates&quot;). You agree that we may update the App automatically without providing notice to you.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Disclaimer of Warranties</h2>
            <p>
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
              INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              TITLE, AND NON-INFRINGEMENT.
            </p>
            <p>
              WE DO NOT WARRANT THAT THE APP WILL FUNCTION WITHOUT ERROR OR INTERRUPTION, OR THAT DEFECTS WILL BE
              CORRECTED.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT,
              PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES
              FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR
              USE OF OR INABILITY TO USE THE APP.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Clear and its officers, directors, employees, agents,
              and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, and
              expenses arising from: (a) your use of the App; (b) your violation of these Terms; or (c) your violation
              of any third-party right, including without limitation any copyright, property, or privacy right.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Termination</h2>
            <p>
              We may terminate or suspend your access to the App immediately, without prior notice or liability, for any
              reason whatsoever, including without limitation if you breach these Terms.
            </p>
            <p>Upon termination, your right to use the App will immediately cease.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">10. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will try to provide at least 30 days&apos; notice prior to any new terms taking effect.
            </p>
            <p>
              By continuing to access or use our App after those revisions become effective, you agree to be bound by
              the revised terms.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">11. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without
              regard to its conflict of law provisions.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">12. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
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
