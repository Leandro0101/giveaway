import { IParticipant } from '@domain/entities/participant'
import { AddParticipantToGiveAwayRepository } from './FakeAddParticipantToGiveAway'
import { ParticipantModel } from '../../data/models/Participant'
import { giveawayDataSource } from '../dataSources/giveaway'

describe('Fake Add Participant To GiveAway', () => {
  const sut = new AddParticipantToGiveAwayRepository()
  test('Should return the added participant', async () => {
    const participant: IParticipant = new ParticipantModel('098f6bcd4621d373cade4e832627b4f6', 19, 'Leandro', 'leandro@gmail.com')
    const response = await sut.addParticipant(giveawayDataSource[0], participant)
    expect(response).toEqual(participant)
  })
})
