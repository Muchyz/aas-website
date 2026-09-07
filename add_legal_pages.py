#!/usr/bin/env python3
"""
Adds Privacy Policy and Terms of Use pages, wires up routes, and fixes
the broken footer link (was pointing Privacy Policy -> /faq).
Run from project root: python3 add_legal_pages.py
"""

def replace_in_file(path, old, new, label):
    with open(path, "r") as f:
        content = f.read()
    if old not in content:
        print(f"⚠️  SKIPPED ({label}): anchor text not found in {path}")
        return
    content = content.replace(old, new, 1)
    with open(path, "w") as f:
        f.write(content)
    print(f"✅ Updated {path} ({label})")

def write_file(path, content, label):
    with open(path, "w") as f:
        f.write(content)
    print(f"✅ Wrote {path} ({label})")

# ---------- 1. Privacy Policy page ----------
privacy_jsx = '''import { CONTACT_EMAIL, CONTACT_PHONE } from "../data";

export default function PrivacyPolicy() {
  return (
    <section className="container-page section-pad-sm max-w-3xl">
      <p className="tag-chip mb-3"><span className="tag-dot" /> Legal</p>
      <h1 className="text-3xl font-bold text-navy mb-4">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-10">Last updated: {new Date().getFullYear()}</p>

      <div className="space-y-8 text-gray-600 text-sm leading-relaxed">
        <div>
          <h3 className="text-navy font-bold text-base mb-2">Introduction</h3>
          <p>Advanced Automation Systems Limited ("we", "us", "our") respects your privacy. This policy explains what information we collect through this website, why we collect it, and how we handle it, in line with Kenya's Data Protection Act, 2019.</p>
        </div>

        <div>
          <h3 className="text-navy font-bold text-base mb-2">Information we collect</h3>
          <p>When you use our contact form or reach out via WhatsApp, phone, or email, we may collect your name, phone number, email address, and the content of your message. We do not require account creation, and we do not collect payment information through this website.</p>
        </div>

        <div>
          <h3 className="text-navy font-bold text-base mb-2">How we use your information</h3>
          <p>We use the information you provide solely to respond to your enquiry, prepare quotations, and communicate with you about services you've requested. We do not sell, rent, or trade your personal information to third parties.</p>
        </div>

        <div>
          <h3 className="text-navy font-bold text-base mb-2">Third-party services</h3>
          <p>If you contact us via WhatsApp, your message is handled according to WhatsApp's own privacy policy, as it is a third-party platform. We link to WhatsApp for your convenience but do not control how WhatsApp processes your data on their end.</p>
        </div>

        <div>
          <h3 className="text-navy font-bold text-base mb-2">Data retention</h3>
          <p>We retain enquiry and communication records only as long as necessary to respond to your request, maintain project records if you become a client, or meet legal and accounting obligations.</p>
        </div>

        <div>
          <h3 className="text-navy font-bold text-base mb-2">Your rights</h3>
          <p>Under the Data Protection Act, 2019, you have the right to access, correct, or request deletion of personal data we hold about you. To exercise these rights, contact us using the details below.</p>
        </div>

        <div>
          <h3 className="text-navy font-bold text-base mb-2">Cookies</h3>
          <p>This website does not use tracking cookies or browser storage to collect personal information about visitors.</p>
        </div>

        <div>
          <h3 className="text-navy font-bold text-base mb-2">Changes to this policy</h3>
          <p>We may update this policy from time to time. Changes will be posted on this page with an updated revision date.</p>
        </div>

        <div>
          <h3 className="text-navy font-bold text-base mb-2">Contact us</h3>
          <p>For questions about this privacy policy or your personal data, contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand font-medium">{CONTACT_EMAIL}</a> or {CONTACT_PHONE}.</p>
        </div>
      </div>
    </section>
  );
}
'''
write_file("src/pages/PrivacyPolicy.jsx", privacy_jsx, "create Privacy Policy page")

