import {map, Observable, of } from "rxjs";
import {Options, prepareDOM, print} from "../tools";

const OPTIONS: Options = {
    header: 'Operators have two kinds',
    buttons: [
        {
            title: 'use `map` to transform values',
            id: 'pipeable', caption: 'pipeable', click: event => {
                console.group()

                new Observable<number>(observer => {
                    observer.next(1)
                    observer.next(2)
                    observer.next(3)
                }).pipe(
                    map(value => value * value)
                ).subscribe(
                    print.bind(null, ['RxJS'])
                )
            }
        },
        {
            title: 'use `of` to create observable from values set',
            id: 'creation', caption: 'creation', click: event => {
                console.group()

                of(
                    4,5,6
                ).subscribe(
                    print.bind(null, ['RxJS'])
                )
            }
        },
        {
            title: 'use `of` to create observable and `map` to transform value',
            id: 'both-kinds', caption: 'both kinds', click: event => {
                console.group()

                of(
                    7,8,9
                ).pipe(
                    map(value => value * value)
                ).subscribe(
                    print.bind(null, ['RxJS'])
                )
            }

        }
    ]
}
prepareDOM(OPTIONS)
