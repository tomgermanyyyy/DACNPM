import { OPEN_NAV, CLOSE_NAV } from './types';

export const openNav = () => (dispatch) => {
  console.log('open nav');

  document.getElementById('sidebar').style.width = '300px';
  document.getElementById('main-content').style.marginLeft = '300px';

  dispatch({
    type: OPEN_NAV,
  });
};

export const closeNav = () => (dispatch) => {
  console.log('close nav');

  document.getElementById('sidebar').style.width = '0';
  document.getElementById('main-content').style.marginLeft = '0';

  dispatch({ type: CLOSE_NAV });
};