# ---------- 2. Terms of Use page ----------
terms_jsx = '''import { CONTACT_EMAIL, CONTACT_PHONE } from "../data";

export default function TermsOfUse() {
  return (
    <section className="container-page section-pad-sm max-w-3xl">
      <p className="tag-chip mb-3"><span className="tag-dot" /> Legal</p>
      <h1 className="text-3xl font-bold text-navy mb-4">Terms of Use</h1>
      <p className="text-gray-500 text-sm mb-10">Last updated: {new Date().getFullYear()}</p>

      <div className="space-y-8 text-gray-600 text-sm leading-relaxed">
        <div>
          <h3 className="text-navy font-bold text-base mb-2">Acceptance of terms</h3>
          <p>By accessing and using this website, you agree to these Terms of Use. If you do not agree, please do not use this site.</p>
        </div>

        <div>
          <h3 className="text-navy font-bold text-base mb-2">About our services</h3>
          <p>Advanced Automation Systems Limited provides electrical installation, automation, control, instrumentation, and related engineering services. Information on this website is provided for general informational purposes and does not constitute a binding quotation or contractual offer unless confirmed separately in writing.</p>
        </div>

        <div>
          <h3 className="text-navy font-bold text-base mb-2">Quotations and pricing</h3>
          <p>Any pricing, project examples, or service descriptions on this site are indicative only. Actual project scope, pricing, and timelines are confirmed through a formal quotation or contract following a site assessment.</p>
        </div>

        <div>
          <h3 className="text-navy font-bold text-base mb-2">Intellectual property</h3>
          <p>All content on this website, including text, logos, and images, is the property of Advanced Automation Systems Limited unless otherwise credited, and may not be reproduced without permission.</p>
        </div>

        <div>
          <h3 className="text-navy font-bold text-base mb-2">Acceptable use</h3>
          <p>You agree not to misuse this website, including attempting unauthorized access, disrupting site functionality, or submitting false or misleading information through our contact channels.</p>
        </div>

        <div>
          <h3 className="text-navy font-bold text-base mb-2">Limitation of liability</h3>
          <p>While we make reasonable efforts to keep information on this site accurate and up to date, we make no warranties about its completeness or accuracy. We are not liable for any loss arising from reliance on general information published here, as opposed to a formal written quotation or contract.</p>
        </div>

        <div>
          <h3 className="text-navy font-bold text-base mb-2">Governing law</h3>
          <p>These terms are governed by the laws of Kenya. Any disputes arising from use of this website or our services will be subject to the jurisdiction of Kenyan courts.</p>
        </div>

        <div>
          <h3 className="text-navy font-bold text-base mb-2">Changes to these terms</h3>
          <p>We may revise these terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.</p>
        </div>

        <div>
          <h3 className="text-navy font-bold text-base mb-2">Contact us</h3>
          <p>Questions about these Terms of Use can be sent to <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand font-medium">{CONTACT_EMAIL}</a> or {CONTACT_PHONE}.</p>
        </div>
      </div>
    </section>
  );
}
'''
write_file("src/pages/TermsOfUse.jsx", terms_jsx, "create Terms of Use page")

# ---------- 3. Wire up App.jsx ----------
replace_in_file(
    "src/App.jsx",
    'import Contact from "./pages/Contact";',
    'import Contact from "./pages/Contact";\nimport PrivacyPolicy from "./pages/PrivacyPolicy";\nimport TermsOfUse from "./pages/TermsOfUse";',
    "import legal pages",
)

replace_in_file(
    "src/App.jsx",
    '        <Route path="/contact" element={<Contact />} />',
    '        <Route path="/contact" element={<Contact />} />\n        <Route path="/privacy-policy" element={<PrivacyPolicy />} />\n        <Route path="/terms-of-use" element={<TermsOfUse />} />',
    "add legal routes",
)

# ---------- 4. Fix Footer.jsx: correct Privacy Policy link + add Terms of Use ----------
replace_in_file(
    "src/components/Footer.jsx",
    '''              <span>© {new Date().getFullYear()} Advanced Automation Systems Limited. All rights reserved.</span>
              <Link to="/faq" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>''',
    '''              <span>© {new Date().getFullYear()} Advanced Automation Systems Limited. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
                <Link to="/terms-of-use" className="hover:text-blue-400 transition-colors">Terms of Use</Link>
              </div>''',
    "fix footer legal links",
)

print("\nDone. Run 'npm run dev' to preview.")
print("Visit /privacy-policy and /terms-of-use to check the new pages.")
print("Footer now links to both correctly instead of the broken /faq link.")
