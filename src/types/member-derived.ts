import { MEMBERS } from "../const/members";

export type TmemberId = (typeof MEMBERS)[number]["id"];
export type Tname = (typeof MEMBERS)[number]["name"];  
export type TfullName = (typeof MEMBERS)[number]["fullName"];
export type Temoji = (typeof MEMBERS)[number]["emoji"];


export type TMemberById<T extends TmemberId> = Extract<(typeof MEMBERS)[number], { id: T }>;

export type TMemberMap<T> = Record<TmemberId, T>;

export type TMemberLookup = {
  [K in TmemberId]: TMemberById<K>;
};

export type MemberValidator = (id: string) => id is TmemberId;


export const isMemberId = (id: string): id is TmemberId => {
  return MEMBERS.some(member => member.id === id);
};

export const getMemberById = <T extends TmemberId>(id: T): TMemberById<T> => {
  const member = MEMBERS.find(m => m.id === id);
  if (!member) {
    throw new Error(`Member with id "${id}" not found`);
  }
  return member as TMemberById<T>;
};
