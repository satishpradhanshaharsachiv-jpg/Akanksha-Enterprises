import { EnterpriseDetails, ServiceItem, UnitInfo } from '../types';

export const ENTERPRISE_DATA: EnterpriseDetails = {
  legalName: 'SP CONSTRUCTION',
  brandName: 'Akanksha Enterprises',
  brandNameMr: 'आकांक्षा इंटरप्राईजेस',
  udyamNumber: 'UDYAM-MH-04-0147670',
  ownerName: 'Shri Satish Ashok Pradhan',
  ownerNameMr: 'श्री. सतीश अशोक प्रधान',
  category: 'SC',
  enterpriseType: 'Micro Enterprise (सूक्ष्म उद्योग)',
  incorporationDate: '04/12/2018',
  udyamRegistrationDate: '24/10/2023',
  primaryPhone: '8668235395',
  email: 'Satishpradhan339@gmail.com',
  address: {
    doorNo: 'Flat / Door No. 217, No. 4',
    street: 'Subhedar Ramji Ambedkar Marg',
    landmark: 'Near CIPET College / Misarwadi',
    city: 'Chhatrapati Sambhajinagar (Aurangabad)',
    district: 'Chhatrapati Sambhajinagar',
    state: 'Maharashtra',
    pin: '431003',
  },
  geo: {
    lat: 19.9818099,
    lng: 75.2211186,
  },
  bankDetails: {
    bankName: 'State Bank of India',
    ifsc: 'SBIN0003950',
    accountPartial: '...339011',
  },
};

