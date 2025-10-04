import { MEMBERS } from "../const/members";
import type { TmemberId, TMemberById } from "../types/member-derived";

export const isMemberId = (id: string): id is TmemberId => {
  return MEMBERS.some((member) => member.id === id);
};

export const getMemberById = <T extends TmemberId>(id: T): TMemberById<T> => {
  const member = MEMBERS.find((m) => m.id === id);
  if (!member) {
    throw new Error(`Member with id "${id}" not found`);
  }
  return member as TMemberById<T>;
};
