import { StateNotification } from './index';
import { notifications } from './types';

export default {
  [notifications]: (state: StateNotification) => state.notifications,
};
