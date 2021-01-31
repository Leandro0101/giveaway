import { IGiveAway } from '../../domain/entities/giveaway'
import { IParticipant } from '../../domain/entities/participant'
import { IAddParticipantToGiveAway } from '../../domain/usecases/addParticipantToGiveAway'

export class AddParticipantToGiveAwayService implements IAddParticipantToGiveAway {
  constructor (private readonly giveaway: IGiveAway) { }
  async execute (participant: IParticipant): Promise<IParticipant | undefined> {
    if (!this.giveaway.verifyPartipantShares(participant)) {
      return undefined
    }

    await this.giveaway.addParticipant(participant)

    return participant
  }
}
