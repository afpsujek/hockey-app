import { writable } from 'svelte/store';

export const season = writable({
    startSeason: '2019',
    endSeason: '2020',
    get seasonApiVal() {
        return this.startSeason + this.endSeason
    }
});