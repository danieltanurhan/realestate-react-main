import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white-200 text-center py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent">
        <Link to="/privacy">Privacy Policy</Link>
        <p>Copyright © 2022 Real Estate React</p>
    </footer>
  );
}

export default Footer;