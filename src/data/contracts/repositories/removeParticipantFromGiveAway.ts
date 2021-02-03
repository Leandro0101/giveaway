import { IGiveAway } from '@/src/domain/entities/giveaway'
import { IParticipant } from '@domain/entities/participant'

export interface IRemoveParticipantFromGiveAwayRepository {
  removeParticipant: (giveaway: IGiveAway, participant: IParticipant) => Promise<void>
}
