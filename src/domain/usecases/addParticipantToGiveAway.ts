import { IGiveAway } from '@domain/entities/giveaway'
import { IParticipant } from '../entities/participant'

export interface IAddParticipantToGiveAway {
  execute: (giveaway: IGiveAway, participant: IParticipant) => Promise<IParticipant | undefined>
}
