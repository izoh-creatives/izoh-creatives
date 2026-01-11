// Icons
import {
  Check,
  Clock,
  Code,
  DollarSign,
  Edit,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Pencil,
  PhoneCall,
  Twitter,
} from "lucide-react";

// Images
import sabaiImg from "./images/sabai.png";
import dignityImg from "./images/dignity-furniture.png";
import vaalImg from "./images/vaal.png";
import menuImg from "./images/menu.jpg";
import newYearImg from "./images/new-year.jpg";
import worshipInvitation from "./images/worship-invitation.jpg";
import birthdayInvitation from "./images/birthday-invitation.jpg";
import chickenPoster from "./images/chicken-poster.jpg";
import partyInvitation from "./images/party-invitation.jpg";
import gymDesign from "./images/gym-design.jpg";
import fashionDesign from "./images/fashion-design.jpg";
import coachingPoster from "./images/coaching-poster.jpg";
import weddingCollage from "./images/wedding-collage.jpg";
import fashionCollage from "./images/fashion-collage.jpg";
import propertyFlyer from "./images/property-flyer.jpg";
import photoCollage from "./images/photo-collage.jpg";
import makeupPoster from "./images/makeup-poster.jpg";
import beautyBanner from "./images/beauty-banner.jpg";
import beautyThumbnail from "./images/beauty-thumbnail.jpg";

// Menu items
export const menuItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    link: "/#services",
  },
  {
    name: "My work",
    link: "/work",
  },
  {
    name: "Contacts",
    link: "/contacts",
  },
];

// Services
export const services = [
  {
    icon: <Code />,
    title: "Web development",
    description:
      "I don't just create websites.I create modern,industry standard websites which bring results.Apart from your website looking amazing,I ensure it is easier for visitors to navigate and take action,whether it is buying a product,enrolling for a course,making a donation,etc.",
  },
  {
    icon: <Pencil />,
    title: "Graphics Design",
    description:
      "I design top quality marketing materials which help create more brand awareness and attract more potential clients,e.g logos,business cards,posters,social media banners,and more.These will generate more clients organically,without spending extra cash on ads",
  },
  {
    icon: <Edit />,
    title: "Photo Editing",
    description:
      "The photos you post tell alot about your brand.Quality pics urge clients to buy your products or services,while poor quality pics turn them off.Let me convert those average looking photos to quality ones,that steal your customer's attention",
  },
];

// Why choose me
export const whys = [
  {
    icon: <Globe />,
    title: "Global Services",
    description:
      "I work online,and can serve you no matter where you come from",
  },
  {
    icon: <Check />,
    title: "Top Quality",
    description: "You get industry standard work,designed to bring results",
  },
  {
    icon: <Clock />,
    title: "No deposit",
    description: "No deposit required.You make payment after the work is done",
  },
  {
    icon: <DollarSign />,
    title: "Best Prices",
    description:
      "You save up to 50% cash while getting the best quality of work",
  },
];

// Project categories
export const projectCategories = [
  { name: "Websites", slug: "websites" },
  { name: "Graphics design", slug: "graphics-design" },
];

// Projects
export const projects = [
  {
    image: chickenPoster,
    category: "graphics-design",
    title: "Hotel promotion poster",
    featured: true,
  },
  {
    image: fashionDesign,
    category: "graphics-design",
    title: "Fashion shop promotion poster",
    featured: true,
  },
  {
    image: weddingCollage,
    category: "graphics-design",
    title: "Happy wedding photo collage",
    featured: true,
  },
  {
    image: photoCollage,
    category: "graphics-design",
    title: "Simple fashion photo collage",
    featured: true,
  },
  {
    image: coachingPoster,
    category: "graphics-design",
    title: "Coaching classes promotion poster",
    featured: true,
  },
  {
    image: propertyFlyer,
    category: "graphics-design",
    title: "Modern real estate flyer",
    featured: true,
  },
  {
    image: gymDesign,
    category: "graphics-design",
    title: "Gym promotion post design",
    featured: true,
  },
  {
    image: vaalImg,
    category: "websites",
    title: "Vaal real estate website",
    link: "https://vaal.co.ke/",
    featured: true,
  },
  {
    image: beautyBanner,
    category: "graphics-design",
    title: "Beauty shop offer banner",
    featured: true,
  },
  {
    image: vaalImg,
    category: "websites",
    title: "Vaal real estate website",
    link: "https://vaal.co.ke/",
    featured: true,
  },
  {
    image: chickenPoster,
    category: "graphics-design",
    title: "Hotel promotion poster",
    featured: true,
  },
  {
    image: partyInvitation,
    category: "graphics-design",
    title: "Birthday party invitation design",
    featured: true,
  },
  {
    image: worshipInvitation,
    category: "graphics-design",
    title: "Worship invitation post",
    featured: true,
  },
  {
    image: menuImg,
    category: "graphics-design",
    title: "Modern menu design",
    featured: true,
  },
  {
    image: beautyThumbnail,
    category: "graphics-design",
    title: "Make up tutorial youtube thumbnail",
    featured: false,
  },
  {
    image: dignityImg,
    category: "websites",
    title: "Dignity furniture website",
    link: "https://dignity.co.ke/",
    featured: true,
  },
  {
    image: vaalImg,
    category: "websites",
    title: "Vaal real estate website",
    link: "https://vaal.co.ke/",
    featured: true,
  },
  {
    image: newYearImg,
    category: "graphics-design",
    title: "New year instagram post",
    featured: true,
  },
  {
    image: birthdayInvitation,
    category: "graphics-design",
    title: "Birthday invitation poster",
    featured: true,
  },
  {
    image: sabaiImg,
    category: "websites",
    title: "Sabai welness spa website",
    link: "https://sabaiwellnessspa.com/",
    featured: true,
  },
  {
    image: fashionCollage,
    category: "graphics-design",
    title: "Fashion sale photo collage",
    featured: false,
  },
  {
    image: makeupPoster,
    category: "graphics-design",
    title: "Make up artist promotion poster",
    featured: false,
  },
];

// Contact info
export const contactInfos = [
  {
    icon: <PhoneCall />,
    title: "Phone Call",
    text: "+254745780515",
    link: "tel:+254745780515",
  },
  {
    icon: <MessageCircle />,
    title: "WhatsApp",
    text: "+254745780515",
    link: "https://wa.me/254745780515",
  },
  {
    icon: <Mail />,
    title: "Email",
    text: "izohcreatives@gmail.com",
    link: "mailto:izohcreatives@gmail.com",
  },
];

// Social media icons
export const socialIcons = [
  {
    icon: <Facebook />,
    title: "Facebook",
    link: "https://www.facebook.com/izohcreatives",
  },
  {
    icon: <Instagram />,
    title: "Instagram",
    link: "https://www.instagram.com/izohcreatives/",
  },
  {
    icon: <Linkedin />,
    title: "Linked In",
    link: "https://www.linkedin.com/in/izoh/",
  },
];
