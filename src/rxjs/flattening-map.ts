import {concatMap, exhaustMap, interval, map, mergeMap, of, switchMap, take} from "rxjs";
import {Options, prepareDOM} from "../tools";

import {getObserver, getTitle} from './common'

const OPTIONS: Options = {
    header: 'Create higher-order asynchronous Observables from ordinary values and flattening they',
    buttons: [
        {
            title: getTitle('concatMap', 'async'),
            id: 'concat-map', caption: 'async concatMap',
            click: event => {
                of(
                    1000,
                    200,
                    500,
                ).pipe(
                    concatMap(
                        (value, index) => interval(value).pipe(
                            map(value => `obs ${index} value ${value}`),
                            take(3)
                        )
                    )
                ).subscribe(
                    getObserver()
                )
            }
        },
        {
            title: getTitle('mergeMap', 'async'),
            id: 'merge-map', caption: 'async mergeMap',
            click: event => {
                of(
                    1000,
                    200,
                    500,
                ).pipe(
                    mergeMap(
                        (value, index) => interval(value).pipe(
                            map(value => `obs ${index} value ${value}`),
                            take(3)
                        )
                    )
                ).subscribe(
                    getObserver()
                )
            }
        },
        {
            title: getTitle('switchMap', 'async'),
            id: 'switch-map', caption: 'async switchMap',
            click: event => {
                of(
                    1000,
                    200,
                    500,
                ).pipe(
                    switchMap(
                        (value, index) => interval(value).pipe(
                            map(value => `obs ${index} value ${value}`),
                            take(3)
                        )
                    )
                ).subscribe(
                    getObserver()
                )
            }
        },
        {
            title: getTitle('exhaustMap', 'async'),
            id: 'exhaust-map', caption: 'async exhaustMap',
            click: event => {
                of(
                    1000,
                    200,
                    4000,
                ).pipe(
                    exhaustMap(
                        (value, index) => interval(value).pipe(
                            map(value => `obs ${index} value ${value}`),
                            take(3)
                        )
                    )
                ).subscribe(
                    getObserver()
                )
            }
        },
    ]
}

prepareDOM(OPTIONS)
