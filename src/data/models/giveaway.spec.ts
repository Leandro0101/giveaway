import { IGiveAway } from '@/src/domain/entities/giveaway'
import { IParticipant } from '@/src/domain/entities/participant'
import { itemDataSource } from '@/src/infra/dataSources/item'
import { GiveAwayModel } from './GiveAway'
import { ParticipantModel } from './Participant'

describe('test giveaway methods', () => {
  const sut: IGiveAway = new GiveAwayModel('XPA03', itemDataSource[0], new Date())
  const participant: IParticipant = new ParticipantModel('098f6bcd4621d373cade4e832627b4f6', 21, 'Leandro', 'leandro@gmail.com')

  test('Should add participant to giveaway', async () => {
    await sut.addParticipant(participant)
    expect(sut.participants.length).toBe(1)
  })

  test('Should remove the participant from giveaway', async () => {
    await sut.removeParticipant(participant)
    expect(sut.participants.length).toBe(0)
  })
})
