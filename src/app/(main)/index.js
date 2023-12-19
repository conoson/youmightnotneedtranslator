'use client'

import { useState } from 'react';
import { Icon } from '../../components/Icon';
import { Modal } from '../../components/Modal';
import { getIcons } from '@/actions/getIcons';

export function Main() {
  const [isOpen, setIsOpen] = useState(true);

  return <main>
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

    <div class="min-h-screen flex flex-col items-center justify-center p-10" onClick={async ()=>{
      const icons = await getIcons();
      console.log("🚀 ~ file: index.js:16 ~ Main ~ icons:", icons)
    }}>
      <div class="cursor-pointer w-12 h-12 mt-0 mx-auto mb-4 bg-[url(https://api.iconify.design/twemoji:globe-showing-europe-africa.svg?color=%23000000)] bg-cover" onClick={() => setIsOpen(false)}></div>
      <h1 class="text-5xl font-bold mb-10 text-center font-sans">YouMightNotNeedTranslator</h1>
      <div class="flex flex-wrap gap-4">
        {/* <!-- Displaying 30 icons --> */}
        {/* <!-- ... repeat for all 30 icons ... --> */}
        {[...Array(30)].map((_, i) => (
          <Icon key={i} class="border-red-700 [&:nth-of-type(10n-4)]:ml-6 flex-[calc(100%/6)] hover:animate-pulse transition" />
        ))}
      </div>
    </div>
  </main>;
}
