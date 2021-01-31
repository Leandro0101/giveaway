import { Participant } from '../entities/participant'

export interface IRemoveParticipantFromGiveAway {
  execute: (participant: Participant) => Promise<void>
}
