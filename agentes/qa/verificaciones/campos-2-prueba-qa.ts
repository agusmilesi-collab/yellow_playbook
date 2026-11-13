import { calcularSumario, formatearSumario, PERFILES } from '/Users/agusmilesi/Documents/camposhr-site/lib/exner.ts';
import { leer, bandasDeLaHoja } from '/Users/agusmilesi/Documents/camposhr-site/lib/redacciones.ts';
const r = (lam: string, n: number, dets: string[], par=false) => ({ lam, n_rta: n, loc: 'W', n_loc: null, determinantes: dets, fq: 'o', par, contenidos: ['Na'], popular: false, z: null, ccee: [], agc: false, sl: false });
const L = ['Z1','Z2','Z3'];
const mk = (dets: string[][]) => dets.map((d,i)=>r(L[i%3], i+1, d));
const casos: Record<string, string[][]> = {
  'sin reflejos': [['F'],['F'],['M'],['F']],
  'solo rF':      [['rF'],['F'],['F'],['F']],
  'solo Fr':      [['Fr'],['F'],['F'],['F']],
  'varios (2 Fr, 3 rF)': [['Fr'],['rF'],['Fr'],['rF'],['rF'],['F']],
};
for (const [nom, d] of Object.entries(casos)) {
  for (const test of ['Zulliger','Rorschach'] as const) {
    const rs = mk(d).map(x=>({...x, lam: test==='Zulliger'? x.lam : 'I'}));
    const s = calcularSumario(rs, PERFILES[test]);
    const a = s.autopercepcion;
    const linea = formatearSumario(s).split('\n').filter(l=>/3r\+\(2\)/.test(l)).join(' / ');
    const lec = leer(s, 'x', {}, {}, { test }).filter((l: any) => l.clave === 'reflejos-presentes').map((l:any)=>l.valor);
    console.log(`${nom} | ${test} | Fr ${a.Fr} rF ${a.rF} Fr+rF ${a.Fr_plus_rF} Ego_num ${a.Ego_num} | ${linea} | lectura ${JSON.stringify(lec)}`);
  }
}
console.log('BANDA Zulliger Fr+rF', JSON.stringify(bandasDeLaHoja({}, 'Zulliger')['Fr+rF']), '| Fr', JSON.stringify(bandasDeLaHoja({}, 'Zulliger')['Fr']));
console.log('BANDA Rorschach Fr+rF', JSON.stringify(bandasDeLaHoja({}, 'Rorschach')['Fr+rF']));
// El resto del sumario no cambia: comparar texto completo contra la version de HEAD
