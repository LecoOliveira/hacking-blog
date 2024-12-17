import fs from 'fs';
import path from 'path';

export type Props = Promise<{
  props: {
    quote: string;
    author: string;
  };
}>;

export default async function DailyQuote(): Props {
  const filePath = path.join(process.cwd(), 'frases.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(jsonData);
  const date = new Date();
  const index = date.getDate() % data.frases.length;
  const randomQuote = data['frases'][index];

  return {
    props: {
      quote: randomQuote.frase,
      author: randomQuote.author,
    },
  };
}
