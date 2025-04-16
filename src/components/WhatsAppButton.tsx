import Image from "next/image";

const WhatsAppButton = () => {
  const whatsappNumber = "+919090414106"; // Replace with your WhatsApp number
  const whatsappMessage = "Hello, I have a query about your products!";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition duration-300"
    >
      <Image
        src="/whatsapp.png" 
        alt="WhatsApp"
        width={40}
        height={40}
      />
    </a>
  );
};

export default WhatsAppButton;