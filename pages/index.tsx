import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rota Livre | Portal de viagens</title>
        <meta name="description" content="Inspire-se com destinos incríveis para a sua próxima viagem." />
      </Head>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Portal de viagens</p>
        <h1 className={styles.titulo}>Seu próximo destino começa aqui</h1>
        <p className={styles.texto}>
          Reunimos lugares para todos os estilos de viagem: praias, serras, rios e cidades
          cheias de história. Explore a lista e escolha para onde ir.
        </p>
        <Link href="/destinos" className={styles.botao}>
          Ver destinos
        </Link>
      </section>

      <section className={styles.destaques} aria-label="Por que usar o portal">
        <div>
          <h2>Para todos os gostos</h2>
          <p>Do litoral ao interior, com opções para relaxar ou para aventura.</p>
        </div>
        <div>
          <h2>Informação direta</h2>
          <p>Cada destino traz um resumo do que faz o lugar valer a visita.</p>
        </div>
        <div>
          <h2>Fácil de navegar</h2>
          <p>Poucos cliques para sair da inspiração e chegar à lista completa.</p>
        </div>
      </section>

    <section className={styles.contato} aria-labelledby="contato-titulo">
      <div className={styles.contatoTexto}>
        <h2 id="contato-titulo">Fale com a gente</h2>
        <p>Dúvidas ou sugestões de destinos? Envie uma mensagem.</p>
      </div>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <label>
          Nome
          <input type="text" name="nome" placeholder="Seu nome" />
        </label>
        <label>
          E-mail
          <input type="email" name="email" placeholder="voce@email.com" />
        </label>
        <label className={styles.full}>
          Mensagem
          <textarea name="mensagem" rows={4} placeholder="Como podemos ajudar?" />
        </label>
        <button type="submit" className={styles.enviar}>
          Enviar mensagem
        </button>
      </form>
    </section>
    </>
  );
}
