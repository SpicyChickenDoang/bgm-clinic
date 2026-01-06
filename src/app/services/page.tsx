import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/i18n-config';
import Page from '../[lang]/services/page';

export default async function Services({ params: { lang } }: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);
  return <Page params={{ lang }} dictionary={dictionary} />;
}