export const ENTERPRISE_UNITS: UnitInfo[] = [
  {
    id: 'unit-3',
    name: 'AKANKSHA ENTERPRISES',
    marathiName: 'आकांक्षा इंटरप्राईजेस',
    unitNumber: 3,
    location: 'Subhedar Ramji Ambedkar M, Chatrapati Sambhajinagar',
    address: 'No 217 No 4, Near CIPET College, Chatrapati Sambhajinagar',
    pincode: '431003',
    focus: 'General Construction, Maintenance & IT Services Hub',
    focusMr: 'बांधकाम, मेंटेनन्स व आयटी / डिजिटल सोल्यूशन्स केंद्र',
  },
  {
    id: 'unit-2',
    name: 'SP CONSTRUCTION',
    marathiName: 'एस. पी. कन्स्ट्रक्शन',
    unitNumber: 2,
    location: 'Misarwadi, Galli No. 11, Chatrapati Sambhajinagar',
    address: 'Galli No. 11, Misarwadi, CIPET College Back Side, Aurangabad',
    pincode: '431001',
    focus: 'Heavy Building Construction, Structural Repairs & Civil Works',
    focusMr: 'स्थापत्य बांधकाम, स्ट्रक्चरल दुरुस्ती व सिव्हिल कंत्राट कामे',
  },
  {
    id: 'unit-1',
    name: 'AKSHARA ENTERPRISES',
    marathiName: 'अक्षरा इंटरप्राईजेस',
    unitNumber: 1,
    location: 'Swami Vivekanand Nagar, TV Center Hadco',
    address: 'D 54/3, Swami Vivekanand Nagar, TV Center Hadco, Aurangabad',
    pincode: '431001',
    focus: 'Commercial & Residential Support, Material Supply',
    focusMr: 'व्यावसायिक व निवासी पुरवठा आणि प्रोजेक्ट मॅनेजमेंट',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'civil-construction',
    category: 'construction',
    titleMr: 'इमारत बांधकाम व सिव्हिल वर्क्स',
    titleEn: 'Building Construction & Civil Works',
    nicCode: 'NIC 4100 - Construction of Buildings',
    descriptionMr: 'व्यावसायिक, निवासी व शासकीय इमारतींचे दर्जेदार बांधकाम. मजबूत पायाभरणी व कुशल कारागिरांसह वेळेत काम पूर्ण करण्याची खात्री.',
    descriptionEn: 'High-quality residential, commercial, and institutional construction with reinforced structures, precision engineering, and timely delivery.',
    featuresMr: [
      'निवासी व कमर्शियल बिल्डिंग बांधकाम',
      'पायाभरणी, कॉलम, स्लॅब व आरसीसी कामे',
      'गुणवत्तापूर्ण मटेरियल व आधुनिक तंत्रज्ञानाचा वापर',
      'स्थानिक नियमांनुसार व परवानग्यांसह नियोजन'
    ],
    featuresEn: [
      'Residential and commercial building development',
      'RCC frame structure, slab casting, and masonry',
      'Quality assured materials with on-site inspection',
      'Engineered planning adhering to safety codes'
    ],
    icon: 'HardHat',
  },
  {
    id: 'building-repairs',
    category: 'construction',
    titleMr: 'दुरुस्ती, नूतनीकरण व मेंटेनन्स',
    titleEn: 'Alteration, Repair & Maintenance',
    nicCode: 'NIC 41002 - Alteration, addition, repair & maintenance',
    descriptionMr: 'जुन्या व चालू इमारतींचे नूतनीकरण, गळती प्रतिबंधक (Waterproofing), प्लास्टर, रंगकाम व स्ट्रक्चरल रिपेअर कामे.',
    descriptionEn: 'End-to-end building restoration, waterproofing, plastering, structural strengthening, and annual maintenance contracts.',
    featuresMr: [
      'इमारतींचे अंतर्गत व बाह्य नूतनीकरण (Renovation)',
      'वॉटरप्रूफिंग व सिपेज दुरुस्ती',
      'फ्लोअरिंग, टाइल्स, प्लंबिंग व इलेक्ट्रिकल मेंटेनन्स',
      'स्वतःच्या खात्यावर किंवा कंत्राट तत्वावर कामे'
    ],
    featuresEn: [
      'Comprehensive interior & exterior renovation',
      'Terrace & basement waterproofing solutions',
      'Flooring, tiling, painting, and plumbing restoration',
      'Flexible contract or turnkey milestone-based terms'
    ],
    icon: 'Wrench',
  },
  {
    id: 'it-programming',
    category: 'it',
    titleMr: 'सॉफ्टवेअर प्रोग्रामिंग व कन्सल्टन्सी',
    titleEn: 'Computer Programming & IT Services',
    nicCode: 'NIC 62011 - Writing, modifying, testing computer programs',
    descriptionMr: 'ग्राहकांच्या गरजेनुसार सानुकूल सॉफ्टवेअर डेव्हलपमेंट, टेस्टिंग, कोड मॉडिफिकेशन व टेक्निकल कन्सल्टन्सी सेवा.',
    descriptionEn: 'Custom software programming, client-specific application modification, testing, office automation, and IT technical support.',
    featuresMr: [
      'सानुकूल (Custom) बिझनेस सॉफ्टवेअर व टूल्स',
      'ऑफिस ऑटोमेशन व डेटा मॅनेजमेंट सिस्टीम्स',
      'सॉफ्टवेअर मॉडिफिकेशन, टेस्टिंग व बग फिक्सिंग',
      'आयटी हार्डवेअर व नेटवर्क सेटअप सल्लागार'
    ],
    featuresEn: [
      'Customized business workflows & utility software',
      'Office automation & billing / inventory systems',
      'Code writing, system modifications & quality testing',
      'IT infrastructure and networking consultancy'
    ],
    icon: 'Laptop',
  },
  {
    id: 'gem-procurement',
    category: 'gov_contracts',
    titleMr: 'GeM पोर्टल व शासकीय कंत्राट पुरवठा',
    titleEn: 'GeM Portal & Government Supplies',
    nicCode: 'Government e-Marketplace Registered',
    descriptionMr: 'भारत सरकारच्या GeM पोर्टलवर अधिकृत नोंदणीकृत पुरवठादार. सरकारी संस्था, महापालिका व महामंडळांना दर्जेदार सेवा व साहित्य पुरवठा.',
    descriptionEn: 'Certified vendor on Government e-Marketplace (GeM). Supplying civil maintenance, materials, and technical services to public departments.',
    featuresMr: [
      'GeM पोर्टल अधिकृत व्हेन्डर मान्यता',
      'सरकारी नियमांनुसार पारदर्शक टेंडर व बिलिंग',
      'एमएसएमई (MSME) प्राधान्य व उद्योग आधार नोंदणी',
      'वेळेवर पुरवठा व अधिकृत गुणवत्ता प्रमाणपत्रे'
    ],
    featuresEn: [
      'Registered supplier on Government e-Market (GeM)',
      'Transparent documentation, e-invoicing & GST compliance',
      'MSME public procurement preferential status',
      'Strict adherence to delivery schedules and standards'
    ],
    icon: 'FileCheck',
  },
];

export const CERTIFICATE_HIGHLIGHTS = [
  {
    labelMr: 'उद्योग नोंदणी क्रमांक',
    labelEn: 'Udyam Reg. Number',
    value: 'UDYAM-MH-04-0147670',
    badge: 'Verified Govt of India',
  },
  {
    labelMr: 'उद्योग प्रकार',
    labelEn: 'Enterprise Category',
    value: 'Micro Enterprise (सूक्ष्म उद्योग)',
    badge: 'Manufacturing & Services',
  },
  {
    labelMr: 'नोंदणी / स्थापना वर्ष',
    labelEn: 'Incorporated Since',
    value: '04/12/2018 (Active)',
    badge: '6+ Years of Trust',
  },
  {
    labelMr: 'जिल्हा उद्योग केंद्र',
    labelEn: 'District Industries Centre',
    value: 'Aurangabad (Chhatrapati Sambhajinagar)',
    badge: 'Maharashtra State',
  },
  {
    labelMr: 'संचालक / मालक',
    labelEn: 'Proprietor',
    value: 'श्री. सतीश अशोक प्रधान (Shri Satish Ashok Pradhan)',
    badge: 'Authorized Signatory',
  },
];
