import { MEMBERS } from '../const/members'
import type { TMemberId, TMember } from '../types/members'

export const isMemberId = (id: string): id is TMemberId => {
  return MEMBERS.some((member) => member.id === id)
}

export const getMemberById = (id: TMemberId): TMember => {
  const member = MEMBERS.find((m) => m.id === id)
  if (!member) {
    throw new Error(`Member with id "${id}" not found`)
  }
  return member
}
