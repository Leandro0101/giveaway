import { IAddParticipantToGiveAway } from '@/src/domain/usecases/addParticipantToGiveAway'
import { giveawayDataSource } from '@infra/dataSources/giveaway'
import { ParticipantModel } from '../../models/Participant'
import { AddParticipantToGiveAwayService } from './AddParticipantToGiveAway'
import { FindGiveAwayByIdRepository } from '@infra/repositories/FakeFindGiveAwayById'
import { IFindGiveAwayByIdRepository } from '../../contracts/repositories/findGiveAwayById'
import { AddParticipantToGiveAwayRepository } from '@/src/infra/repositories/FakeAddParticipantToGiveAway'
import { IAddParticipantToGiveAwayRepository } from '../../contracts/repositories/addParticipantToGiveAway'

describe('add participant to giveaway', () => {
  const makeSut = (): IAddParticipantToGiveAway => {
    const findGiveAwayById: IFindGiveAwayByIdRepository = new FindGiveAwayByIdRepository(giveawayDataSource)
    const addParticipantToGiveAway: IAddParticipantToGiveAwayRepository = new AddParticipantToGiveAwayRepository()

    return new AddParticipantToGiveAwayService(findGiveAwayById, addParticipantToGiveAway)
  }

  const sut: IAddParticipantToGiveAway = makeSut()

  test('Should return the added participant', async () => {
    const participant = new ParticipantModel('098f6bcd4621d373cade4e832627b4f6', 19, 'Leandro', 'leandro@gmail.com')
    const response = await sut.execute('XPA01', participant)
    expect(response).toBe(participant)
  })

  test('Should return null if giveaway not exist', async () => {
    const participant = new ParticipantModel('098f6bcd4621d373cade4e832627b4f6', 19, 'Leandro', 'leandro@gmail.com')
    const response = await sut.execute('XPA0L', participant)
    expect(response).toBe(null)
  })
})
