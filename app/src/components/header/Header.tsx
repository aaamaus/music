"use client"

import logo from "@/public/icons/mainLogo.svg";
import Image from "next/image";
import styles from './header.module.css';
import Filters from "@/app/src/components/icons/Filters";
import { useState } from "react";
import {MAIN_PURPLE} from "@/app/src/constants/colors";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(false);
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      <div/>
      <Image src={logo} alt={'logo'} />
      <Link
        href={'/filters'}
        className={styles.filterButton}
        onMouseLeave={() => setHoveredItem(false)}
        onMouseEnter={() => setHoveredItem(true)}
      >
        <Filters stroke={hoveredItem || pathname === '/filters' ? MAIN_PURPLE : ''} />
      </Link>
    </div>
  )
};

export default Header;
