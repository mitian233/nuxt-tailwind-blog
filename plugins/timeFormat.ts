import { defineNuxtPlugin } from "#app";

const timeFormat = (date: string):string => {
    const dateObj:Date = new Date(date);
    const month:number = dateObj.getMonth() + 1;
    const day:number = dateObj.getDate();
    const year:number = dateObj.getFullYear();
    const hours:string = time2Str(dateObj.getHours());
    const minutes:string = time2Str(dateObj.getMinutes());
    const result:string = `${year}/${month}/${day} ${hours}:${minutes}`;
    return result;
}

const time2Str = (num:number):string => {
    if (num < 10) {
        return `0${num}`;
    }
    return `${num}`;
}

export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            timeFormat: (date: string):string => timeFormat(date)
        }
    }
});
