import { IRemoveParticipantFromGiveAwayRepository } from '@/src/data/contracts/repositories/removeParticipantFromGiveAway'
import { IGiveAway } from '@/src/domain/entities/giveaway'
import { IParticipant } from '@/src/domain/entities/participant'

export class FakeRemoveParticipantFromGiveAwayRepository implements IRemoveParticipantFromGiveAwayRepository {
  async removeParticipant (giveaway: IGiveAway, participant: IParticipant): Promise<void> {
    await giveaway.removeParticipant(participant)
  }
}
