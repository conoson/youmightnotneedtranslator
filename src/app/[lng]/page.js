/**
 * !TODO: 아이콘 리스트 json
 */

import { Main } from '@/app/[lng]/(main)';

export default function Home({ params: { lng } }) {
  return <Main lng={lng} />;
}
