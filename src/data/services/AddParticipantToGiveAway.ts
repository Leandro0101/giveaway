import { IGiveAway } from '../../domain/entities/giveaway'
import { Participant } from '../../domain/entities/participant'
import { IAddParticipantToGiveAway } from '../../domain/usecases/addParticipantToGiveAway'

export class AddParticipantToGiveAwayService implements IAddParticipantToGiveAway {
  constructor (private readonly giveaway: IGiveAway) { }
  async execute (participant: Participant): Promise<Participant | undefined> {
    if (participant.shares < 20) {
      throw new Error('Shares number must be greater or equal than 20')
    }

    await this.giveaway.addParticipant(participant)

    return participant
  }
}
