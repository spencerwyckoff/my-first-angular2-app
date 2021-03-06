export interface ITroopCard {
  attackspeed: number;
  attackspeedunit: string;
  attackstyle: string;
  attacktype: string;
  barrackslevelreq: number;
  barrackstype: string;
  costtype: string;
  damagepersec: number;
  damageperattack: number;
  damagepercost: number;
  hasability: boolean;
  healingpersec?: number;
  healingperpulse?: number;
  healspeed?: number;
  healspeedunit?: string;
  housingspace: number;
  hp: number;
  labratorylevel: number;
  level: number;
  movementspeed: number;
  preferredtarget: string;
  researchtimeunit: string;
  range: number;
  rangeunit: string;
  researchcost: number;
  researchtime: number;
  trainingcost: number;
  trainingtime: number;
  trainingtimeunit: string;
  troop: string;
}
