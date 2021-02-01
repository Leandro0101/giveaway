import { IParticipant } from '@domain/entities/participant'

export interface IFindAllParticipantsFromGiveAwayRepository {
  findAllParticipants: () => Promise<IParticipant[]>
}
