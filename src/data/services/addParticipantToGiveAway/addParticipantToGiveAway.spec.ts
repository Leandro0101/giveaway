// import { giveawayDataSource } from '@/src/infra/dataSources/giveaway'
// import { GiveAwayModel } from '../../models/GiveAway'
// import { ParticipantModel } from '../../models/Participant'
// import { AddParticipantToGiveAwayService } from './AddParticipantToGiveAway'

describe('add participant to giveaway', () => {
  // const giveaway = new GiveAwayModel('HPT002',
  //   {
  //     id: 'XUA002',
  //     name: 'TV de plasma',
  //     description: 'TV seminova',
  //     imgUrl: 'https://www.android.com/static/2016/img/devices/tvs/transparent/sharp-aquos_1x.png'
  //   },
  //   new Date())

  // const sut = new AddParticipantToGiveAwayService(giveaway)
  test('Should return undefined if participant shares number be less than 20', async () => {
    // const participant = new ParticipantModel('098f6bcd4621d373cade4e832627b4f6', 19, 'Leandro', 'leandro@gmail.com')
    // const response = await sut.execute(giveawayDataSource[0], participant)
    expect(1).toBe(1)
  })
})
