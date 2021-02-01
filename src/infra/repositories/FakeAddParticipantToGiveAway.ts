import { IAddParticipantToGiveAwayRepository } from '../../data/contracts/repositories/addParticipantToGiveAway'
import { IParticipant } from '../../domain/entities/participant'
import { participantDataSource } from '../dataSources/participant'
export class AddParticipantToGiveAwayRepository implements IAddParticipantToGiveAwayRepository {
  async addParticipant (participant: IParticipant): Promise<IParticipant> {
    participantDataSource.push(participant)
    return participant
  }
}
