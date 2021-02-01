import { IParticipant } from '../entities/participant'

export interface IAddParticipantToGiveAway {
  execute: (participant: IParticipant) => Promise<IParticipant | undefined>
}
