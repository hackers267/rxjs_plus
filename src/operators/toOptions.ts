import { map, Observable, pipe, UnaryFunction } from "rxjs";
import { map as _map } from "lodash";
import { ReactNode, ReactText } from "react";

type Input = Record<string, ReactText>;

type Option = { label: ReactNode; value: ReactNode };

/**
 *
 * @param fn
 * @return {UnaryFunction<Observable<T[]>, Observable<Option[]>>}
 */
export function toOptions<T = Input | ReactText>(
  fn: (v: T) => Option
): UnaryFunction<Observable<T[]>, Observable<Option[]>> {
  return pipe(map<T[], Option[]>((x) => _map(x, fn)));
}
