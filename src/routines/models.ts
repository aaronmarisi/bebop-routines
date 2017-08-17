export interface Routine {
  name: string;
  lastCompletedDate: Date;
}

export interface RoutinesViewModel {
  routines: RoutineViewModel[];
}

export interface RoutineViewModel {
  name: string;
  lastCompletedDate: string;
}
