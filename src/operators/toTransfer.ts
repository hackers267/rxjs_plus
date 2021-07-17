import { ReactText } from "react";
import { Input, TransferType } from "../type";
import { map as _map } from "lodash";
import { map, pipe } from "rxjs";

/**
 * 转换为Antd的Transfer需要的格式
 * @param fn
 */
export function toTransfer<T = Input | ReactText>(
  fn: (v: T) => TransferType[]
) {
  return pipe(map((x: T[]) => _map(x, fn)));
}
