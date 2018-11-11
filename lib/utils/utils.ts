export class PromiseHelper {

    static doNothing(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            resolve();
        });
    }

    static promiseResult<T>(value: T) {
        return new Promise<T>((resolve, reject) => {
            resolve(value);
        });
    }
}

export class TestNamingHelper{
    static scenarioName(description: string) {
        return `\r\n\r\n` + `# ${description}`;
    }

    static artifactName(artifact: string) {
        const name = `> ${artifact}`;
        const rule = '_'.repeat(name.length);
        const final = `\r\n` + name + `\r\n` + rule;
        return final;
    }
}