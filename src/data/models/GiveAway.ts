import { IGiveAway } from '@domain/entities/giveaway'
import { IItem } from '@domain/entities/item'
import { IParticipant } from '@domain/entities/participant'

export class GiveAwayModel implements IGiveAway {
  readonly participants: IParticipant[] = []
  constructor (
    public readonly id: string,
    public item: IItem,
    public date: Date
  ) { }

  async addParticipant (participant: IParticipant): Promise<void> {
    this.participants.push(participant)
  }

  async removeParticipant (participant: IParticipant): Promise<void> {
    for (let i = 0; i < this.participants.length; i++) {
      if (this.participants[i].id === participant.id) {
        this.participants.splice(i, 1)
      }
    }
  }

  async draw (): Promise<IParticipant> {
    return this.participants[0]
  }

  verifyPartipantShares (participant: IParticipant): boolean {
    if (participant.shares < 20) {
      return false
    }

    return true
  }
}
