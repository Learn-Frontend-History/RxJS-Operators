import {interval, map, Observable, Observer, of, take} from "rxjs";
import {print} from "../tools";

export type Operators =
    'concatAll' | 'concatMap'
    | 'mergeAll' | 'mergeMap'
    | 'switchAll' | 'switchMap'
    | 'exhaustAll' | 'exhaustMap'

export type ValueType = 'sync' | 'async'

export function getTitle(operator: Operators, type: ValueType): string {
    return `use \`${operator}\` to concat ${type} values from all observables`
}

export function getSyncPayload(): Observable<Observable<string>> {
    return of(
        map(v => `obs 1: ${v}`)(of(1,2,3)),
        map(v => `obs 2: ${v}`)(of(4,5,6)),
        map(v => `obs 3: ${v}`)(of(7,8,9))
    )
}

export function getASyncPayload(): Observable<Observable<string>> {
    const observables = [
        interval(800),
        interval(400),
        interval(1000),
    ]

    return of(
        ...observables.map((observable, index) => {
            return observable.pipe(
                take(3),
                map(value => `obs ${index + 1}/${observables.length}: ${value}`),
            )
        })
    )
}

export function getObserver(): Observer<string> {
    return {
        next: print.bind(null, ['RxJS']),
        complete: () => print('RxJS', 'complete'),
        error: err => print('RxJS', err)
    }
}
