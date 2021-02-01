import { IParticipant } from '../entities/participant'

export interface IFindAllParticipants {
  execute: () => Promise<IParticipant[]>
}
