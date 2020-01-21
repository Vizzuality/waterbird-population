
export const NONSENSE_ACTION = 'NONSENSE_ACTION';
export const SECOND_ACTION = 'SECOND_ACTION';


export function nonsenseAction(id, text) {
  return { type: NONSENSE_ACTION, id, text };
}

export function secondAction(id) {
  return { type: SECOND_ACTION, id };
}
