import { CONTACT_EMAIL, CONTACT_PHONE } from "../data";

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
