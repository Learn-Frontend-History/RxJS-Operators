import {concatAll, exhaustAll, mergeAll, switchAll} from "rxjs";
import {Options, prepareDOM} from "../tools";

import {getObserver, getSyncPayload, getTitle} from './common'

const OPTIONS: Options = {
    header: 'Flattening higher-order synchronous Observables',
    buttons: [
        {
            title: getTitle('concatAll', 'sync'),
            id: 'concat', caption: 'concatAll', click: event => {
                console.group()

                getSyncPayload().pipe(
                    concatAll()
                ).subscribe(
                    getObserver()
                )
            }
        },
        {
            title: getTitle('mergeAll', 'sync'),
            id: 'merge', caption: 'mergeAll', click: event => {
                console.group()

                getSyncPayload().pipe(
                    mergeAll()
                ).subscribe(
                    getObserver()
                )
            }
        },
        {
            title: getTitle('switchAll', 'sync'),
            id: 'switch', caption: 'switchAll', click: event => {
                console.group()

                getSyncPayload().pipe(
                    switchAll()
                ).subscribe(
                    getObserver()
                )
            }
        },
        {
            title: getTitle('exhaustAll', 'sync'),
            id: 'exhaust', caption: 'exhaustAll', click: event => {
                console.group()

                getSyncPayload().pipe(
                    exhaustAll()
                ).subscribe(
                    getObserver()
                )
            }
        },
    ]
}

prepareDOM(OPTIONS)
