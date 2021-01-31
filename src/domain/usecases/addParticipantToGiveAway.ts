import { Participant } from '../entities/participant'

export interface IAddPartipantToGiveAway {
  execute: (participant: Participant) => Promise<Participant | undefined>
}
