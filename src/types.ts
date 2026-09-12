export type Language = 'mr' | 'en';

export interface ServiceItem {
  id: string;
  category: 'construction' | 'it' | 'gov_contracts';
  titleMr: string;
  titleEn: string;
  descriptionMr: string;
  descriptionEn: string;
  nicCode?: string;
  featuresMr: string[];
  featuresEn: string[];
  icon: string;
}

export interface UnitInfo {
  id: string;
  name: string;
  marathiName: string;
  unitNumber: number;
  location: string;
  address: string;
  pincode: string;
  focus: string;
  focusMr: string;
}

export interface EnterpriseDetails {
  legalName: string;
  brandName: string;
  brandNameMr: string;
  udyamNumber: string;
  ownerName: string;
  ownerNameMr: string;
  category: string;
  enterpriseType: string;
  incorporationDate: string;
  udyamRegistrationDate: string;
  primaryPhone: string;
  email: string;
  address: {
    doorNo: string;
    street: string;
    landmark: string;
    city: string;
    district: string;
    state: string;
    pin: string;
  };
  geo: {
    lat: number;
    lng: number;
  };
  bankDetails: {
    bankName: string;
    ifsc: string;
    accountPartial: string;
  };
}

export interface QuotationRequest {
  customerName: string;
  phone: string;
  serviceCategory: string;
  workDetails: string;
  estimatedAreaSqFt?: number;
  urgency: 'normal' | 'urgent';
  preferredDate?: string;
}
