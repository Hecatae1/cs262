/**
 * Item Type Definition
 *
 * This module defines the primary item data type, along with a default value
 * for error handling.
 */

export interface Player {
  id: number;
  starttime: string;
  endtime: string | null;   // or | undefined if needed
  status: string;
}

export const defaultItem: Player = {
  id: 0,
  starttime: "",
  endtime: null,            // clean default
  status: "",
};

