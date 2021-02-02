import { IGiveAway } from '@domain/entities/giveaway'
import { GiveAwayModel } from '@/src/data/models/GiveAway'
import { itemDataSource } from './item'

const giveaway1 = new GiveAwayModel('XPA01', itemDataSource[0], new Date('26/02/2021'))
const giveaway2 = new GiveAwayModel('XPA02', itemDataSource[1], new Date('06/03/2021'))
const giveaway3 = new GiveAwayModel('XPA03', itemDataSource[2], new Date('06/04/2021'))
const giveaway4 = new GiveAwayModel('XPA04', itemDataSource[3], new Date('15/05/2021'))
export const giveawayDataSource: IGiveAway[] = [
  giveaway1, giveaway2, giveaway3, giveaway4
]
