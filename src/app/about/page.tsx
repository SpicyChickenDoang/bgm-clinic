import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/i18n-config';
import Page from '../[lang]/about/page';

export default async function About({ params: { lang } }: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);
  return <Page params={{ lang }} dictionary={dictionary} />;
}
