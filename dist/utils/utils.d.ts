export declare class PromiseHelper {
    static doNothing(): Promise<void>;
    static promiseResult<T>(value: T): Promise<T>;
}
export declare class TestNamingHelper {
    static scenarioName(description: string): string;
    static artifactName(artifact: string): string;
}
