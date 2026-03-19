import { useSearchParams } from "react-router-dom";
import WelcomeSection from "@/components/wedding/WelcomeSection";
import OpeningSection from "@/components/wedding/OpeningSection";
import EventSection, { type WeddingEvent } from "@/components/wedding/EventSection";
import FamilySection, { type FamilyMember } from "@/components/wedding/FamilySection";
import GallerySection, { type GalleryPhoto } from "@/components/wedding/GallerySection";
import CountdownSection from "@/components/wedding/CountdownSection";
import WishingSection from "@/components/wedding/WishingSection";
import ContactRSVPSection, { type ContactPerson } from "@/components/wedding/ContactRSVPSection";
import MusicToggle from "@/components/wedding/MusicToggle";
import Footer from "@/components/wedding/Footer";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

// ============================================
// TEMPLATE DATA — This will come from backend
// ============================================

const TEMPLATE_DATA = {
  groomName: "Rahul",
  brideName: "Priya",
  groomFather: "Shri Rajesh Kumar Sharma",
  groomMother: "Smt. Sunita Sharma",
  brideFather: "Shri Manoj Kumar Gupta",
  brideMother: "Smt. Kavita Gupta",
  weddingDate: "15 February 2026",
  weddingDateISO: "2026-02-15T10:00:00",
  upiId: "example@upi",
};

const EVENTS: WeddingEvent[] = [
  {
    id: "1",
    name: "Haldi Ceremony",
    nameHindi: "Haldi",
    date: "13 February 2026",
    time: "10:00 AM onwards",
    venue: "Sharma Niwas",
    venueAddress: "123, Model Town, New Delhi",
    dressCode: "Yellow Traditional",
    mapLink: "https://maps.google.com",
    colorTheme: "haldi",
  },
  {
    id: "2",
    name: "Mehendi Ceremony",
    nameHindi: "Mehendi",
    date: "13 February 2026",
    time: "4:00 PM onwards",
    venue: "Sharma Niwas",
    venueAddress: "123, Model Town, New Delhi",
    dressCode: "Green / Floral",
    mapLink: "https://maps.google.com",
    colorTheme: "mehendi",
  },
  {
    id: "3",
    name: "Sangeet Night",
    nameHindi: "Sangeet",
    date: "14 February 2026",
    time: "7:00 PM onwards",
    venue: "Royal Banquet Hall",
    venueAddress: "45, Ring Road, New Delhi",
    dressCode: "Festive / Indo-Western",
    mapLink: "https://maps.google.com",
    colorTheme: "sangeet",
  },
  {
    id: "4",
    name: "Wedding Ceremony",
    nameHindi: "Wedding",
    date: "15 February 2026",
    time: "Auspicious Hour — 10:30 AM",
    venue: "Grand Palace Lawns",
    venueAddress: "Plot 78, GT Karnal Road, New Delhi",
    dressCode: "Traditional / Ethnic",
    mapLink: "https://maps.google.com",
    colorTheme: "wedding",
  },
  {
    id: "5",
    name: "Grand Reception",
    nameHindi: "Reception",
    date: "16 February 2026",
    time: "7:00 PM onwards",
    venue: "Grand Palace Banquet",
    venueAddress: "Plot 78, GT Karnal Road, New Delhi",
    dressCode: "Formal / Party Wear",
    mapLink: "https://maps.google.com",
    colorTheme: "reception",
  },
];

const BRIDE_FAMILY: FamilyMember[] = [
  { id: "b1", name: "Shri Manoj Kumar", relation: "Father of the Bride", relationHindi: "Father" },
  { id: "b2", name: "Smt. Kavita Gupta", relation: "Mother of the Bride", relationHindi: "Mother" },
  { id: "b3", name: "Rohit Gupta", relation: "Brother", relationHindi: "Brother" },
  { id: "b4", name: "Neha Gupta", relation: "Sister", relationHindi: "Sister" },
];

const GROOM_FAMILY: FamilyMember[] = [
  { id: "g1", name: "Shri Rajesh Kumar", relation: "Father of the Groom", relationHindi: "Father" },
  { id: "g2", name: "Smt. Sunita Sharma", relation: "Mother of the Groom", relationHindi: "Mother" },
  { id: "g3", name: "Amit Sharma", relation: "Brother", relationHindi: "Brother" },
  { id: "g4", name: "Pooja Sharma", relation: "Sister", relationHindi: "Sister" },
];

const GALLERY_PHOTOS: GalleryPhoto[] = [
  { id: "p1", src: gallery1, alt: "Pre-wedding shoot", category: "Pre-Wedding" },
  { id: "p2", src: gallery2, alt: "Haldi ceremony", category: "Haldi" },
  { id: "p3", src: gallery3, alt: "Mehendi designs", category: "Mehendi" },
  { id: "p4", src: gallery4, alt: "Sangeet night", category: "Sangeet" },
  { id: "p5", src: gallery5, alt: "Wedding ceremony", category: "Wedding" },
  { id: "p6", src: gallery6, alt: "Family portrait", category: "Family" },
];

const CONTACTS: ContactPerson[] = [
  { id: "c1", name: "Amit Sharma", role: "Groom's Brother", phone: "+919876543210", whatsapp: "919876543210" },
  { id: "c2", name: "Rohit Gupta", role: "Bride's Brother", phone: "+919876543211", whatsapp: "919876543211" },
];

const SAMPLE_WISHES = [
  { id: "w1", name: "Verma Family", message: "Wishing you both a lifetime of love and happiness! 🙏", timestamp: "" },
  { id: "w2", name: "Kapoor Ji", message: "May God bless this beautiful couple forever. What a lovely pair!", timestamp: "" },
];

const Index = () => {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("guest")?.replace(/\+/g, " ") || "{Guest Name}";

  return (
    <div className="min-h-screen">
      <WelcomeSection
        guestName={guestName}
        groomName={TEMPLATE_DATA.groomName}
        brideName={TEMPLATE_DATA.brideName}
      />
      <OpeningSection
        groomName={TEMPLATE_DATA.groomName}
        brideName={TEMPLATE_DATA.brideName}
        groomFather={TEMPLATE_DATA.groomFather}
        groomMother={TEMPLATE_DATA.groomMother}
        brideFather={TEMPLATE_DATA.brideFather}
        brideMother={TEMPLATE_DATA.brideMother}
        weddingDate={TEMPLATE_DATA.weddingDate}
      />
      <EventSection events={EVENTS} />
      <FamilySection
        brideFamily={BRIDE_FAMILY}
        groomFamily={GROOM_FAMILY}
        brideName={TEMPLATE_DATA.brideName}
        groomName={TEMPLATE_DATA.groomName}
      />
      <GallerySection photos={GALLERY_PHOTOS} />
      <CountdownSection targetDate={TEMPLATE_DATA.weddingDateISO} />
      <WishingSection
        wishes={SAMPLE_WISHES}
        onSubmitWish={(name, message) => console.log("Wish:", { name, message })}
      />
      <ContactRSVPSection
        contacts={CONTACTS}
        showDigitalShagun={true}
        upiId={TEMPLATE_DATA.upiId}
        onRsvpSubmit={(data) => console.log("RSVP:", data)}
      />
      <Footer groomName={TEMPLATE_DATA.groomName} brideName={TEMPLATE_DATA.brideName} />
      <MusicToggle />
    </div>
  );
};

export default Index;
