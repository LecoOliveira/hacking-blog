import { parseISO, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatarDataEmPortugues(dataString: string) {
  const data = parseISO(dataString);

  return format(data, "d 'de' MMMM 'de' yyyy", { locale: ptBR });
}
