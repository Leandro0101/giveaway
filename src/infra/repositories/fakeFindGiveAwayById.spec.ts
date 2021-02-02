import { FindGiveAwayByIdRepository } from './FakeFindGiveAwayById'
import { giveawayDataSource } from '../dataSources/giveaway'

describe('Find GiveAway By Id', () => {
  const sut = new FindGiveAwayByIdRepository(giveawayDataSource)

  test('Should return the giveway by id', async () => {
    const response = sut.findById('XPA01')
    expect(response).toEqual(giveawayDataSource[0])
  })

  test('Should return undefined if giveway not found', async () => {
    const response = sut.findById('XPA010')
    expect(response).toEqual(undefined)
  })
})
