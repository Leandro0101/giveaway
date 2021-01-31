import { Participant } from '../entities/participant'

export interface IAddParticipantToGiveAway {
  execute: (participant: Participant) => Promise<Participant | undefined>
}
