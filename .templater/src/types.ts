export interface Templater {
    file: {
        content: string;
        title: string;
    };
    date: {
        now: (
            format?: string,
            offset?: number | string,
            reference?: string,
            referenceFormat?: string,
        ) => string;
    };
    system: {
        prompt: (
            text?: string,
            defaultStr?: string,
            throwOnCancel?: boolean,
            multiline?: boolean,
        ) => Promise<string>;
    };
}
