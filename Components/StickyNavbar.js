import React from 'react';

const StickyNavbar = () => {
  return (
    <nav className="fixed left-0 bottom-0 z-10">
      <ul>
      <li className='bg-[#db4a39] hover:scale-125 w-[30px]'>
          <a href="https://g.co/kgs/jeip69" className="text-white">
            <i className="fab fa-google p-[7.38px]"></i>
          </a>
        </li>
        <li className='bg-[#2867B2] hover:scale-125 w-min'>
          <a href="https://www.linkedin.com/company/akshar-internationals/" className="text-white">
            <i className="fab fa-linkedin p-2"></i>
          </a>
        </li>
        <li className='bg-[#25D366] hover:scale-125 w-min'>
          <a href="https://wa.me/message/NRY7URZ3HQW2G1" className="text-white">
            <i className="fab fa-whatsapp p-2"></i>
          </a>
        </li>
        <li className='bg-[#E1306C] hover:scale-125 w-min'>
          <a href="https://instagram.com/akshar.international34?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D" className="text-white">
            <i className="fab fa-instagram p-2"></i>
          </a>
        </li>
        <li className='bg-[#4267B2] hover:scale-125 w-[30px]'>
          <a href="https://www.facebook.com/aksharinternational34?mibextid=ZbWKwL" className="text-white">
            <i className="fab fa-facebook-f p-2"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default StickyNavbar;