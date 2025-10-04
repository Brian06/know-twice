import { describe, it, expect } from 'vitest';
import { isMemberId, getMemberById } from '../../types/member-derived';
import { MEMBERS } from '../../const/members';
import type { TmemberId } from '../../types/member-derived';
import type { TMember } from '../../types/members';

describe('Member Validation Functions', () => {
  describe('isMemberId', () => {
    it('should return true for valid member IDs', () => {
      const validIds: TmemberId[] = [
        'nayeon', 'jeongyeon', 'momo', 'sana', 'jihyo',
        'mina', 'dahyun', 'chaeyoung', 'tzuyu',
      ];

      validIds.forEach((id) => {
        expect(isMemberId(id)).toBe(true);
      });
    });

    it('should return false for invalid member IDs', () => {
      const invalidIds = [
        'invalid', 'NAYEON', 'nayeon123', '', ' ', null, undefined
      ];

      invalidIds.forEach((id) => {
        expect(isMemberId(id as any)).toBe(false);
      });
    });

    it('should be consistent with MEMBERS array', () => {
      MEMBERS.forEach((member) => {
        expect(isMemberId(member.id)).toBe(true);
      });
    });
  });

  describe('getMemberById', () => {
    it('should return correct member for valid IDs', () => {
      const testCases = [
        { id: 'nayeon', expectedName: 'Nayeon' },
        { id: 'jihyo', expectedName: 'Jihyo' },
        { id: 'tzuyu', expectedName: 'Tzuyu' },
      ] as const;

      testCases.forEach(({ id, expectedName }) => {
        const member: TMember = getMemberById(id);
        expect(member.id).toBe(id);
        expect(member.name).toBe(expectedName);
      });
    });

    it('should return member with all required properties', () => {
      const member = getMemberById('nayeon');
      
      expect(member).toHaveProperty('id');
      expect(member).toHaveProperty('name');
      expect(member).toHaveProperty('fullName');
      expect(member).toHaveProperty('nationality');
      expect(member).toHaveProperty('birthday');
      expect(member).toHaveProperty('positions');
      expect(member).toHaveProperty('social');
      expect(member).toHaveProperty('songs');
    });

    it('should throw error for invalid member IDs', () => {
      const invalidIds = ['invalid', 'not-a-member', ''];

      invalidIds.forEach((id) => {
        expect(() => getMemberById(id as TmemberId)).toThrow(
          `Member with id "${id}" not found`
        );
      });
    });

    it('should maintain referential equality with original member data', () => {
      MEMBERS.forEach((originalMember) => {
        const retrievedMember = getMemberById(originalMember.id as TmemberId);
        expect(retrievedMember).toBe(originalMember);
      });
    });
  });
});
