'use client';

import { languages, languageNames } from "@/app/i18n/settings";

export function Modal({ isOpen, setIsOpen }) {
  return (
    <div
      className="fixed left-0 top-0 z-10 h-full w-full overflow-auto bg-[rgba(0,0,0,0.4)] pt-16"
      hidden={isOpen}
      onClick={e => {
        setIsOpen(true);
      }}
    >
      <div
        className="mx-auto my-[5%] w-4/5 border border-[#888] bg-white p-5 dark:bg-[#333] dark:border-[#aaa]"
        onClick={e => e.stopPropagation()}
      >
        <span className="float-right text-2xl font-bold text-[#aaa] hover:cursor-pointer hover:text-black hover:no-underline">
          &times;
        </span>
        <p>Select a language:</p>
        <select name="languages" id="languages" className="dark:bg-[#333]">
          {
            languages.map((language) => {
              return (
                <option key={language} value={language}>{languageNames[language]}</option>
              );
            })
          }
        </select>
      </div>
    </div>
  );
}
