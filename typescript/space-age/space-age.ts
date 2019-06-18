export default class SpaceAge {
    private ORBITAL_PERIODS_RELATIVE_TO_EARTH = class {
        static Earth = 1;
        static Mercury = 0.2408467;
        static Venus = 0.61519726;
        static Mars = 1.8808158;
        static Jupiter = 11.862615;
        static Saturn = 29.447498;
        static Uranus = 84.016846;
        static Neptune = 164.7913;
    };

    private readonly secondsInAMinute: number = 60;
    private readonly minutesInAnHour: number = 60;
    private readonly hoursInADay: number = 24;
    private readonly daysInAYear: number = 365.25;

    private earthAge: number;

    constructor(public readonly seconds: number) {
        this.earthAge = this.seconds / this.secondsInAMinute / this.minutesInAnHour / this.hoursInADay / this.daysInAYear;
    };

    private calculateAndFormatAge(period: number): number {
        return Number((this.earthAge / period).toFixed(2));
    }

    public onEarth(): number {
        return this.calculateAndFormatAge(this.ORBITAL_PERIODS_RELATIVE_TO_EARTH.Earth);
    }

    public onMercury(): number {
        return this.calculateAndFormatAge(this.ORBITAL_PERIODS_RELATIVE_TO_EARTH.Mercury);
    }

    public onVenus(): number {
        return this.calculateAndFormatAge(this.ORBITAL_PERIODS_RELATIVE_TO_EARTH.Venus);
    }

    public onMars(): number {
        return this.calculateAndFormatAge(this.ORBITAL_PERIODS_RELATIVE_TO_EARTH.Mars);
    }

    public onJupiter(): number {
        return this.calculateAndFormatAge(this.ORBITAL_PERIODS_RELATIVE_TO_EARTH.Jupiter);
    }

    public onSaturn(): number {
        return this.calculateAndFormatAge(this.ORBITAL_PERIODS_RELATIVE_TO_EARTH.Saturn);
    }

    public onUranus(): number {
        return this.calculateAndFormatAge(this.ORBITAL_PERIODS_RELATIVE_TO_EARTH.Uranus);
    }

    public onNeptune(): number {
        return this.calculateAndFormatAge(this.ORBITAL_PERIODS_RELATIVE_TO_EARTH.Neptune);
    }
}