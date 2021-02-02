import { IParticipant } from '../entities/participant'

export interface IAddParticipantToGiveAway {
  execute: (
    id: string,
    participant: IParticipant
  ) => Promise<IParticipant | undefined>
}
