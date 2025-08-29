// lib/data/products.ts
export interface Category {
    id: string;
    name: string;
    description: string;
  }
  
  export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    images: string[]; // Multiple images for detail view
    rating: number;
    badge: "NEW" | "POPULAR" | "";
    category: string;
    shortDesc: string;
    fullDesc: string;
    inStock: boolean;
  }
  
  export const categories: Category[] = [
    {
      id: "business",
      name: "Business Cards",
      description: "Professional NFC business cards for networking"
    },
    {
      id: "social",
      name: "Social Cards",
      description: "Share your social media profiles instantly"
    },
    {
      id: "smart",
      name: "Smart Tags",
      description: "Programmable NFC tags for home automation"
    },
    {
      id: "custom",
      name: "Custom Cards",
      description: "Personalized NFC cards with custom designs"
    },
    {
      id: "accessories",
      name: "Accessories",
      description: "NFC card holders, stands, and accessories"
    }
  ];
  
  export const products: Product[] = [
    {
      id: "nfc-pro-business-1",
      name: "NFC Pro Business Card - Premium Metal",
      price: 29.99,
      image: "/images/nfc-metal-business.jpg",
      images: [
        "/images/nfc-metal-business.jpg",
        "/images/nfc-metal-business-back.jpg",
        "/images/nfc-metal-business-hand.jpg"
      ],
      rating: 4.8,
      badge: "POPULAR",
      category: "business",
      shortDesc: "Premium metal business card with programmable NFC chip",
      fullDesc: "Elevate your professional networking with our premium metal NFC business card. Featuring a sleek brushed aluminum finish and programmable NFC chip, this card allows instant sharing of contact information, portfolio links, and social profiles with just a tap. Water-resistant and durable design ensures long-lasting performance.",
      inStock: true
    },
    {
      id: "nfc-social-instagram",
      name: "Instagram NFC Card - Holographic",
      price: 19.99,
      image: "/images/nfc-instagram-holo.jpg",
      images: [
        "/images/nfc-instagram-holo.jpg",
        "/images/nfc-instagram-holo-angle.jpg"
      ],
      rating: 4.6,
      badge: "NEW",
      category: "social",
      shortDesc: "Holographic NFC card for Instagram profile sharing",
      fullDesc: "Share your Instagram profile instantly with this eye-catching holographic NFC card. The rainbow holographic finish creates stunning visual effects while the embedded NFC chip allows followers to access your profile with a simple tap. Perfect for influencers, content creators, and social media enthusiasts.",
      inStock: true
    },
    {
      id: "nfc-smart-tag-home",
      name: "Smart Home NFC Tags (5-Pack)",
      price: 24.99,
      image: "/images/nfc-smart-tags.jpg",
      images: [
        "/images/nfc-smart-tags.jpg",
        "/images/nfc-smart-tags-setup.jpg",
        "/images/nfc-smart-tags-phone.jpg"
      ],
      rating: 4.7,
      badge: "",
      category: "smart",
      shortDesc: "Programmable NFC tags for home automation",
      fullDesc: "Transform your home into a smart home with these versatile NFC tags. Each tag can be programmed to control lights, music, Wi-Fi settings, alarms, and more. The 5-pack includes adhesive backing for easy placement around your home. Compatible with all NFC-enabled smartphones.",
      inStock: true
    },
    {
      id: "nfc-custom-wood",
      name: "Custom Wooden NFC Card",
      price: 34.99,
      image: "/images/nfc-wood-custom.jpg",
      images: [
        "/images/nfc-wood-custom.jpg",
        "/images/nfc-wood-custom-engraved.jpg"
      ],
      rating: 4.9,
      badge: "POPULAR",
      category: "custom",
      shortDesc: "Eco-friendly wooden NFC card with custom engraving",
      fullDesc: "Stand out with our sustainable wooden NFC cards made from premium bamboo. Each card can be custom engraved with your logo, name, or design. The embedded NFC chip is fully programmable and the natural wood grain makes each card unique. Perfect for environmentally conscious professionals.",
      inStock: true
    },
    {
      id: "nfc-card-holder",
      name: "NFC Card Wallet - Leather",
      price: 45.99,
      image: "/images/nfc-wallet-leather.jpg",
      images: [
        "/images/nfc-wallet-leather.jpg",
        "/images/nfc-wallet-leather-open.jpg",
        "/images/nfc-wallet-leather-cards.jpg"
      ],
      rating: 4.5,
      badge: "",
      category: "accessories",
      shortDesc: "Premium leather wallet designed for NFC cards",
      fullDesc: "Store and organize your NFC cards in style with this premium leather wallet. Designed specifically for NFC cards with RFID-blocking technology to prevent unwanted scanning. Holds up to 8 NFC cards plus traditional cards and cash. Handcrafted with genuine leather and durable stitching.",
      inStock: true
    },
    {
      id: "nfc-business-classic",
      name: "Classic NFC Business Card - White",
      price: 16.99,
      image: "/images/nfc-classic-white.jpg",
      images: [
        "/images/nfc-classic-white.jpg",
        "/images/nfc-classic-white-back.jpg"
      ],
      rating: 4.4,
      badge: "",
      category: "business",
      shortDesc: "Clean and professional white NFC business card",
      fullDesc: "A timeless and professional NFC business card featuring a clean white design. Perfect for any industry, this card offers reliable NFC technology for instant contact sharing. Durable plastic construction with matte finish resists scratches and fingerprints.",
      inStock: true
    },
    {
      id: "nfc-tiktok-card",
      name: "TikTok NFC Card - Gradient",
      price: 18.99,
      image: "/images/nfc-tiktok-gradient.jpg",
      images: [
        "/images/nfc-tiktok-gradient.jpg",
        "/images/nfc-tiktok-gradient-phone.jpg"
      ],
      rating: 4.3,
      badge: "NEW",
      category: "social",
      shortDesc: "Vibrant gradient NFC card for TikTok creators",
      fullDesc: "Perfect for TikTok creators and content makers! This vibrant gradient NFC card instantly directs people to your TikTok profile. The eye-catching pink-to-blue gradient design matches TikTok's aesthetic perfectly. High-quality printing ensures colors stay vibrant over time.",
      inStock: true
    },
    {
      id: "nfc-smart-tag-office",
      name: "Office NFC Tags (10-Pack)",
      price: 39.99,
      image: "/images/nfc-office-tags.jpg",
      images: [
        "/images/nfc-office-tags.jpg",
        "/images/nfc-office-tags-desk.jpg"
      ],
      rating: 4.6,
      badge: "",
      category: "smart",
      shortDesc: "Professional NFC tags for office automation",
      fullDesc: "Streamline your office workflow with these professional NFC tags. Program them to join meeting rooms, connect to Wi-Fi, set phone to silent mode, or launch specific apps. The 10-pack includes various sizes and adhesive options for different office applications.",
      inStock: false
    },
    {
      id: "nfc-custom-transparent",
      name: "Transparent NFC Card - Custom Print",
      price: 27.99,
      image: "/images/nfc-transparent-custom.jpg",
      images: [
        "/images/nfc-transparent-custom.jpg",
        "/images/nfc-transparent-custom-light.jpg"
      ],
      rating: 4.7,
      badge: "NEW",
      category: "custom",
      shortDesc: "Crystal clear transparent NFC card with custom printing",
      fullDesc: "Make a lasting impression with our transparent NFC cards. The crystal-clear acrylic material can be custom printed with your design while maintaining transparency. The embedded NFC chip is virtually invisible, creating a striking modern look that's sure to impress clients and contacts.",
      inStock: true
    },
    {
      id: "nfc-stand-charging",
      name: "NFC Card Stand with Wireless Charging",
      price: 89.99,
      image: "/images/nfc-stand-wireless.jpg",
      images: [
        "/images/nfc-stand-wireless.jpg",
        "/images/nfc-stand-wireless-phone.jpg",
        "/images/nfc-stand-wireless-setup.jpg"
      ],
      rating: 4.8,
      badge: "POPULAR",
      category: "accessories",
      shortDesc: "Elegant stand for NFC cards with wireless phone charging",
      fullDesc: "Display your NFC cards beautifully while keeping your phone charged. This elegant bamboo stand features slots for up to 6 NFC cards and includes a built-in wireless charging pad. Perfect for desk setups, reception areas, or retail displays. Compatible with all Qi-enabled devices.",
      inStock: true
    },
    {
      id: "nfc-business-black",
      name: "Executive NFC Card - Matte Black",
      price: 22.99,
      image: "/images/nfc-executive-black.jpg",
      images: [
        "/images/nfc-executive-black.jpg",
        "/images/nfc-executive-black-detail.jpg"
      ],
      rating: 4.5,
      badge: "",
      category: "business",
      shortDesc: "Sophisticated matte black NFC business card",
      fullDesc: "Command attention with our executive matte black NFC business card. The sophisticated dark finish with subtle texture conveys professionalism and style. Premium materials ensure durability while the advanced NFC chip provides reliable performance for all your networking needs.",
      inStock: true
    },
    {
      id: "nfc-linkedin-card",
      name: "LinkedIn NFC Card - Professional Blue",
      price: 21.99,
      image: "/images/nfc-linkedin-blue.jpg",
      images: [
        "/images/nfc-linkedin-blue.jpg",
        "/images/nfc-linkedin-blue-profile.jpg"
      ],
      rating: 4.4,
      badge: "",
      category: "social",
      shortDesc: "Professional blue NFC card for LinkedIn networking",
      fullDesc: "Enhance your professional networking with our LinkedIn-themed NFC card. The professional blue design reflects LinkedIn's brand colors while the NFC chip instantly connects people to your LinkedIn profile. Essential for conferences, job fairs, and business meetings.",
      inStock: true
    },
    {
      id: "nfc-tag-vehicle",
      name: "Car NFC Tags - Dashboard Mount",
      price: 31.99,
      image: "/images/nfc-car-tags.jpg",
      images: [
        "/images/nfc-car-tags.jpg",
        "/images/nfc-car-tags-dashboard.jpg"
      ],
      rating: 4.2,
      badge: "",
      category: "smart",
      shortDesc: "Dashboard-mounted NFC tags for car automation",
      fullDesc: "Upgrade your driving experience with car-specific NFC tags. Mount them on your dashboard to automatically enable navigation mode, start music playlists, or send arrival notifications. The 3-pack includes strong adhesive mounts designed for vehicle environments.",
      inStock: true
    },
    {
      id: "nfc-custom-gold",
      name: "Luxury Gold NFC Card - Custom Design",
      price: 49.99,
      image: "/images/nfc-gold-luxury.jpg",
      images: [
        "/images/nfc-gold-luxury.jpg",
        "/images/nfc-gold-luxury-detail.jpg",
        "/images/nfc-gold-luxury-box.jpg"
      ],
      rating: 4.9,
      badge: "POPULAR",
      category: "custom",
      shortDesc: "Premium gold-finish NFC card with custom design options",
      fullDesc: "The ultimate luxury NFC card featuring genuine gold-colored finish and premium materials. Each card is custom designed to your specifications and comes with a premium gift box. Perfect for executives, luxury brands, or special occasions. Limited edition craftsmanship meets cutting-edge technology.",
      inStock: true
    },
    {
      id: "nfc-display-frame",
      name: "NFC Card Display Frame",
      price: 35.99,
      image: "/images/nfc-display-frame.jpg",
      images: [
        "/images/nfc-display-frame.jpg",
        "/images/nfc-display-frame-cards.jpg"
      ],
      rating: 4.3,
      badge: "",
      category: "accessories",
      shortDesc: "Elegant frame for displaying NFC card collections",
      fullDesc: "Showcase your NFC card collection with this elegant display frame. Holds up to 12 cards in individual slots with LED backlighting to highlight your designs. Perfect for offices, retail spaces, or personal collections. Includes wall mounting hardware and desktop stand options.",
      inStock: true
    },
    {
      id: "nfc-youtube-card",
      name: "YouTube Creator NFC Card",
      price: 20.99,
      image: "/images/nfc-youtube-red.jpg",
      images: [
        "/images/nfc-youtube-red.jpg",
        "/images/nfc-youtube-red-creator.jpg"
      ],
      rating: 4.5,
      badge: "NEW",
      category: "social",
      shortDesc: "Red NFC card designed for YouTube creators",
      fullDesc: "Grow your YouTube channel with this creator-focused NFC card. The bold red design matches YouTube's branding while the NFC chip can link to your channel, latest video, or subscribe page. Include QR code backup for devices without NFC capability.",
      inStock: true
    }
  ];
  
  // Helper functions for data manipulation
  export const getProductById = (id: string): Product | undefined => {
    return products.find(product => product.id === id);
  };
  
  export const getProductsByCategory = (categoryId: string): Product[] => {
    return products.filter(product => product.category === categoryId);
  };
  
  export const getCategoryById = (id: string): Category | undefined => {
    return categories.find(category => category.id === id);
  };
  
  export const getInStockProducts = (): Product[] => {
    return products.filter(product => product.inStock);
  };
  
  export const sortProducts = (products: Product[], sortBy: 'price-asc' | 'price-desc' | 'rating' | 'popularity'): Product[] => {
    return [...products].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          // Popular items first, then by rating
          if (a.badge === 'POPULAR' && b.badge !== 'POPULAR') return -1;
          if (b.badge === 'POPULAR' && a.badge !== 'POPULAR') return 1;
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  };