/** Response from Connect2 / GoBoard facility count API */
export interface LocationCount {
  LocationId: number;
  TotalCapacity: number;
  LocationName: string;
  CountOfParticipants: number;
  PercetageCapacity: number;
  LastUpdatedDateAndTime: string;
  LastCount: number;
  MinColor: string;
  MidColor: string | null;
  MaxColor: string;
  MinCapacityRange: number;
  MaxCapacityRange: number;
  CountCapacityColorEnabled: boolean;
  FacilityId: number;
  FacilityName: string;
  IsClosed: boolean;
  SubLocations: unknown;
}
