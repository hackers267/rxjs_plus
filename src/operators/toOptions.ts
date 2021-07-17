import { map, Observable, pipe, UnaryFunction } from "rxjs";
import { map as _map } from "lodash";
import { ReactText } from "react";
import { Input, Option } from "../type";

/**
 * 转换为Antd的Select需要的Option形式
 * @param fn
 * @return {UnaryFunction<Observable<T[]>, Observable<Option[]>>}
 */
export function toOptions<T = Input | ReactText>(
  fn: (v: T) => Option
): UnaryFunction<Observable<T[]>, Observable<Option[]>> {
  return pipe(map<T[], Option[]>((x) => _map(x, fn)));
}
