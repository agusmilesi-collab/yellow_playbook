import { calcularSumario, formatearSumario, PERFILES } from '/Users/agusmilesi/Documents/camposhr-site/lib/exner.ts';
const r = (lam: string, n_rta: number, dets: string[]) => ({ lam, n_rta, loc: 'W', n_loc: null, determinantes: dets, fq: 'o', par: false, contenidos: ['Na'], popular: false, z: null, ccee: [], agc: false, sl: false });
const rs = [r('Z1',1,['rF']), r('Z2',2,['Fr']), r('Z2',3,['rF']), r('Z3',4,['F'])];
for (const [nombre, p] of [['Zulliger', PERFILES.Zulliger], ['Rorschach', PERFILES.Rorschach]] as const) {
  const s = calcularSumario(rs.map(x=>({...x, lam: nombre==='Zulliger'? x.lam : 'I'})), p);
  const txt = formatearSumario(s);
  console.log(nombre, 'Fr', s.autopercepcion.Fr, 'rF', s.autopercepcion.rF, 'Fr+rF', s.autopercepcion.Fr_plus_rF, 'Ego_num', s.autopercepcion.Ego_num);
  console.log(txt.split('\n').filter(l=>/Fr/.test(l)).join('\n'));
}
import { leer } from '/Users/agusmilesi/Documents/camposhr-site/lib/redacciones.ts';
const sz = calcularSumario(rs, PERFILES.Zulliger);
const lec = leer(sz, 'x', {}, {}, { test: 'Zulliger' }).filter((l: any) => l.clave === 'reflejos-presentes');
console.log('LECTURA', lec.map((l: any) => `${l.indice} | ${l.valor} | ${l.dice.slice(0, 60)}`));
