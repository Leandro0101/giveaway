import { IItem } from './item'
import { IParticipant } from './participant'

export interface IGiveAway {
  id: string
  item: IItem
  participants: IParticipant[]
  date: Date

  addParticipant: (participant: IParticipant) => Promise<void>
  removeParticipant: (participant: IParticipant) => Promise<void>
  draw: () => Promise<IParticipant>
  verifyPartipantShares: (participants: IParticipant) => boolean
}
