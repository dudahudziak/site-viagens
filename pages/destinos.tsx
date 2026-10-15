import Head from 'next/head';
import CardDestino from '../components/CardDestino';
import { destinos } from '../data/destinos';
import styles from '../styles/Destinos.module.css';

export default function Destinos() {
  return (
    <>
      <Head>
        <title>Destinos | Rota Livre</title>
      </Head>

      <h1 className={styles.titulo}>Destinos</h1>
      <p className={styles.subtitulo}>
        {destinos.length} lugares para colocar na sua lista.
      </p>

      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </>
  );
}
