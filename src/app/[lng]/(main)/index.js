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
        <div className="flex flex-wrap gap-4" ref={ref}>
          {icons.length
            ? icons.map((props, i) => {
                return (
                  <Icon
                    key={i}
                    icon={props.icon}
                    style={{
                      fontSize: widths[i],
                      animationDelay: `${i * 0.03}s`,
                    }}
                    class={`aspect-[1/1] flex-[calc(100%/6)] flex-grow-0 animate-bounce rounded-md border-red-700 bg-cover hover:animate-pulse hover:cursor-pointer [&:nth-of-type(10n-4)]:ml-[5vw]`}
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
