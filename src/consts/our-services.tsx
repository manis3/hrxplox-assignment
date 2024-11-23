import { DeliveryIcon, GiftIcon, PaymentIcon, SecurityIcon } from '@/assets/svgs';
import SecurePaymentIcon from '@/assets/svgs/SecurePaymentIcon';

export const ourService = [
  {
    title: 'Secured Payments',
    description: 'Secure payment options to ensure that your transactions are protected and your personal information is kept safe.',
    icon: <SecurePaymentIcon />,
  },
  {
    title: 'Free Delivery Worldwide',
    description: 'Enjoy free worldwide delivery on all orders, no matter where you are located.',
    icon: <DeliveryIcon />,
  },
  {
    title: 'High Quality Materials',
    description: 'We use only the finest materials in our products, ensuring that they are long-lasting and of the highest quality.',
    icon: <SecurityIcon />,
  },
  {
    title: 'Send Gifts Easily',
    description: 'Want to surprise someone special? Our site makes it easy to send a gift to your loved ones with just a few clicks.',
    icon: <GiftIcon />,
  },
];
