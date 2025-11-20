/**
 * Item Type Definition
 *
 * This module defines the primary item data type, along with a default value
 * for error handling.
 */

export interface Player {
     id: number;
  starttime: string;
  endtime: string | null;
  status: string;

}

export const defaultItem: Player = {
    starttime: "",
    endtime: null,
    status: "",
    id: 0,

};


