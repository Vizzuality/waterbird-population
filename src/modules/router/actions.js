export const NONSENSE_ACTION = 'NONSENSE_ACTION';


export function nonsenseAction(id, text) {
  return { type: NONSENSE_ACTION, id, text };
}


