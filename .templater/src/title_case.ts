import { titleCase } from 'title-case';

export default (str: string, ...acronyms: string[]) => {
    str = titleCase(str);

    acronyms.forEach((acronym) => {
        const regex = new RegExp(`\\b${acronym}\\b`, 'gi');
        str = str.replace(regex, acronym.toUpperCase());
    });

    return str;
};
