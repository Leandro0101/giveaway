import { IGiveAway } from '@domain/entities/giveaway'
import { IParticipant } from '@domain/entities/participant'

export interface IAddParticipantToGiveAwayRepository {
  addParticipant: (giveaway: IGiveAway, participant: IParticipant) => Promise<IParticipant>
}
