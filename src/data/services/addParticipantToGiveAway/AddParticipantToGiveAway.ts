import { IParticipant } from '@domain/entities/participant'
import { IAddParticipantToGiveAway } from '@domain/usecases/addParticipantToGiveAway'
import { IAddParticipantToGiveAwayRepository } from '../../contracts/repositories/addParticipantToGiveAway'
import { IFindGiveAwayByIdRepository } from '../../contracts/repositories/findGiveAwayById'

export class AddParticipantToGiveAwayService implements IAddParticipantToGiveAway {
  constructor (
    private readonly findGiveAwayById: IFindGiveAwayByIdRepository,
    private readonly addParticipantToGiveAwayRepository: IAddParticipantToGiveAwayRepository
  ) { }

  async execute (giveawayId: string, participant: IParticipant): Promise<IParticipant | undefined> {
    const giveaway = await this.findGiveAwayById.findById(giveawayId)

    if (!giveaway) {
      throw new Error('giveaway not found')
    }

    await this.addParticipantToGiveAwayRepository.addParticipant(giveaway, participant)

    return participant
  }
}
