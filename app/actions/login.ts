import { push } from 'connected-react-router';
// import type { Dispatch } from '../reducers/types';

export function gotoLobbyPage() {
  return dispatch => {
    dispatch(push('lobby'));
  };
}
