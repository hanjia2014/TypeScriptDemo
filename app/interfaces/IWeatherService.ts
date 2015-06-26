module TSExample2.Interfaces {
    export interface IWeatherService {
        getWeatherPromise: (lat: number, lon: string) => ng.IPromise<any>;
    }
}