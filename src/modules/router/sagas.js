import { nonsenseAction, secondAction } from './actions'

export default function* watchAndLog() {
  while (true) {
    const action = yield nonsenseAction('*')
    const state = yield secondAction()

    console.log('action', action)
    console.log('state after', state)
  }
}
