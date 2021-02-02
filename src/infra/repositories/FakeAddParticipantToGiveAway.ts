import { IGiveAway } from '@domain/entities/giveaway'
import { IAddParticipantToGiveAwayRepository } from '../../data/contracts/repositories/addParticipantToGiveAway'
import { IParticipant } from '../../domain/entities/participant'
import { participantDataSource } from '../dataSources/participant'
export class AddParticipantToGiveAwayRepository implements IAddParticipantToGiveAwayRepository {
  async addParticipant (giveaway: IGiveAway, participant: IParticipant): Promise<IParticipant> {
    participantDataSource.push(participant)
    giveaway.participants.push(participant)

    return participant
  }
}
