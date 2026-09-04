import WhatsAppIcon from "./icons/WhatsAppIcon";
import { WHATSAPP_NUMBER } from "../data";

export default function WhatsAppButton({ full }) {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      className={`btn-primary ${full ? "w-full justify-center" : ""}`}
    >
      <WhatsAppIcon size={18} /> Chat on WhatsApp
    </a>
  );
}
