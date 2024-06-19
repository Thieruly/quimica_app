import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Introducao() {
  return (
    <section id="introducao" className="content-section">
      <h2>O que é a Química Orgânica?</h2>
      <p>A química orgânica é uma disciplina fundamental da química que estuda a estrutura, propriedades, composição, reações e síntese de compostos contendo carbono. Originalmente, acreditava-se que compostos orgânicos só poderiam ser produzidos por organismos vivos, mas hoje se sabe que esses compostos podem ser sintetizados em laboratório. A química orgânica é essencial para a compreensão dos processos biológicos e é a base para muitas indústrias, incluindo a farmacêutica, petroquímica, cosmética, alimentícia e de materiais. Seu estudo abrange uma vasta gama de substâncias, desde as moléculas mais simples, como o metano, até macromoléculas complexas como proteínas e DNA, desempenhando um papel crucial na inovação e desenvolvimento científico e tecnológico.</p>

      <h2>Qual a sua importância?</h2>
      <p>A química orgânica é uma área fundamental da ciência que estuda os compostos à base de carbono, essenciais para a vida e a tecnologia moderna. Sua importância é evidente em diversos aspectos da vida cotidiana, desde a medicina até a energia, passando pela indústria de alimentos e a ciência ambiental. </p>
      <p>A química orgânica é essencial em várias áreas que impactam profundamente a sociedade. Na medicina e farmacologia, ela possibilita o desenvolvimento de medicamentos eficazes e seguros. Na indústria de alimentos, contribui para a criação de conservantes, corantes, aromas e adoçantes, garantindo a qualidade e segurança dos alimentos. Em materiais e polímeros, permite o desenvolvimento de plásticos, borrachas e fibras sintéticas usados em diversas aplicações. No campo da energia, é crucial para a transformação de combustíveis fósseis e o desenvolvimento de biocombustíveis. Na biotecnologia e agricultura, facilita a produção de fertilizantes, pesticidas e a engenharia genética. Em ciência ambiental, ajuda a entender e mitigar a poluição, desenvolvendo métodos de remediação e políticas sustentáveis. Por fim, em pesquisa e desenvolvimento, a química orgânica é a base para inovações científicas e tecnológicas que melhoram a qualidade de vida e promovem a sustentabilidade.
      </p>


    </section>
  );
}

