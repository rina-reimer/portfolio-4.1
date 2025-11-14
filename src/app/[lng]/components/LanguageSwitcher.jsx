'use client'
import { usePathname } from 'next/navigation';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function LanguageSwitcher({ lng }) {
  const pathname = usePathname().substring(3);
  console.log("Rendering LanguageSwitcher:", lng);

  return (
    <div className='fixed right-8 top-16 z-[1000000]'>
      <Dropdown className='min-w-0 w-fit' backdrop="blur">
        <DropdownTrigger>
          <Button isIconOnly aria-label="Like" className='bg-beige'>
            <GlobeAltIcon className="text-navy h-12 w-12" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Language Selection">
          <DropdownItem key="en" href={`/en${pathname}`}>
            <span className={`${lng === 'en' ? 'text-yellow' : 'text-navy'}`}>EN</span>
          </DropdownItem>
          <DropdownItem key="de" href={`/de${pathname}`}>
            <span className={`${lng === 'de' ? 'text-yellow' : 'text-navy'}`}>DE</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}