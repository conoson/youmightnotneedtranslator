'use client';

import { languages, languageNames, languageEnglishNames } from '@/app/i18n/settings';
import { useRouter } from 'next/navigation';

export default function Modal({ lngIsOpen, setLngIsOpen, lng }) {
  const router = useRouter();

  function setLng(e) {
    router.push(`/${e.target.value}`);
  }

  return (
    <div
      className="fixed left-0 top-0 z-10 h-full w-full overflow-auto bg-[rgba(0,0,0,0.4)] pt-16"
      hidden={lngIsOpen}
      onClick={e => {
        setLngIsOpen(true);
      }}
    >
      <div
        className="mx-auto my-[5%] w-4/5 border border-[#888] bg-white p-5 dark:border-[#aaa] dark:bg-[#333]"
        onClick={e => e.stopPropagation()}
      >
        <span
          className="float-right text-2xl font-bold text-[#aaa] hover:cursor-pointer hover:text-black hover:no-underline"
          onClick={e => {
            setLngIsOpen(true);
          }}
        >
          &times;
        </span>
        <p>Select a language:</p>
        {/*  글로벌 아이콘이 아니라 각 나라의 아이콘 */}
        <iconify-icon className="w-6 h-6" icon={`twemoji:flag-${languageEnglishNames[lng]}`}></iconify-icon>
        <select
          name="languages"
          id="languages"
          className="dark:bg-[#333]"
          onChange={e => setLng(e)}
        >
          {languages.map(language => {
            return (
              <option
                key={language}
                value={language}
                selected={lng === language}
              >
                {languageNames[language]}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
