import { Item } from './item'
import { Participant } from './participant'

export interface IGiveaway {
  id: string
  item: Item
  participants: Participant[]
  date: Date

  addParticipant: (participant: Participant) => Promise<void>
  removeParticipant: (participant: Participant) => Promise<void>
  draw: () => Promise<Participant>
  verifyPartipantShares: (participants: Participant) => Promise<void>
}
