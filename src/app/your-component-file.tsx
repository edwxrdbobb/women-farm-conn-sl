import Image from 'next/image';
import qmoneyLogo from '@/assets/images/qmoney-logo.png'; // Adjust the path as necessary

// ... other imports and component code ...

<div className="text-center mb-6">
  <Image src={qmoneyLogo} alt="QMoney Logo" width={100} height={50} className="mx-auto" /> {/* Adjust width and height as needed */}
  <h2 className="text-xl font-semibold text-green-800">
    Complete Your <span className="text-orange-600 font-bold">{paymentMethod}</span> Purchase
  </h2>
</div> 