import {map, Observable, of } from "rxjs";
import {Options, prepareDOM, print} from "../tools";

const OPTIONS: Options = {
    header: 'Piping',
    buttons: [
        {
            title: 'use operator as ordinary function',
            id: 'ordinary', caption: 'ordinary', click: event => {
                console.group()

                map<number, number>(
                    value => value * value
                )(
                    new Observable<number>(observer => {
                        observer.next(1)
                        observer.next(2)
                        observer.next(3)
                    })
                ).subscribe(
                    print.bind(null, ['RxJS'])
                )
            }
        },
    ]
}
prepareDOM(OPTIONS)
