/**
 * !TODO: 아이콘 리스트 json
 */

import { Main } from '@/app/[lng]/(main)';

export default async function Home({ params }) {
  const { lng } = await params;
  return <Main lng={lng} />;
}
