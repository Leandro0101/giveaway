import { Participant } from '../entities/participant'

export interface IFindAllParticipants {
  execute: () => Promise<Participant[]>
}
