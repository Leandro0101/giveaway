import { IGiveAway } from '@domain/entities/giveaway'
import { IItem } from '@domain/entities/item'
import { IParticipant } from '@domain/entities/participant'

export class GiveAwayModel implements IGiveAway {
  readonly participants: IParticipant[] = []
  constructor (
    readonly id: string,
    public item: IItem,
    public date: Date
  ) { }

  async addParticipant (participant: IParticipant): Promise<void> {
    this.participants.push(participant)
  }

  async removeParticipant (participant: IParticipant): Promise<void> {
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
