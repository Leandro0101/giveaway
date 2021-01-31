import { IGiveAway } from '../../domain/entities/giveaway'
import { Item } from '../../domain/entities/item'
import { Participant } from '../../domain/entities/participant'

export class GiveAwayModel implements IGiveAway {
  constructor (
    readonly id: string,
    readonly item: Item,
    readonly participants: Participant[],
    readonly date: Date
  ) {}

  async addParticipant (participant: Participant): Promise<void> {
    this.participants.push(participant)
  }

  async removeParticipant (participant: Participant): Promise<void> {
  }

  async draw (): Promise<Participant> {
    return this.participants[0]
  }

  verifyPartipantShares (participant: Participant): boolean {
    if (participant.shares < 20) {
      return false
    }

    return true
  }
}
