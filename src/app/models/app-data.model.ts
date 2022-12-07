import { AboutSectionData } from "./about-section-data.model";
import { AddressSectionData } from "./address-section-data.model.data";
import { FeatureSectionData } from "./feature-section-data.model"
import { FooterData } from "./footer-data";

export interface AppData {
  features: FeatureSectionData;

  about: AboutSectionData;

  address: AddressSectionData;

  footer: FooterData
}

