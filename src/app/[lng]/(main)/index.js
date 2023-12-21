'use client';

import { useState } from 'react';
import { Icon } from '../../../components/Icon';
import { Modal } from '../../../components/Modal';
import { getIcons } from '@/actions/getIcons';
import { useTranslation } from '@/app/i18n/client';

export function Main({ lng }) {
  const [isOpen, setIsOpen] = useState(true);
  const { t } = useTranslation(lng, 'ui');

  return (
    <main>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        className="flex min-h-screen flex-col items-center justify-center p-10"
        onClick={async () => {
          const icons = await getIcons();
          console.log('🚀 ~ file: index.js:16 ~ Main ~ icons:', icons);
        }}
      >
        <div
          className="mx-auto mb-4 mt-0 h-12 w-12 cursor-pointer bg-[url(https://api.iconify.design/twemoji:globe-showing-europe-africa.svg?color=%23000000)] bg-cover"
          onClick={() => setIsOpen(false)}
        ></div>
        <h1 className="mb-10 text-center font-sans text-5xl font-bold">
          {t('title')}
        </h1>
        <div className="flex flex-wrap gap-4">
          {/* <!-- Displaying 30 icons --> */}
          {/* <!-- ... repeat for all 30 icons ... --> */}
          {[...Array(30)].map((_, i) => (
            <Icon
              key={i}
              className="flex-[calc(100%/6)] border-red-700 transition hover:animate-pulse [&:nth-of-type(10n-4)]:ml-6"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
