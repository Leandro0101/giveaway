import { IFindGiveAwayByIdRepository } from '@/src/data/contracts/repositories/findGiveAwayById'

import { IGiveAway } from '@/src/domain/entities/giveaway'
export class FindGiveAwayByIdRepository implements IFindGiveAwayByIdRepository {
  constructor (private readonly dataSource: IGiveAway[]) {

  }

  findById (id: string): IGiveAway | undefined {
    for (const giveaway of this.dataSource) {
      if (giveaway.id === id) {
        return giveaway
      }
    }

    return undefined
  }
}
