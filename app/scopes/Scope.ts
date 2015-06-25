module TSExample2.Scopes {
    'use strick';
    export interface IGenericScope extends ng.IScope {
        person: Person;
        message: string;
        weather: any;
        lat: number;
        lon: string;
    }

    export class Person {
        Id: number;
        Name: string;
    }
}