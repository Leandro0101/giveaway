import { IGiveAway } from '@domain/entities/giveaway'
import { IParticipant } from '@domain/entities/participant'
import { IAddParticipantToGiveAway } from '@domain/usecases/addParticipantToGiveAway'
import { IFindGiveAwayByIdRepository } from '../../contracts/repositories/findGiveAwayById'

export class AddParticipantToGiveAwayService implements IAddParticipantToGiveAway {
  constructor (private readonly findGiveAwayById: IFindGiveAwayByIdRepository, private readonly giveaway: IGiveAway) { }
  async execute (giveawayId: string, participant: IParticipant): Promise<IParticipant | undefined> {
    if (!this.giveaway.verifyPartipantShares(participant)) {
      return undefined
    }

    const giveaway = await this.findGiveAwayById.findById(giveawayId)

    if (!giveaway) {
      throw new Error('giveaway not found')
    }

    return participant
  }
}
