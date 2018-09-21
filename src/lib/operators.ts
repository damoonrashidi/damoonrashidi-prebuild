import { of, Observable } from 'rxjs';
import {
  delay,
  concatMap,
  timeInterval,
  mergeMap,
  map,
  tap,
} from 'rxjs/operators';

export const stagger = (tickRate, first = true) => (
  source: Observable<Event>
) =>
  source.pipe(
    timeInterval(),
    concatMap(x =>
      of(x).pipe(
        mergeMap(y =>
          of(y).pipe(delay(x.interval > tickRate || first ? 0 : tickRate))
        ),
        tap(() => (first = false)),
        map(event => event.value)
      )
    )
  );
