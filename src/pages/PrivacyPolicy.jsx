import { CONTACT_EMAIL, CONTACT_PHONE } from "../data";

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
