import { IStateNotification } from './index';
import { notifications } from './types';

export default {
  [notifications]: (state: IStateNotification) => state.notifications,
};
