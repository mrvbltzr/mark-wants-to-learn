import { titleCase } from 'title-case';

const acronyms: string[] = ['wrspm', 'css'];

export default (str: string) => {
    str = titleCase(str);

    acronyms.forEach((acronym) => {
        str = str.replace(new RegExp(`\\b${acronym}\\b`, 'gi'), acronym.toUpperCase());
    });

    return str;
};
