import { IGiveAway } from '@/src/domain/entities/giveaway'

export interface IFindGiveAwayByIdRepository {
  findById: (id: string) => IGiveAway | undefined
}
