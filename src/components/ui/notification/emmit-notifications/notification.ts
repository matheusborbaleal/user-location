import { INotification } from '../../../../interfaces/inotification';
import { EventEmitter } from 'event-emitter-lite';

export const emmitNotification = new EventEmitter<INotification>();
