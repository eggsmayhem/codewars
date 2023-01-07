export function freqSeq( $: string, _: string): string {
  return $.split('').map((el, i, arr) => arr.filter(e => e === el).length).join( _ );
}