function FuncoesOrganicas() {
  return (
    <section id="funcoes" className="content-section">
      <h2>Funções Orgânicas</h2>
      <br></br>

      <div className='col'>
        <br></br>
        <h2 className='h2-text'>Hidrocarbonetos</h2>
        <p className='p-text'>Hidrocarbonetos são compostos formados apenas por carbono e hidrogênio.</p>
        <br></br>
      </div>

      <div className='row'>



        <br></br>
        <br></br>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Alcano</h2>
          <img src={`${process.env.PUBLIC_URL}/alcano.png`} alt="alcano" className="funcao" />
          <p className='p-text'>Formado por ligações simples.</p>
          <br></br>
        </div>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Alceno</h2>
          <img src={`${process.env.PUBLIC_URL}/alceno.jfif`} alt="alceno" className="funcao" />
          <p className='p-text'>Presença de uma ligação dupla.</p>
          <br></br>
        </div>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Alcadieno</h2>
          <img src={`${process.env.PUBLIC_URL}/alcadieno.jfif`} alt="alcadieno" className="funcao" />
          <p className='p-text'>Presença de duas ligações duplas.</p>
          <br></br>
        </div>




        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Alcino</h2>
          <img src={`${process.env.PUBLIC_URL}/alcino.jfif`} alt="alcino" className="funcao" />
          <p className='p-text'>Presença de uma ligação tripla.</p>
          <br></br>
        </div>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Ciclano</h2>
          <img src={`${process.env.PUBLIC_URL}/ciclano.jfif`} alt="ciclano" className="funcao1" />

          <p className='p-text'>Composto cíclico com ligações simples.</p>
          <br></br>
        </div>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Aromático</h2>
          <img src={`${process.env.PUBLIC_URL}/aromatico.jfif`} alt="aromatico" className="funcao1" />
          <p className='p-text'>Anel benzênico.</p>
          <br></br>
        </div>

      </div>


      <br></br> <br></br> <br></br>



      <div className='col'>
        <br></br>
        <h2 className='h2-text'>Oxigenadas</h2>
        <p className='p-text'>Funções oxigenadas possuem átomos de oxigênio na cadeia carbônica.
        </p>
        <br></br>
      </div>


      <div className='row'>



        <br></br>
        <br></br>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Cetona</h2>
          <img src={`${process.env.PUBLIC_URL}/cetona.jfif`} alt="cetona" className="funcao" />
          <p className='p-text'>Carbonila ligada à duas cadeias carbônicas.</p>
          <br></br>
        </div>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Álcool</h2>
          <img src={`${process.env.PUBLIC_URL}/alcool.jfif`} alt="alcool" className="funcao" />
          <p className='p-text'>Hidroxila ligada à cadeia carbônica.</p>
          <br></br>
        </div>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Ácido Carboxílico</h2>
          <img src={`${process.env.PUBLIC_URL}/acidoCarb.jfif`} alt="acido" className="funcao" />
          <p className='p-text'>Radical carboxílico ligado à cadeia carbônica.</p>
          <br></br>
        </div>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Aldeído</h2>
          <img src={`${process.env.PUBLIC_URL}/aldeido.jfif`} alt="aldeido" className="funcao" />
          <p className='p-text'>Carbonila ligada à extremidade da cadeia carbônica.</p>
          <br></br>
        </div>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Éster</h2>
          <img src={`${process.env.PUBLIC_URL}/ester.jfif`} alt="ester" className="funcao" />
          <p className='p-text'>Radical éster ligado à duas cadeias carbônicas.</p>
          <br></br>
        </div>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Éter</h2>
          <img src={`${process.env.PUBLIC_URL}/eter.jfif`} alt="eter" className="funcao" />
          <p className='p-text'>Oxigênio entre duas cadeias carbônicas.</p>
          <br></br>
        </div>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Fenol</h2>
          <img src={`${process.env.PUBLIC_URL}/fenol.jfif`} alt="fenol" className="funcao" />
          <p className='p-text'>Hidroxila ligada ao anel aromático.</p>
          <br></br>
        </div>



        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Nitrocomposto</h2>
          <img src={`${process.env.PUBLIC_URL}/nitro.jfif`} alt="nitro" className="funcao2" />
          <p className='p-text'>Radical nitro ligado à cadeia carbônica.</p>
          <br></br>
        </div>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Nitrila</h2>
          <img src={`${process.env.PUBLIC_URL}/nitrila.png`} alt="nitrila" className="funcao2" />
          <p className='p-text'>Radical nitrila ligado à cadeia carbônica.</p>
          <br></br>
        </div>
        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Amida</h2>
          <img src={`${process.env.PUBLIC_URL}/amida.jfif`} alt="amida" className="funcao5" />
          <p className='p-text'>Radical amida ligado à cadeia carbônica.</p>
          <br></br>
        </div>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Amina</h2>
          <img src={`${process.env.PUBLIC_URL}/amina.jfif`} alt="amina" className="funcao5" />
          <p className='p-text'>Nitrogênio ligado à cadeia carbônica.</p>
          <br></br>
        </div>
      </div>

    </section>
  );
}

function Nomenclatura() {
  return (
    <section id="nomenclatura" className="content-section">
      <h2>Nomenclaturas</h2>
      <p>Regras de nomenclatura de compostos orgânicos...</p>
      <img src={`${process.env.PUBLIC_URL}/tabela.jpg`} alt="aberta" className="tabela" />
      <br></br>       <br></br>
      <h2>Exemplos</h2>
      <br></br>
      <img src={`${process.env.PUBLIC_URL}/exemplos_funcoes.jpg`} alt="aberta" className="exemplo" />
      <br></br>
      <br></br>
      <br></br>


    </section>
  );
}

function ClassificacaoCarbonos() {
  return (
    <section id="carbonos" className="content-section">
      <div>
        <h2>Classificação dos Carbonos</h2>
        <p>A classificação dos átomos de carbono em compostos orgânicos é baseada no número de átomos de carbono aos quais um determinado átomo de carbono está ligado. Existem quatro tipos principais de carbono em compostos orgânicos: primário, secundário, terciário e quaternário.</p>

        <div className='row'>
        <div className='col'>
        <h2 className='h2-text'>Carbono 1º</h2>
        <ul>
        <img src={`${process.env.PUBLIC_URL}/primario.jpg`} alt="amina" className="funcao7" />

          <li>Um carbono é considerado primário quando está ligado a apenas um outro átomo de carbono.</li>
          <li>Exemplo: no etano (CH₃-CH₃), cada átomo de carbono é primário.</li>
        </ul></div>
        <div className='col'>

        <h2 className='h2-text'>Carbono 2º</h2>
        <ul>
        <img src={`${process.env.PUBLIC_URL}/secundario.jpg`} alt="amina" className="funcao7" />

          <li>Um carbono é classificado como secundário quando está ligado a dois outros átomos de carbono.</li>
          <li>Exemplo: no propano (CH₃-CH₂-CH₃), o átomo de carbono central (CH₂) é um carbono secundário.</li>
        </ul></div>
        <div className='col'>

        <h2 className='h2-text'>Carbono 3º</h2>
        <ul>
        <img src={`${process.env.PUBLIC_URL}/terciario.jpg`} alt="amina" className="funcao8" />

          <li>Um carbono é terciário quando está ligado a três outros átomos de carbono.</li>
          <li>Exemplo: no isobutano (CH₃-CH(CH₃)-CH₃), o átomo de carbono central (CH) é um carbono terciário.</li>
        </ul></div>
        <div className='col'>

        <h2 className='h2-text'>Carbono 4º</h2>
        <ul>
        <img src={`${process.env.PUBLIC_URL}/quartenario.jpg`} alt="amina" className="funcao8" />
          <li>Um carbono é quaternário quando está ligado a quatro outros átomos de carbono.</li>
          <li>Exemplo: no neopentano (C(CH₃)₄), o átomo central de carbono está ligado a quatro grupos metil (CH₃).</li>
        </ul>
        </div></div>
      
      </div>
    </section>
  );
}

