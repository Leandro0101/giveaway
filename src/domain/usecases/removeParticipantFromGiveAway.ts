import { IParticipant } from '../entities/participant'

export interface IRemoveParticipantFromGiveAway {
  execute: (participant: IParticipant) => Promise<void>
}
