import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/get-dictionary';
import { HomecareClientPage } from '@/components/homecare-client-page';

export default async function HomecarePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.homecare;

  return <HomecareClientPage dictionary={t} />;
}
