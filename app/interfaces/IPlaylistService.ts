module TSExample2.Interfaces {
    export interface IPlayListService {
        getPlaylist: () => Array<ITrack>;
        getMessage: () => string;
        setMessage: (string) => void;
    }
}