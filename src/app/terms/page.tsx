import Link from 'next/link';

export default function Terms() {
  return (
    <div className="w-11/12 sm:w-[600px] md:w-[800px] mx-auto my-40">
      <h2 className="text-4xl my-4 font-semibold text-center">
        <span>Termos</span>
      </h2>
      <p>
        <span>
          Ao acessar ao site
          <Link href="https://hackingblog.online">Hacking BLOG</Link>, concorda
          em cumprir estes termos de serviço, todas as leis e regulamentos
          aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as
          leis locais aplicáveis. Se você não concordar com algum desses termos,
          está proibido de usar ou acessar este site. Os materiais contidos
          neste site são protegidos pelas leis de direitos autorais e marcas
          comerciais aplicáveis.
        </span>
      </p>
      <h2 className="text-xl my-4 font-semibold text-center">
        <span>Uso de Licença</span>
      </h2>
      <p>
        <span>
          É concedida permissão para baixar temporariamente uma cópia dos
          materiais (informações ou software) no site Hacking BLOG , apenas para
          visualização transitória pessoal e não comercial. Esta é a concessão
          de uma licença, não uma transferência de título e, sob esta licença,
          você não pode:&nbsp;
        </span>
      </p>
      <ol>
        <li>
          <span>modificar ou copiar os materiais;&nbsp;</span>
        </li>
        <li>
          <span>
            usar os materiais para qualquer finalidade comercial ou para
            exibição pública (comercial ou não comercial);&nbsp;
          </span>
        </li>
        <li>
          <span>
            tentar descompilar ou fazer engenharia reversa de qualquer software
            contido no site Hacking BLOG;&nbsp;
          </span>
        </li>
        <li>
          <span>
            remover quaisquer direitos autorais ou outras notações de
            propriedade dos materiais; ou&nbsp;
          </span>
        </li>
        <li>
          <span>
            transferir os materiais para outra pessoa ou &apos;espelhe&apos; os
            materiais em qualquer outro servidor.
          </span>
        </li>
      </ol>
      <p>
        <span>
          Esta licença será automaticamente rescindida se você violar alguma
          dessas restrições e poderá ser rescindida por Hacking BLOG a qualquer
          momento. Ao encerrar a visualização desses materiais ou após o término
          desta licença, você deve apagar todos os materiais baixados em sua
          posse, seja em formato eletrónico ou impresso.
        </span>
      </p>
      <h2 className="text-xl my-4 font-semibold text-center">
        <span>Isenção de responsabilidade</span>
      </h2>
      <ol>
        <li>
          <span>
            Os materiais no site da Hacking BLOG são fornecidos &apos;como
            estão&apos;. Hacking BLOG não oferece garantias, expressas ou
            implícitas, e, por este meio, isenta e nega todas as outras
            garantias, incluindo, sem limitação, garantias implícitas ou
            condições de comercialização, adequação a um fim específico ou não
            violação de propriedade intelectual ou outra violação de direitos.
          </span>
        </li>
        <li>
          <span>
            Além disso, o Hacking BLOG não garante ou faz qualquer representação
            relativa à precisão, aos resultados prováveis ​​ou à confiabilidade
            do uso dos materiais em seu site ou de outra forma relacionado a
            esses materiais ou em sites vinculados a este site.
          </span>
        </li>
      </ol>
      <h2 className="text-xl my-4 font-semibold text-center">
        <span>Limitações</span>
      </h2>
      <p>
        <span>
          Em nenhum caso o Hacking BLOG ou seus fornecedores serão responsáveis
          ​​por quaisquer danos (incluindo, sem limitação, danos por perda de
          dados ou lucro ou devido a interrupção dos negócios) decorrentes do
          uso ou da incapacidade de usar os materiais em Hacking BLOG, mesmo que
          Hacking BLOG ou um representante autorizado da Hacking BLOG tenha sido
          notificado oralmente ou por escrito da possibilidade de tais danos.
          Como algumas jurisdições não permitem limitações em garantias
          implícitas, ou limitações de responsabilidade por danos conseqüentes
          ou incidentais, essas limitações podem não se aplicar a você.
        </span>
      </p>
      <h2 className="text-xl my-4 font-semibold text-center">
        <span>Precisão dos materiais</span>
      </h2>
      <p>
        <span>
          Os materiais exibidos no site da Hacking BLOG podem incluir erros
          técnicos, tipográficos ou fotográficos. Hacking BLOG não garante que
          qualquer material em seu site seja preciso, completo ou atual. Hacking
          BLOG pode fazer alterações nos materiais contidos em seu site a
          qualquer momento, sem aviso prévio. No entanto, Hacking BLOG não se
          compromete a atualizar os materiais.
        </span>
      </p>
      <h2 className="text-xl my-4 font-semibold text-center">
        <span>Links</span>
      </h2>
      <p>
        <span>
          O Hacking BLOG não analisou todos os sites vinculados ao seu site e
          não é responsável pelo conteúdo de nenhum site vinculado. A inclusão
          de qualquer link não implica endosso por Hacking BLOG do site. O uso
          de qualquer site vinculado é por conta e risco do usuário.
        </span>
      </p>
      <p>
        <br />
      </p>
      <h3 className="text-xl my-4 font-semibold text-center">
        <span>Modificações</span>
      </h3>
      <p>
        <span>
          O Hacking BLOG pode revisar estes termos de serviço do site a qualquer
          momento, sem aviso prévio. Ao usar este site, você concorda em ficar
          vinculado à versão atual desses termos de serviço.
        </span>
      </p>
      <h3 className="text-xl my-4 font-semibold text-center">
        <span>Lei aplicável</span>
      </h3>
      <p>
        <span>
          Estes termos e condições são regidos e interpretados de acordo com as
          leis do Hacking BLOG e você se submete irrevogavelmente à jurisdição
          exclusiva dos tribunais naquele estado ou localidade.
        </span>
      </p>
    </div>
  );
}
