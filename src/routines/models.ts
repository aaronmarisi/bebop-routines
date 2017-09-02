export interface Routine {
  name: string;
  lastCompletedDate: Date;
}

export interface RoutinesViewModel {
  routines: Routine[];
}
