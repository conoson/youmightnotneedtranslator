'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Icon } from '../../../components/Icon';
import LngModal from '../../../components/LngModal';
import TransModal from '../../../components/TransModal';
import { getIcons } from '@/actions/getIcons';
import { useTranslation } from '@/app/i18n/client';

export function Main({ lng }) {
  const [lngIsOpen, setLngIsOpen] = useState(true);
  const [transIsOpen, setTransIsOpen] = useState(true);
  const [icon4Trans, setIcon4Trans] = useState('');
  const { t } = useTranslation(lng, 'ui');
  const [icons, setIcons] = useState([]);
  const [widths, setWidths] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    getIcons().then(icons => {
      setIcons(icons);
    });
  }, []);

  useEffect(() => {
    if (ref.current) {
      const resizeObserver = new ResizeObserver(entries => {
        const newWidths = entries.map(entry => entry.contentRect.width);
        setWidths(newWidths);
      });

      if (ref.current.getElementsByTagName('iconify-icon').length) {
        for (let icon of ref.current.getElementsByTagName('iconify-icon')) {
          resizeObserver.observe(icon);
        }
      }

      // 컴포넌트 언마운트 시 관찰 중지
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [icons]);

  return (
    <main>
      <LngModal lngIsOpen={lngIsOpen} setLngIsOpen={setLngIsOpen} lng={lng} />
      <TransModal
        transIsOpen={transIsOpen}
        setTransIsOpen={setTransIsOpen}
        icon4Trans={icon4Trans}
        lng={lng}
      />

      <div className="flex min-h-screen flex-col items-center justify-center p-10">
        <div
          className="mx-auto mb-4 mt-0 h-12 w-12 cursor-pointer bg-[url(https://api.iconify.design/twemoji:globe-showing-europe-africa.svg?color=%23000000)] bg-cover"
          onClick={() => setLngIsOpen(false)}
        ></div>
        <h1 className="text-balance mb-10 break-keep text-center font-sans text-5xl font-bold">
          {t('title')}
        </h1>
        <div className="mt-8 flex flex-wrap gap-4 gap-y-8 translate-x-[-1.5vw]" ref={ref}>
          {icons.length
            ? icons.map((props, i) => {
                return (
                  <Icon
                    key={i}
                    icon={props.icon}
                    style={{
                      fontSize: widths[i],
                      animationDelay: `${i * 0.03}s`,
                      flexBasis: 'calc(100% / 10 - 14.4px)',
                      flexGrow: 0,
                    }}
                    class={`relative aspect-[1/1] animate-bounce rounded-md border-red-700 bg-cover hover:animate-pulse hover:cursor-pointer [&:nth-of-type(20n+1)]:left-[3vw] [&:nth-of-type(20n+10)]:left-[3vw] [&:nth-of-type(20n+2)]:left-[3vw] [&:nth-of-type(20n+3)]:left-[3vw] [&:nth-of-type(20n+4)]:left-[3vw] [&:nth-of-type(20n+5)]:left-[3vw] [&:nth-of-type(20n+6)]:left-[3vw] [&:nth-of-type(20n+7)]:left-[3vw] [&:nth-of-type(20n+8)]:left-[3vw] [&:nth-of-type(20n+9)]:left-[3vw]`}
                    onClick={() => {
                      setTransIsOpen(false);
                      setIcon4Trans(props.name);
                    }}
                  />
                );
              })
            : null}
        </div>
      </div>
    </main>
  );
}
