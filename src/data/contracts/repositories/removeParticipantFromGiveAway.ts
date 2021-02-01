import { IParticipant } from '../../../domain/entities/participant'

export interface IRemoveParticipantFromGiveAwayRepository {
  removeParticipant: (participant: IParticipant) => Promise<void>
}
