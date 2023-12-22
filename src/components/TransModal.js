'use client';

import { useTranslation } from '@/app/i18n/client';

export default function Modal({ transIsOpen, setTransIsOpen, icon4Trans, lng }) {
  const { t } = useTranslation(lng, 'trans');

  return (
    <div
      className="fixed left-0 top-0 z-10 h-full w-full overflow-auto bg-[rgba(0,0,0,0.4)] pt-16"
      hidden={transIsOpen}
      onClick={e => {
        setTransIsOpen(true);
      }}
    >
      <div
        className="mx-auto my-[5%] w-4/5 border border-[#888] bg-white p-5 dark:border-[#aaa] dark:bg-[#333]"
        onClick={e => e.stopPropagation()}
      >
        <span
          className="float-right text-2xl font-bold text-[#aaa] hover:cursor-pointer hover:text-black hover:no-underline"
          onClick={e => {
            setTransIsOpen(true);
          }}
        >
          &times;
        </span>
        <p>{t(icon4Trans)}</p>
      </div>
    </div>
  );
}
