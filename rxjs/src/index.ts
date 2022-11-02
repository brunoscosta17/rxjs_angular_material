import { fromEvent, Observable } from 'rxjs';
import { map, filter, delay, switchMap, retry } from 'rxjs/operators';

interface IMovie {
    title: string;
}

let button = document.getElementById('button');
let output = document.getElementById('output');
let click = fromEvent(button, 'click');

function load(url: string): Observable<any> {
    return new Observable(subscriber => {
        let xhr = new XMLHttpRequest();
        output.innerHTML = '';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                let movies = JSON.parse(xhr.responseText);
                subscriber.next(movies);
                subscriber.complete();
            } else {
                subscriber.error(xhr.statusText);
            }
        });
        xhr.open('GET', url);
        xhr.send();
    }).pipe(
        retry({ count: 3, delay: 1000 })
    );
}

function renderMovie(movies: IMovie[]) {
    movies.forEach((movie: IMovie) => {
        let div = document.createElement('div');
        div.innerText = movie.title;
        output.appendChild(div);
    });
}

click.pipe(
    switchMap(() => load('./src/movies.json')))
    .subscribe({
        next: renderMovie,
        error: (e: Error) => console.log(`Error: ${e}`),
        complete: () => console.log('Complete!')
    });