import { parseISO, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatarDataEmPortugues(dataString: string) {
  try {
    const data = parseISO(dataString);

    return format(data, "d 'de' MMMM 'de' yyyy", { locale: ptBR });
  } catch {
    return '';
  }
}
