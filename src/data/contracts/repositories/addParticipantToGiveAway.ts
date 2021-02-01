import { IParticipant } from '@domain/entities/participant'

export interface IAddParticipantToGiveAwayRepository {
  addParticipant: (participant: IParticipant) => Promise<IParticipant>
}
