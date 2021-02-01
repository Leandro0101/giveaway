import { IParticipant } from '@domain/entities/participant'

export class ParticipantModel implements IParticipant {
  constructor (public readonly id: string, public shares: Number, public name: string, public email: string) { }
}
