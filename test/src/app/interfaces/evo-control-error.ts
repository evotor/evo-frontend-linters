// valid naming
export interface EvoControlError {
    [error: string]: string;
}

// invalid naming (I prefix)
export interface IEvoControlError {
    test: string;
}

// invalid naming (Interface prefix)
export interface EvoControlErrorInterface {
    test: string;
}
