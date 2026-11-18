import { Component } from '@angular/core';
import { IMAGES } from '../../../core/constants/image-assets';

interface LinkColumn {
  title: string;
  links: string[];
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly paymentsImage = IMAGES.payments;
  protected readonly year = new Date().getFullYear();

  protected readonly columns: LinkColumn[] = [
    { title: 'ABOUT', links: ['Contact Us', 'About Us', 'Careers', 'Flipkart Stories', 'Press', 'Corporate Information'] },
    { title: 'GROUP COMPANIES', links: ['Myntra', 'Cleartrip', 'Shopsy'] },
    { title: 'HELP', links: ['Payments', 'Shipping', 'Cancellation & Returns', 'FAQ'] },
    { title: 'CONSUMER POLICY', links: ['Cancellation & Returns', 'Terms Of Use', 'Security', 'Privacy', 'Sitemap', 'Grievance Redressal', 'EPR Compliance', 'FSSAI Food Safety', 'Connect App'] },
  ];

  protected readonly address = [
    'Flipkart Internet Private Limited,',
    'Buildings Alyssa, Begonia &',
    'Clove Embassy Tech Village,',
    'Outer Ring Road, Devarabeesanahalli Village,',
    'Bengaluru, 560103,',
    'Karnataka, India',
  ];

  protected readonly socials = ['Facebook', 'X', 'YouTube', 'Instagram'];
  protected readonly bottomLinks = ['Become a Seller', 'Advertise', 'Gift Cards', 'Help Center'];
}
