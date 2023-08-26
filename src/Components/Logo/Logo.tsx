import React from 'react'
import Link from '../../../node_modules/next/link';

function Logo() {
  return (
    <Link href="/">
      <img src="logo.png" alt="logo" />
      &nbsp; PetsPaw
    </Link>
  );
}

export default Logo