function ClassificacaoCadeias() {
  return (
    <section id="cadeias" className="content-section">
      <h2>Classificação de Cadeias</h2>

      <div className='row'>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Cadeias abertas, acíclicas, alifáticas</h2>
          <img src={`${process.env.PUBLIC_URL}/aberta.png`} alt="aberta" className="funcao4" />
          <p className='p-text'>Nas cadeias abertas lineares não são formadas ramificações.</p>
          <br></br>
        </div>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Cadeias fechadas, cíclicas, alicíclicas </h2>
          <img src={`${process.env.PUBLIC_URL}/fechada.png`} alt="fechada" className="funcao4" />
          <p className='p-text'>As cadeias abertas ramificadas apresentam ramificações.</p>
          <br></br>
        </div>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Cadeias aromáticas </h2>
          <img src={`${process.env.PUBLIC_URL}/aromatica.png`} alt="aromatica" className="funcao17" />
          <p className='p-text'>As cadeias fechadas aromáticas são classificadas em:

            Mononucleares: quando possuem apenas um anel aromático, como o benzeno.
            Polinucleares: quando possuem mais de um anel aromático, como o naftaleno.</p>

          <br></br>
        </div>


        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Cadeias normais ou retas </h2>
          <img src={`${process.env.PUBLIC_URL}/normal.png`} alt="normal" className="funcao13" />
          <p className='p-text'>As cadeias abertas ramificadas apresentam ramificações.</p>
          <br></br>
        </div>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Cadeias ramificadas </h2>
          <img src={`${process.env.PUBLIC_URL}/ramificada.jpg`} alt="ramificada" className="funcao14" />
          <p className='p-text'>As cadeias abertas ramificadas apresentam ramificações.</p>
          <br></br>
        </div>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Cadeias saturadas</h2>
          <img src={`${process.env.PUBLIC_URL}/saturada.jpg`} alt="saturada" className="funcao12" />
          <p className='p-text'>As cadeias heterogêneas apresentam pelo menos um átomo que não seja o carbono ou hidrogênio ao longo da cadeia.</p>
          <br></br>
        </div>

        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Cadeias insaturadas </h2>
          <img src={`${process.env.PUBLIC_URL}/insaturada.png`} alt="insaturada" className="funcao15" />
          <p className='p-text'>Em cadeias saturadas os átomos de carbono se ligam entre si por uma ligação simples. O carbono dessa cadeia é denominado saturado.</p>
          <br></br>
        </div>


        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Cadeias homogêneas </h2>
          <img src={`${process.env.PUBLIC_URL}/insaturada.png`} alt="aberta" className="funcao15" />
          <p className='p-text'>São as cadeias que têm pelo menos dois átomos de carbono unidos por uma dupla a uma tripla ligação. Nessa ligação, o carbono é denominado insaturado.</p>
          <br></br>
        </div>


        <div className='col'>
          <br></br>
          <h2 className='h2-text'>Cadeias heterogêneas </h2>
          <img src={`${process.env.PUBLIC_URL}/heterogenea.png`} alt="aberta" className="funcao16" />
          <p className='p-text'>As cadeias fechadas ou cíclicas ligam-se entre si e formam um ciclo.

            Elas podem ser aromáticas ou alicíclicas. Se forem alicíclicas, são classificadas ainda como homocíclicas, heterocíclicas saturadas ou insaturadas.</p>
          <br></br>
        </div>


      </div>
    </section>


  );
}

function Footer(){
  return(
  <div className='Footer-div'></div>
  );
}




export default function Home() {
  return (
    <div>
      
      <main>
        <Introducao />
        <FuncoesOrganicas />
        <Nomenclatura />
        <ClassificacaoCarbonos />
        <ClassificacaoCadeias />
        <Footer />
      </main>
    </div>
  );
}


