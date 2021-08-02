import {concatAll, exhaustAll, mergeAll, switchAll} from "rxjs";
import {Options, prepareDOM} from "../tools";

import {getASyncPayload, getObserver, getTitle} from './common'

const OPTIONS: Options = {
    header: 'Flattening higher-order Asynchronous Observables',
    buttons: [
        {
            title: getTitle('concatAll', 'async'),
            id: 'concat-async', caption: 'async concatAll',
            click: event => {
                getASyncPayload().pipe(
                    concatAll()
                ).subscribe(
                    getObserver()
                )
            }
        },
        {
            title: getTitle('mergeAll', 'async'),
            id: 'merge-async', caption: 'async mergeAll',
            click: event => {
                getASyncPayload().pipe(
                    mergeAll()
                ).subscribe(
                    getObserver()
                )
            }
        },
        {
            title: getTitle('switchAll', 'async'),
            id: 'switch-async', caption: 'async switchAll',
            click: event => {
                getASyncPayload().pipe(
                    switchAll()
                ).subscribe(
                    getObserver()
                )
            }
        },
        {
            title: getTitle('exhaustAll', 'async'),
            id: 'exhaust-async', caption: 'async exhaustAll',
            click: event => {
                getASyncPayload().pipe(
                    exhaustAll()
                ).subscribe(
                    getObserver()
                )
            }
        },
    ]
}

prepareDOM(OPTIONS)
