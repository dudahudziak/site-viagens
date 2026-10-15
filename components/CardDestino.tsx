import Image from 'next/image';
import type { Destino } from '../types/destino';
import styles from '../styles/CardDestino.module.css';

interface CardDestinoProps {
  destino: Destino;
}

export default function CardDestino({ destino }: CardDestinoProps) {
  const { nome, imagem, descricao } = destino;

  return (
    <article className={styles.card}>
      <Image
        src={imagem}
        alt={`Paisagem representando ${nome}`}
        width={800}
        height={500}
        className={styles.imagem}
      />
      <div className={styles.corpo}>
        <h3 className={styles.nome}>{nome}</h3>
        <p className={styles.descricao}>{descricao}</p>
      </div>
    </article>
  );
}
